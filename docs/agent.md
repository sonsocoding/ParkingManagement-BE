# Agent Guide — Smart Parking Management System Backend

> Read this file before touching any code. It tells you what this project is, how it's structured, what patterns to follow, and what traps to avoid.

---

## Project Overview

A **Smart Parking Management System** backend — REST API built with Node.js, Express 5, Prisma ORM, and PostgreSQL (NeonDB). Uses JWT (httpOnly cookie + Bearer header) for authentication and role-based access control (RBAC) with two roles: `ADMIN`, `USER`.

**Current state**: All modules are fully implemented — Auth, User, Vehicle, ParkingLot, ParkingSlot, Booking, ParkingRecord, Payment, and MonthlyPass.

---

## Essential Files to Read First

| File | Purpose |
|---|---|
| `prisma/schema.prisma` | Full database schema — 9 models, 7 enums. **Read this to understand all data relationships.** |
| `docs/roles.md` | Permission matrix — who can do what. **Consult this before writing any route.** |
| `docs/instruction.md` | Development roadmap — phases and build order. **Follow this for new modules.** |
| `docs/folder_structures.md` | What exists and what's `[TODO]`. |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (ES Modules — `"type": "module"` in package.json) |
| Framework | Express 5.2 |
| ORM | Prisma 6 |
| Database | PostgreSQL (NeonDB, connection pooler) |
| Auth | JWT via `jsonwebtoken` — stored in httpOnly cookie + returned in response body |
| Password | `bcryptjs` with salt rounds = 10 |
| Validation | `zod` — schema files in `src/schemas/` |
| Dev tools | `nodemon`, `dotenv` |

---

## Architecture Pattern

```
Route → Middleware (authenticate → [authorize] → [validate]) → Controller → Prisma → DB
```

- **No service layer** — controllers talk to Prisma directly
- **Global error handler** — `src/middleware/errorHandler.js` catches all unhandled errors
- **asyncHandler** — all controller functions are wrapped, no manual try/catch needed
- **formatResponse** — all responses use `formatSuccess(data, message?)` / `formatError(message)`

---

## Booking + Payment Flow (Critical — Read Before Touching These Modules)

The system supports two booking payment methods: `CASH` and `VNPAY`.

### CASH Flow (current default)

```
USER: POST /api/bookings  { paymentMethod: "CASH" }
  → Booking created with status: CONFIRMED
  → Slot set to RESERVED
  → Payment created with status: PENDING, linked to booking.id

USER: POST /api/records/checkin  { vehicleId, parkingSlotId, parkingLotId, bookingId }
  → Check booking is CONFIRMED (RESERVED slot is accepted here — not AVAILABLE)
  → ParkingRecord created with status: CHECKED_IN
  → Slot set to OCCUPIED

USER: PUT /api/records/:id/checkout
  → actualCost calculated from real check-in/check-out time
  → ParkingRecord updated: status CHECKED_OUT, actualCost, checkOutTime
  → Existing booking payment amount updated to actualCost; status set to SUCCESS
  → Slot set to AVAILABLE
```

### VNPAY Flow (stubbed — not enabled in booking yet)

```
POST /api/bookings  { paymentMethod: "VNPAY" }
  → throws Error — disabled pending full gateway integration

IPN callback: GET /api/payments/vnpay-ipn?vnp_TxnRef=<bookingId>&vnp_ResponseCode=<code>
  → responseCode "00" → payment SUCCESS + booking CONFIRMED + slot RESERVED
  → responseCode else → payment FAILED + booking CANCELLED + slot AVAILABLE
```

### Booking Status Machine

```
PENDING_PAYMENT → CONFIRMED → (check-in) → → (check-out) → COMPLETED
PENDING_PAYMENT → CANCELLED
CONFIRMED       → CANCELLED
```

---

## Monthly Pass Flow

A monthly pass is system-wide — it grants access to **any parking lot**, but is tied to **one specific vehicle** and **one vehicle type**. One vehicle can only have one active pass at a time.

### Pricing (set by admin at runtime via `PUT /api/monthly-passes/price`)

| Vehicle Type | Default Price |
|---|---|
| CAR | 1,500,000 VND/month |
| MOTORBIKE | 300,000 VND/month |

```
USER: POST /api/monthly-passes  { vehicleType, vehicleId, months }
  → Validates: user owns vehicle, vehicle type matches, no existing ACTIVE pass for type, vehicle not in another pass
  → MonthlyPass created with status: ACTIVE
  → Payment created: status PENDING, linked to monthlyPassId

USER: PUT /api/monthly-passes/:id/renew  { months }
  → Extends endDate from current end (or now if expired)
  → Sets status back to ACTIVE
  → New Payment created (not linked to monthlyPassId due to @unique constraint)

USER: DELETE /api/monthly-passes/:id
  → Sets status to CANCELLED (only ACTIVE passes can be cancelled)

ADMIN: PUT /api/monthly-passes/:id/status  { status }
  → Force-sets any status (ACTIVE/EXPIRED/CANCELLED)

ADMIN: PUT /api/monthly-passes/price  { carMonthlyPrice?, motorbikeMonthlyPrice? }
  → Updates in-memory PASS_PRICES — affects all future registrations/renewals
```

---

## File Naming & Location Rules

| Type | Location | Example |
|---|---|---|
| Routes | `src/routes/` | `bookingRoutes.js` |
| Controllers | `src/controllers/` | `bookingController.js` |
| Middleware | `src/middleware/` | `authenticate.js` |
| Utilities | `src/utils/` | `generateToken.js` |
| Validation schemas | `src/schemas/` | `bookingSchema.js` |
| Config | `src/config/` | `db.js` |
| Schema | `prisma/schema.prisma` | — |
| Seed data | `prisma/seed.js` | — |
| Generated client | `src/generated/` | (auto-generated, do NOT edit) |

