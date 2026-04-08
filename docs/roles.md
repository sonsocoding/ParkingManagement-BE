# RBAC — Role-Based Access Control

Three roles: **ADMIN**, **MANAGER**, **USER**.

---

## Quick Reference

| Resource | Action | USER | MANAGER | ADMIN |
|---|---|---|---|---|
| **User** | View own profile | ✅ | ✅ | ✅ |
| | Edit own profile | ✅ | ✅ | ✅ |
| | Delete own account | ✅ | ✅ | ✅ |
| | View all users | ❌ | ✅ (read-only) | ✅ |
| | Create/Edit/Delete any user | ❌ | ❌ | ✅ |
| **Vehicle** | CRUD own vehicles | ✅ | ✅ | ✅ |
| | View all vehicles | ❌ | ✅ (read-only) | ✅ |
| | Edit/Delete any vehicle | ❌ | ❌ | ✅ |
| **ParkingLot** | Search & view | ✅ | ✅ | ✅ |
| | Create/Edit/Delete | ❌ | ❌ | ✅ |
| **ParkingSlot** | View availability | ✅ | ✅ | ✅ |
| | Manage slots | ❌ | ❌ | ✅ |
| **Booking** | CRUD own bookings | ✅ | ❌ | ✅ |
| | View all bookings | ❌ | ✅ (read-only) | ✅ |
| | Modify/Cancel any booking | ❌ | ❌ | ✅ |
| **ParkingRecord** | View own records | ✅ | ❌ | ✅ |
| | View all records | ❌ | ✅ (read-only) | ✅ |
| | Dispatch check-in/out | ❌ | ❌ | ✅ |
| **Payment** | View own payments | ✅ | ❌ | ✅ |
| | View all payments | ❌ | ✅ (read-only) | ✅ |
| | Manual override/refund | ❌ | ❌ | ✅ |
| **MonthlyPass** | Register/Renew/Cancel own | ✅ | ❌ | ✅ |
| | View all passes | ❌ | ✅ (read-only) | ✅ |
| | Approve/Terminate any | ❌ | ❌ | ✅ |
| **AdminLog** | View audit logs | ❌ | ✅ (read-only) | ✅ |
| **Dashboard** | Revenue & analytics | ❌ | ✅ | ✅ |

---

## Role Summary

**USER** — Can only access and modify **own** data. No cross-user visibility.

**MANAGER** — **Read-only** access to all data for reporting and analytics. Cannot create, update, or delete resources belonging to other users.

**ADMIN** — Full system control. Can CRUD all resources and manage the infrastructure.

---

## Middleware Pattern

```
Request → authenticate (JWT) → authorize (role check) → Controller
```

1. `authenticate` — Verifies JWT, attaches `req.user = { id, role }`
2. `authorize(...roles)` — Checks `req.user.role` against allowed roles, returns 403 if denied
3. Controller-level ownership checks — For `/:id` routes, verify `req.user.id === resource.userId`

---

## Route-Level Enforcement Cheat Sheet

```
# Public
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout

# Any authenticated user (own data)
GET    /api/auth/me                → authenticate
GET    /api/users/me               → authenticate
PUT    /api/users/me               → authenticate
DELETE /api/users/me               → authenticate
POST   /api/vehicles               → authenticate
GET    /api/vehicles/me            → authenticate
PUT    /api/vehicles/:id           → authenticate + ownership check
DELETE /api/vehicles/:id           → authenticate + ownership check

# ADMIN & MANAGER (read-only for manager)
GET /api/users                     → authenticate + authorize(ADMIN, MANAGER)
GET /api/vehicles                  → authenticate + authorize(ADMIN, MANAGER)
GET /api/vehicles/:id              → authenticate + authorize(ADMIN, MANAGER)

# ADMIN only
POST   /api/users                  → authenticate + authorize(ADMIN)
PUT    /api/users/:id              → authenticate + authorize(ADMIN)
DELETE /api/users/:id              → authenticate + authorize(ADMIN)
PUT    /api/vehicles/:id/admin     → authenticate + authorize(ADMIN)
DELETE /api/vehicles/:id/admin     → authenticate + authorize(ADMIN)
```

Apply the same pattern when you build: `parkingLot`, `booking`, `payment`, `parkingRecord`, `monthlyPass`, `adminLog` routes.
