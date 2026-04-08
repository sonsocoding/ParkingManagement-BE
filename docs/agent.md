# Agent Guide — Smart Parking Management System Backend

> Read this file before touching any code. It tells you what this project is, how it's structured, what patterns to follow, and what traps to avoid.

---

## Project Overview

A **Smart Parking Management System** backend — REST API built with Node.js, Express 5, Prisma ORM, and PostgreSQL (NeonDB). Uses JWT (httpOnly cookie + Bearer header) for authentication and role-based access control (RBAC) with three roles: `ADMIN`, `MANAGER`, `USER`.

**Current state**: Auth, User, and Vehicle modules are implemented. ParkingLot, Booking, Payment, ParkingRecord, MonthlyPass, and AdminLog schemas exist in the database but have **no routes or controllers yet**.

---

## Essential Files to Read First

| File | Purpose |
|---|---|
| `prisma/schema.prisma` | Full database schema — 10 models, 7 enums. **Read this to understand all data relationships.** |
| `docs/roles.md` | Permission matrix — who can do what. **Consult this before writing any route.** |
| `docs/improvement.md` | Known bugs and code quality issues. **Check before modifying existing code.** |
| `docs/instruction.md` | Development roadmap — phases and build order. **Follow this for new modules.** |
| `docs/folder_structures.md` | What exists and what's `[TODO]`. |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (ES Modules — `"type": "module"` in package.json) |
| Framework | Express 5.2 |
| ORM | Prisma 6.19 |
| Database | PostgreSQL (NeonDB, connection pooler) |
| Auth | JWT via `jsonwebtoken` — stored in httpOnly cookie + returned in response body |
| Password | `bcryptjs` with salt rounds = 10 |
| Dev tools | `nodemon`, `dotenv` |

---

## Architecture Pattern

```
Route → Middleware (authenticate → authorize) → Controller → Prisma → DB
```

- **No service layer** — controllers talk to Prisma directly
- **No validation layer** — inputs are not yet validated (see improvement.md)
- **No global error handler** — each controller has its own `try/catch`

---

## File Naming & Location Rules

| Type | Location | Example |
|---|---|---|
| Routes | `src/routes/` | `bookingRoutes.js` |
| Controllers | `src/controllers/` | `bookingController.js` |
| Middleware | `src/middleware/` | `authenticate.js` |
| Utilities | `src/utils/` | `generateToken.js` |
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

// -- admin & manager (read access) --
router.get("/", authorize("ADMIN", "MANAGER"), getAllResources);

// -- admin only (write access) --
router.post("/", authorize("ADMIN"), createResource);
router.put("/:id", authorize("ADMIN"), updateResource);
router.delete("/:id", authorize("ADMIN"), deleteResource);

export default router;
```

### 3. Controller structure

```js
const doSomething = async (req, res) => {
  try {
    // 1. Extract params/body
    // 2. Validate ownership if applicable (req.user.id === resource.userId)
    // 3. Prisma query
    // 4. Return response
    return res.status(200).json({ data: { resource } });
  } catch (err) {
    return res.status(500).json({ message: "..." });
  }
};

export { doSomething };
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
  return res.status(403).json({ message: "Forbidden" });
}
```

---

## Known Issues — Do NOT Repeat These

1. **Never store plaintext passwords** — always hash with `bcrypt`
2. **Never return `password` field** in responses — use `select` or `omit`
3. **Never expose raw error objects** to the client — log server-side, return generic message
4. **Never use `404` for server errors** — use `500` for internal errors, `404` only for "not found"
5. **Never send a body with `204`** — `res.status(204).send()`, no `.json()`
6. **Never destructure `req.body` for values you already have from the DB** — use the queried object

---

## Database Models Reference

```
User ──┬── Vehicle ──── ParkingRecord
       │                     │
       ├── Booking ──────────┘
       │     │
       │     ├── ParkingSlot ── ParkingLot
       │     │                      │
       │     └── Payment            ├── ParkingSlot[]
       │                            ├── ParkingRecord[]
       ├── MonthlyPass ─────────────┘
       │     │
       │     └── Payment
       │
       └── AdminLog (only ADMIN creates entries)
```

### Enums

| Enum | Values |
|---|---|
| `UserRole` | `ADMIN`, `MANAGER`, `USER` |
| `VehicleType` | `CAR`, `MOTORBIKE` |
| `SlotStatus` | `AVAILABLE`, `OCCUPIED`, `RESERVED`, `MAINTENANCE` |
| `BookingStatus` | `PENDING`, `CONFIRMED`, `COMPLETED`, `CANCELLED` |
| `PaymentMethod` | `CASH`, `CARD`, `MOMO`, `VNPAY` |
| `PaymentStatus` | `PENDING`, `SUCCESS`, `FAILED`, `REFUNDED` |
| `PassStatus` | `ACTIVE`, `EXPIRED`, `CANCELLED` |

---

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server with nodemon (port 3000) |
| `npm run seed` | Seed database with test data |
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

If you're building new features, follow this order — each depends on the previous:

```
1. ParkingLot    (standalone — no dependencies)
2. ParkingSlot   (depends on ParkingLot)
3. Booking       (depends on User, Vehicle, ParkingSlot, ParkingLot)
4. ParkingRecord (depends on Vehicle, ParkingSlot, ParkingLot, optionally Booking)
5. Payment       (depends on User, Booking or MonthlyPass)
6. MonthlyPass   (depends on User, ParkingLot)
7. AdminLog      (depends on User — created as side effect in other controllers)
```

---

## Testing

- Use the Postman collection at `test.json` (import into Postman)
- Set `{{baseUrl}}` to `http://localhost:3000`
- Login first, copy the token, set `{{token}}` and `{{admin_token}}`
- Seed the DB before testing: `npm run seed`
- Demo credentials:
  - Admin: `admin@parking.com` / `admin123`
  - Manager: `manager@parking.com` / `manager123`
  - User: `user@parking.com` / `user123`
