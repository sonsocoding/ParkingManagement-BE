# Backend Agent Guide

> Use this after `backend/AGENT.md` when your task needs implementation detail.

## Purpose

This backend exposes the system of record for parking operations, payment state, booking lifecycle, and monthly pass eligibility. Treat it as the source of truth for workflow state.

## Architecture

The project follows this request path:

```text
Route -> authenticate -> authorize -> validate -> controller -> Prisma -> DB
```

Rules:

- No service layer. Controllers talk directly to Prisma.
- Shared failures flow through `src/middleware/errorHandler.js`.
- Async controllers must use `src/utils/asyncHandler.js`.
- API responses must use `src/utils/formatResponse.js`.

## Key Files

- `src/app.js`: route mounting and global middleware
- `src/config/db.js`: Prisma singleton
- `src/middleware/authenticate.js`: JWT parsing
- `src/middleware/authorize.js`: role gating
- `src/middleware/validate.js`: zod request validation
- `src/middleware/errorHandler.js`: API-safe error handling
- `prisma/schema.prisma`: authoritative schema and enum reference

## Module Ownership Map

- Auth: `authRoutes.js`, `authController.js`, `authSchema.js`
- Users: `userRoutes.js`, `userController.js`, `userSchema.js`
- Vehicles: `vehicleRoutes.js`, `vehicleController.js`, `vehicleSchema.js`
- Parking Lots: `parkingLotRoutes.js`, `parkingLotController.js`, `parkingLotSchema.js`
- Parking Slots: `parkingSlotRoutes.js`, `parkingSlotController.js`, `parkingSlotSchema.js`
- Bookings: `bookingRoutes.js`, `bookingController.js`, `bookingSchema.js`
- Parking Records: `parkingRecordRoutes.js`, `parkingRecordController.js`, `parkingRecordSchema.js`
- Payments: `paymentRoutes.js`, `paymentController.js`, `paymentSchema.js`, `vnpay.js`
- Monthly Passes: `monthlyPassRoutes.js`, `monthlyPassController.js`, `monthlyPassSchema.js`

## Conventions

### Prisma

Always import Prisma like this:

```js
import { prisma } from "../config/db.js";
```

Do not create new `PrismaClient()` instances in feature files.

### Routes

Group routes by access level when possible:

```js
router.use(authenticate);

router.get("/me", getOwnResource);
router.put("/me", updateOwnResource);

router.get("/", authorize("ADMIN"), getAllResources);
router.post("/", authorize("ADMIN"), createResource);
```

### Ownership

For user-owned resources, verify ownership in controllers before mutation.

### Transactions

Use `prisma.$transaction()` whenever a flow changes more than one record or status.

Typical examples:

- create booking + reserve slot
- check out + payment update + booking completion + slot release
- VNPay callback + payment update + booking/pass update

## Business Flows

### Booking with CASH

```text
create booking -> slot RESERVED -> booking CONFIRMED
check in -> slot OCCUPIED
check out -> payment SUCCESS -> booking COMPLETED -> slot AVAILABLE
```

### Booking with VNPay

```text
create booking -> slot RESERVED -> payment PENDING -> booking PENDING_PAYMENT
IPN success -> payment SUCCESS -> booking CONFIRMED
IPN failure/expiry -> payment FAILED -> booking CANCELLED -> slot AVAILABLE
```

### Monthly pass

```text
purchase/renew -> validate pass eligibility for user + vehicle type
pass covers any owned vehicle of that type
only one active parking session may use the pass at a time
VNPAY flow may produce paymentUrl
success activates pass or applies renewal
failure/expiry leaves no active pending purchase
```

## What Frontend Needs From Backend

The frontend assumes:

- `GET /api/auth/me` is reliable for session bootstrapping
- status enums remain stable
- protected routes accept cookie auth with `withCredentials`
- VNPay flows return `paymentUrl`
- payment return verification is available through the payments module

If backend behavior changes, update `docs/agents/shared-agent-context.md` and notify frontend docs.

## Common Mistakes To Avoid

- Returning raw Prisma errors to clients
- Using `404` for server errors
- Sending a JSON body with `204`
- Treating reserved booking slots as invalid during check-in
- Creating payments without a valid linked entity
- Assuming every booking already has a payment row