---

## Patterns to Follow

### 1. Prisma Client — Always import from `config/db.js`

```js
import { prisma } from "../config/db.js";
```

**Never** create a new `PrismaClient()` instance in individual files.

### 2. Route structure — Group by access level

```js
const router = express.Router();
router.use(authenticate);           // All routes require auth

// -- personal (any authenticated user, own data) --
router.get("/me", getOwnResource);
router.put("/me", updateOwnResource);

// -- admin (read access) --
router.get("/", authorize("ADMIN"), getAllResources);

// -- admin only (write access) --
router.post("/", authorize("ADMIN"), createResource);
router.put("/:id", authorize("ADMIN"), updateResource);
router.delete("/:id", authorize("ADMIN"), deleteResource);

export default router;
```

### 3. Controller structure

```js
const doSomething = asyncHandler(async (req, res) => {
  // 1. Extract params/body
  // 2. Validate ownership if applicable (req.user.id === resource.userId)
  // 3. Prisma query (use $transaction for multi-step operations)
  // 4. Return response
  return res.status(200).json(formatSuccess({ resource }));
});
```

### 4. Mounting routes in `app.js`

```js
import resourceRoute from "./routes/resourceRoutes.js";
app.use("/api/resources", resourceRoute);
```

### 5. Ownership check in controllers

For "user edits own resource" endpoints, always verify:

```js
if (resource.userId !== req.user.id) {
  return res.status(403).json(formatError("Forbidden"));
}
```

### 6. formatSuccess / formatError signature

```js
// Correct usage:
formatSuccess({ bookings })             // data object
formatSuccess({ booking }, "Created")  // data + optional message
formatError("Something went wrong")    // error message
```

**Do NOT** swap the argument order. Signature is `formatSuccess(data, message?)`.

---

## Known Issues — Do NOT Repeat These

1. **Never store plaintext passwords** — always hash with `bcrypt`
2. **Never return `password` field** in responses — use `select` or `omit`
3. **Never expose raw error objects** to the client — log server-side, return generic message
4. **Never use `404` for server errors** — use `500` for internal errors, `404` only for "not found"
5. **Never send a body with `204`** — `res.status(204).send()`, no `.json()`
6. **Never create payment without linking bookingId or monthlyPassId** — orphaned payments break the flow
7. **Never check `status !== AVAILABLE`** when a booking check-in is expected — reserved slots are valid targets
8. **Never use `CANCELLED` as a `PaymentStatus`** — `PaymentStatus` enum is `PENDING / SUCCESS / FAILED / REFUNDED`. Use `FAILED` when cancelling a booking's payment.
9. **Monthly pass renewal payments** are NOT linked via `monthlyPassId` (schema has `@unique`) — they are standalone payment records

---

## Database Models Reference

```
User ──┬── Vehicle ──┬── ParkingRecord
       │             ├── Booking
       │             └── MonthlyPass ──── Payment
       │
       ├── Booking ──┬── ParkingSlot ── ParkingLot
       │             └── Payment
       │
       ├── ParkingRecord ──── Payment
       └── Payment
```

### Enums

| Enum | Values |
|---|---|
| `UserRole` | `ADMIN`, `USER` |
| `VehicleType` | `CAR`, `MOTORBIKE` |
| `SlotStatus` | `AVAILABLE`, `OCCUPIED`, `RESERVED`, `MAINTENANCE` |
| `BookingStatus` | `PENDING_PAYMENT`, `CONFIRMED`, `COMPLETED`, `CANCELLED` |
| `PaymentMethod` | `CASH`, `VNPAY` |
| `PaymentStatus` | `PENDING`, `SUCCESS`, `FAILED`, `REFUNDED` |
| `PassStatus` | `ACTIVE`, `EXPIRED`, `CANCELLED` |
| `ParkingRecordStatus` | `CHECKED_IN`, `CHECKED_OUT` |

---

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server with nodemon (port 3000) |
| `npm run seed` | Seed database with test data |
| `npx prisma db push` | Push schema changes to DB (no migration file) |
| `npx prisma migrate dev` | Create and apply migration |
| `npx prisma generate` | Regenerate Prisma client (to `src/generated/`) |
| `npx prisma studio` | Open Prisma Studio (DB GUI) |

---

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (NeonDB) |
| `PORT` | Server port (default: 3000) |
| `JWT_SECRET` | Secret for signing JWT tokens |
| `JWT_EXPIRES_IN` | Token expiry (default: 7d) |

---

## Module Build Order

All modules are complete:

```
✅ 1. ParkingLot    (standalone — no dependencies)
✅ 2. ParkingSlot   (depends on ParkingLot)
✅ 3. Booking       (depends on User, Vehicle, ParkingSlot, ParkingLot)
✅ 4. ParkingRecord (depends on Vehicle, ParkingSlot, ParkingLot, optionally Booking)
✅ 5. Payment       (depends on User, Booking or MonthlyPass or ParkingRecord)
✅ 6. MonthlyPass   (depends on User, Vehicle)
```

---

## Testing

- Set `{{baseUrl}}` to `http://localhost:3000`
- Login first, copy the token, set `{{token}}` and `{{admin_token}}`
- Seed the DB before testing: `npm run seed`
- Demo credentials:
  - Admin: `admin@parking.com` / `admin123`
  - User: `user@parking.com` / `user123`
