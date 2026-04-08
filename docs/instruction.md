# Backend Development Instruction Guide

> Step-by-step instructions for building out the Smart Parking Management System backend.  
> No code provided — this is a roadmap to guide your implementation decisions.

---

## Phase 0: Fix Critical Issues in Existing Code

Before building anything new, fix the issues listed in `improvement.md`. Specifically:

1. **Add `try/catch`** to every function in `authController.js`
2. **Hash the password** in `createUser` (userController.js) before saving
3. **Fix `login` response** to return data from the DB user object, not from `req.body`
4. **Add `role` to `getMe` select** so the frontend can check the user's role
5. **Exclude `password`** from all user query responses (`getOwnProfile`, `getAllUsers`)
6. **Fix HTTP status codes** — `409` for duplicates, `500` for server errors, no body on `204`
7. **Change `createUser` route** from `PUT /create` to `POST /`

Once these are done, you have a solid auth + user + vehicle foundation to build on.

---

## Phase 1: Establish Backend Utilities & Patterns

Before building more features, set up shared patterns that every future controller will use.

### 1.1 Create `asyncHandler` Utility
- A wrapper function that catches promise rejections in async route handlers
- Eliminates the need for `try/catch` in every single controller function
- Wrap every controller export with it

### 1.2 Create Global Error Handler Middleware
- Add an error-handling middleware to `app.js` (must have 4 params: `err, req, res, next`)
- Log the full error server-side
- Return a clean `{ status: "error", message: "..." }` to the client
- Handle Prisma-specific errors (unique constraint, record not found, etc.) into proper HTTP status codes

### 1.3 Create `formatResponse` Utility
- Standardize all success responses to `{ status: "success", data: { ... } }`
- Standardize all error responses to `{ status: "error", message: "..." }`
- Use this in every controller going forward

### 1.4 Add Input Validation
- Choose a validation library: `zod` (recommended) or `express-validator`
- Create validation schemas for each route's request body
- Apply validation as middleware before the controller runs
- Return `400 Bad Request` with field-specific error messages

---

## Phase 2: Build Remaining CRUD Modules

Build each module in this order — each one builds on the previous:

### 2.1 Parking Lot Module
- **Why first**: Everything else (slots, bookings, records) depends on a parking lot existing
- **Controller actions**: create, getAll, getById, update, delete
- **Route access**:
  - `GET` — Any authenticated user can view
  - `POST/PUT/DELETE` — ADMIN only
- **Important**: Include `slots` count in responses, validate `totalSlots` matches zone config

### 2.2 Parking Slot Module
- **Why second**: Bookings reference specific slots
- **Controller actions**: create (bulk by zone), getByLotId, update status, delete
- **Route access**: ADMIN only for mutations, any authenticated user can view
- **Important**: Slot status transitions: `AVAILABLE ↔ RESERVED ↔ OCCUPIED`, `AVAILABLE ↔ MAINTENANCE`

### 2.3 Booking Module
- **Why third**: Core user-facing feature, references User + Vehicle + Slot + Lot
- **Controller actions**: create, getOwn, getAll, getById, cancel, complete
- **Route access**:
  - USER — CRUD own bookings only
  - ADMIN — View/modify all, force cancel, force complete
  - MANAGER — View all (read-only)
- **Important**:
  - When creating a booking → change slot status to `RESERVED`
  - When cancelling → change slot status back to `AVAILABLE`
  - When completing → change slot status to `AVAILABLE` and create a ParkingRecord
  - Calculate `estimatedCost` from `hourlyRate × hours`
  - Prevent double-booking the same slot (check slot status before confirming)

### 2.4 Parking Record Module
- **Why fourth**: Created automatically when bookings complete or vehicles check in
- **Controller actions**: checkIn, checkOut, getByVehicle, getByLot, getAll
- **Route access**:
  - ADMIN — Create/manage records
  - MANAGER — View all (read-only)
  - USER — View own records
- **Important**:
  - `checkIn` → set slot to `OCCUPIED`
  - `checkOut` → calculate `actualCost` from real time, set slot to `AVAILABLE`

### 2.5 Payment Module
- **Why fifth**: Created when bookings are confirmed or monthly passes purchased
- **Controller actions**: create, getOwn, getAll, getById, updateStatus
- **Route access**:
  - USER — View own payments
  - ADMIN — View all, manual override, refund
  - MANAGER — View all (read-only)
- **Important**:
  - Link payment to either `bookingId` OR `monthlyPassId` (never both)
  - Support payment methods: CASH, CARD, MOMO, VNPAY
  - Payment status flow: `PENDING → SUCCESS` or `PENDING → FAILED`, `SUCCESS → REFUNDED`

### 2.6 Monthly Pass Module
- **Controller actions**: register, getOwn, getAll, renew, cancel
- **Route access**:
  - USER — Register, view, renew, cancel own
  - ADMIN — Approve, terminate, view all
  - MANAGER — View all (read-only)
- **Important**:
  - Pass status: `ACTIVE → EXPIRED` (automatic by date), `ACTIVE → CANCELLED`
  - Link to a specific parking lot and vehicle type

### 2.7 Admin Log Module
- **Controller actions**: getAll, getByAdmin, getByResourceType
- **Route access**: ADMIN + MANAGER only (read-only for both)
- **Important**:
  - Create log entries **inside other controllers** whenever an admin creates, updates, or deletes a resource
  - Store `changes` as `{ old: {...}, new: {...} }` for audit trail
  - Capture `req.ip` for `ipAddress`

---

## Phase 3: Wire Everything Together

### 3.1 Mount All Routes in `app.js`
- Import each new route file
- Mount under `/api/parking-lots`, `/api/slots`, `/api/bookings`, `/api/records`, `/api/payments`, `/api/monthly-passes`, `/api/admin-logs`

### 3.2 Update Seed Script
- Add more realistic data for new modules
- Test the full flow: User → Vehicle → Booking → ParkingRecord → Payment

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
| Auth middleware | Always `authenticate` first, then `authorize(roles)` |
| Ownership checks | Do in the controller, not middleware — check `resource.userId === req.user.id` |
| Prisma imports | Always from `../config/db.js` — never create new `PrismaClient()` instances |
| IDs | Use Prisma `cuid()` — never expose auto-increment IDs |
| Dates | Let Prisma handle `createdAt`/`updatedAt` — use `DateTime` for domain dates |
| Decimals | Use `Decimal(10,2)` for all money fields — never use `Float` |
