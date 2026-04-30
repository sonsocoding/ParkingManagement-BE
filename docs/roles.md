# RBAC — Role-Based Access Control

Two roles: **ADMIN**, **USER**.

---

## Quick Reference

| Resource | Action | USER | ADMIN |
|---|---|---|---|
| **User** | View own profile | ✅ | ✅ |
| | Edit own profile | ✅ | ✅ |
| | Delete own account | ✅ | ✅ |
| | View all users | ❌ | ✅ |
| | Create/Edit/Delete any user | ❌ | ✅ |
| **Vehicle** | CRUD own vehicles | ✅ | ✅ |
| | View all vehicles | ❌ | ✅ |
| | Edit/Delete any vehicle | ❌ | ✅ |
| **ParkingLot** | Search & view | ✅ | ✅ |
| | Create/Edit/Delete | ❌ | ✅ |
| **ParkingSlot** | View availability | ✅ | ✅ |
| | Manage slots | ❌ | ✅ |
| **Booking** | Create own bookings | ✅ | ❌ |
| | View own bookings | ✅ | ✅ |
| | Update/Cancel own bookings | ✅ | ❌ |
| | View all bookings | ❌ | ✅ |
| | Modify/Cancel/Delete any booking | ❌ | ✅ |
| | Change booking status | ❌ | ✅ |
| **ParkingRecord** | Check in / Check out own vehicle | ✅ | ❌ |
| | View own records | ✅ | ✅ |
| | View all records | ❌ | ✅ |
| **Payment** | View own payments | ✅ | ✅ |
| | View all payments | ❌ | ✅ |
| | Manual entry / Override / Refund | ❌ | ✅ |
| **MonthlyPass** | Register/Renew/Cancel own | ✅ | ✅ |
| | View all passes | ❌ | ✅ |
| | Approve/Terminate any | ❌ | ✅ |

---

## Role Summary

**USER** — Can only access and modify **own** data. No cross-user visibility. Can create bookings, check in/out their own vehicles, and view their own payments.

Payment note: users may have active bookings with no `Payment` row yet when the method is `CASH`; payment is created later at checkout.



**ADMIN** — Full system control. Can CRUD all resources and manage the infrastructure.

---

## Middleware Pattern

```
Request → authenticate (JWT) → [authorize (role check)] → [validate (zod)] → Controller
```

1. `authenticate` — Verifies JWT, attaches `req.user = { id, role }`
2. `authorize(...roles)` — Checks `req.user.role` against allowed roles, returns 403 if denied
3. `validate(schema)` — Runs zod schema against `req.body` / `req.params`, returns 400 on failure
4. Controller-level ownership checks — For `/:id` routes, verify `req.user.id === resource.userId`

---

## Route-Level Enforcement

```
# Public
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/payments/vnpay-ipn         ← payment gateway webhook, must be public

# Any authenticated user (own data)
GET    /api/auth/me                   → authenticate
GET    /api/users/me                  → authenticate
PUT    /api/users/me                  → authenticate
DELETE /api/users/me                  → authenticate
POST   /api/vehicles                  → authenticate
GET    /api/vehicles/me               → authenticate
PUT    /api/vehicles/:id              → authenticate + ownership check
DELETE /api/vehicles/:id              → authenticate + ownership check
GET    /api/parking-lots              → authenticate
GET    /api/parking-lots/:id          → authenticate
GET    /api/parking-slots/:id         → authenticate  (returns slots by lot ID)
GET    /api/payments/me               → authenticate + authorize("USER")
GET    /api/bookings/me               → authenticate + authorize("USER")
POST   /api/bookings                  → authenticate + authorize("USER")
PUT    /api/bookings/:id              → authenticate + authorize("USER") + ownership check
DELETE /api/bookings/:id              → authenticate + authorize("USER") + ownership check
POST   /api/records/checkin           → authenticate + authorize("USER")
PUT    /api/records/:id/checkout      → authenticate + authorize("USER") + ownership check
GET    /api/records/me                → authenticate + authorize("USER")

# ADMIN
GET /api/users                        → authenticate + authorize("ADMIN")
GET /api/vehicles                     → authenticate + authorize("ADMIN")
GET /api/vehicles/:id                 → authenticate + authorize("ADMIN")
GET /api/bookings                     → authenticate + authorize("ADMIN")
GET /api/bookings/:id                 → authenticate + authorize("ADMIN")
GET /api/records                      → authenticate + authorize("ADMIN")
GET /api/payments                     → authenticate + authorize("ADMIN")
GET /api/payments/revenue-overview    → authenticate + authorize("ADMIN")
GET /api/payments/:id                 → authenticate + authorize("ADMIN")
GET /api/payments/user/:userId        → authenticate + authorize("ADMIN")

# ADMIN only (write access)
POST   /api/users                     → authenticate + authorize("ADMIN")
PUT    /api/users/:id                 → authenticate + authorize("ADMIN")
DELETE /api/users/:id                 → authenticate + authorize("ADMIN")
PUT    /api/vehicles/:id/admin        → authenticate + authorize("ADMIN")
DELETE /api/vehicles/:id/admin        → authenticate + authorize("ADMIN")
POST   /api/parking-lots              → authenticate + authorize("ADMIN")
PUT    /api/parking-lots/:id          → authenticate + authorize("ADMIN")
DELETE /api/parking-lots/:id          → authenticate + authorize("ADMIN")
POST   /api/parking-slots             → authenticate + authorize("ADMIN")
PUT    /api/parking-slots/:id/status  → authenticate + authorize("ADMIN")
PUT    /api/parking-slots/:id         → authenticate + authorize("ADMIN")
DELETE /api/parking-slots/:id         → authenticate + authorize("ADMIN")
PUT    /api/bookings/:id/admin        → authenticate + authorize("ADMIN")
PUT    /api/bookings/:id/status       → authenticate + authorize("ADMIN")
DELETE /api/bookings/:id/admin        → authenticate + authorize("ADMIN")
POST   /api/payments                  → authenticate + authorize("ADMIN")
PUT    /api/payments/:id/status       → authenticate + authorize("ADMIN")
```
