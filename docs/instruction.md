# Backend Development Instruction Guide

> Step-by-step instructions for building out the Smart Parking Management System backend.  
> Phases 0–3 (core modules) are **complete**. Remaining work is Phase 4 (cross-cutting) and Phases 6–7 (MonthlyPass, AdminLog).

---

## Phase 0: Fix Critical Issues in Existing Code ✅ DONE

All items fixed:

1. **`try/catch`** replaced by `asyncHandler` wrapper
2. **Password hashing** implemented in `authController.js`
3. **`login` response** returns data from DB user object
4. **`role`** included in `getMe` select
5. **`password`** excluded from all user query responses
6. **HTTP status codes** fixed — `409` for duplicates, `500` for server errors
7. **`createUser` route** changed to `POST /`

---

## Phase 1: Establish Backend Utilities & Patterns ✅ DONE

### 1.1 `asyncHandler` Utility ✅
- Wraps all controller exports — no manual try/catch anywhere

### 1.2 Global Error Handler Middleware ✅
- `src/middleware/errorHandler.js` — 4-param handler
- Maps Prisma errors (P2002, P2025, P2003, P2014) to proper HTTP codes
- Returns clean `{ status: "error", message: "..." }` shape

### 1.3 `formatResponse` Utility ✅
- `formatSuccess(data, message?)` → `{ status: "success", data, [message] }`
- `formatError(message)` → `{ status: "error", message }`

### 1.4 Input Validation ✅
- `zod` schemas in `src/schemas/` — one file per module
- `validate` middleware applies schema before controller runs
- Returns `400 Bad Request` with field-specific error messages

---

## Phase 2: Build Remaining CRUD Modules

Build each module in this order — each one builds on the previous:

### 2.1 Parking Lot Module ✅ DONE
- **Controller actions**: create, getAll, getById, update, delete
- **Route access**:
  - `GET` — Any authenticated user can view
  - `POST/PUT/DELETE` — ADMIN only
- **Important**: Include `slots` count in responses, validate `totalSlots` matches zone config

### 2.2 Parking Slot Module ✅ DONE
- **Controller actions**: create (bulk), getByLotId, updateStatus, update, delete
- **Route access**: ADMIN only for mutations, any authenticated user can view
- **Important**: Slot status transitions: `AVAILABLE ↔ RESERVED ↔ OCCUPIED`, `AVAILABLE ↔ MAINTENANCE`

### 2.3 Booking Module ✅ DONE
- **Controller actions**: create, getOwn, getAll, getById, updateOwn, updateById (admin), updateStatus (admin), cancelOwn, deleteById (admin)
- **Route access**:
  - USER — Create, view own, update own, cancel own
  - ADMIN — View/modify all, force cancel, force complete, delete
  - MANAGER — View all (read-only)
- **Booking flow**:
  - When creating with `CASH` → status `CONFIRMED` + slot `RESERVED` + payment `PENDING` (linked to booking)
  - When creating with `VNPAY` → currently disabled
  - When cancelling (CONFIRMED or PENDING_PAYMENT) → slot `AVAILABLE`
  - `estimatedCost` = `hourlyRate × hours` based on vehicle type
  - `COMPLETED` status is reached only after physical checkout, not via admin status update

### 2.4 Parking Record Module ✅ DONE
- **Controller actions**: checkIn, checkOut, getOwnRecord, getAllRecord
- **Route access**:
  - USER — checkIn (own vehicle), checkOut (own record), view own records
  - ADMIN/MANAGER — View all (read-only)
- **checkIn rules**:
  - Walk-in (no bookingId): slot must be `AVAILABLE`
  - Pre-booked (bookingId provided): slot can be `RESERVED`; booking must be `CONFIRMED`
  - Sets slot to `OCCUPIED`; sets booking to `COMPLETED` when linked
- **checkOut flow**:
  - Calculates `actualCost` from real time delta × hourly rate
  - Updates existing booking payment to `SUCCESS` (preserving original method)
  - Sets slot back to `AVAILABLE`

### 2.5 Payment Module ✅ DONE
- **Controller actions**: createPayment (admin), getOwnPayment, getAllPayment, getPaymentByUserId, getPaymentById, updatePaymentStatus, handleVnpayIpn
- **Route access**:
  - USER — View own payments
  - ADMIN — View all, manual override/entry, refund, change status
  - MANAGER — View all (read-only)
- **Important**:
  - Payment is auto-created inside `createBooking` (linked to bookingId)
  - Payment is finalized (amount + SUCCESS) at `checkOut`
  - VNPay IPN endpoint is public (no JWT required)
  - Status flow: `PENDING → SUCCESS` or `PENDING → FAILED`, `SUCCESS → REFUNDED`
  - Supported methods: `CASH`, `VNPAY`

### 2.6 Monthly Pass Module ⬜ TODO
- **Controller actions**: register, getOwn, getAll, renew, cancel
- **Route access**:
  - USER — Register, view, renew, cancel own
  - ADMIN — Approve, terminate, view all
  - MANAGER — View all (read-only)
- **Important**:
  - Pass status: `ACTIVE → EXPIRED` (automatic by date), `ACTIVE → CANCELLED`
  - Link to a specific parking lot and vehicle type

### 2.7 Admin Log Module ⬜ TODO
- **Controller actions**: getAll, getByAdmin, getByResourceType
- **Route access**: ADMIN + MANAGER only (read-only for both)
- **Important**:
  - Create log entries **inside other controllers** whenever an admin creates, updates, or deletes a resource
  - Store `changes` as `{ old: {...}, new: {...} }` for audit trail
  - Capture `req.ip` for `ipAddress`

---

## Phase 3: Wire Everything Together ✅ DONE (for implemented modules)

### 3.1 Mount All Routes in `app.js` ✅
- All implemented route files are mounted
- `/api/parking-lots`, `/api/parking-slots`, `/api/bookings`, `/api/records`, `/api/payments`

### 3.2 Update Seed Script ✅
- Seed reflects the full flow: User → Vehicle → Booking (CONFIRMED + PENDING_PAYMENT) → ParkingRecord → Payment (linked to bookingId)
- One of each role, 1 parking lot, 10 slots across 3 zones, 2 vehicles, 2 bookings, 2 payments

### 3.3 Create/Update Postman Collection
- Add requests for every new endpoint
- Organize by module (same structure as `test.json`)
- Include environment variables for token management

---

## Phase 4: Cross-Cutting Concerns

### 4.1 Pagination
- All "get all" endpoints should support `?page=1&limit=20`
- Return `{ data, pagination: { page, limit, total, totalPages } }`

### 4.2 Filtering & Search
- Parking lots: filter by `name`, `address`
- Slots: filter by `status`, `vehicleType`, `zoneId`
- Bookings: filter by `status`, `date range`
- Payments: filter by `status`, `method`, `date range`

### 4.3 Sorting
- Support `?sort=createdAt&order=desc` query parameters on list endpoints

### 4.4 Rate Limiting
- Apply rate limiting to auth routes (prevent brute force)
- Use `express-rate-limit` package

---

## Development Workflow Per Module

For each new module, follow this exact order:

```
1. Check roles.md → Know who can access what
2. Create route file → Define endpoints and middleware chain
3. Create controller file → Implement each endpoint handler
4. Mount in app.js → Register the route prefix
5. Test with Postman → Verify happy path + error cases + role enforcement
6. Update seed.js if needed → Add test data
```

---

## Key Conventions to Follow

| Convention | Rule |
|---|---|
| File naming | `camelCase.js` (e.g., `parkingLotController.js`) |
| Route prefix | `/api/resource-name` (kebab-case, plural) |
| HTTP methods | `GET` list/read, `POST` create, `PUT` update, `DELETE` remove |
| Auth middleware | Always `authenticate` first, then `authorize(roles)`, then `validate(schema)` |
| Ownership checks | Do in the controller, not middleware — check `resource.userId === req.user.id` |
| Prisma imports | Always from `../config/db.js` — never create new `PrismaClient()` instances |
| IDs | Use Prisma `cuid()` — never expose auto-increment IDs |
| Dates | Let Prisma handle `createdAt`/`updatedAt` — use `DateTime` for domain dates |
| Decimals | Use `Decimal(10,2)` for all money fields — never use `Float` |
| Payment method | `CASH` or `VNPAY` only (schema updated — CARD and MOMO removed) |
| BookingStatus | `PENDING_PAYMENT`, `CONFIRMED`, `COMPLETED`, `CANCELLED` |
| formatSuccess | Signature: `formatSuccess(data, message?)` — do NOT swap arg order |
