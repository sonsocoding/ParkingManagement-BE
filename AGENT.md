# Backend Agent Quickstart

> Start here when working inside the `backend/` folder.
> This file is intentionally short so you can understand the project fast without reading the whole codebase.

## What This Folder Is

This backend is a REST API for the Smart Parking Management System.

- Runtime: Node.js with ES Modules
- Framework: Express 5
- ORM: Prisma
- Database: PostgreSQL
- Auth: JWT via httpOnly cookie and Bearer token
- Validation: Zod
- Payments: CASH, VNPay, and monthly-pass-covered bookings

Core modules already exist:

- Auth
- Users
- Vehicles
- Parking Lots
- Parking Slots
- Bookings
- Parking Records
- Payments
- Monthly Passes

## Read Order

Read only what your task needs.

1. This file
2. [Shared agent context](./docs/agents/shared-agent-context.md)
3. [Backend folder structure](./docs/agents/backend-folder-structure.md)
4. Task-specific files listed below

If you need deeper engineering rules, read [Backend agent guide](./docs/agents/backend-agent.md).

## Fast Map

- `src/app.js`: app setup and route mounting
- `src/server.js`: process entrypoint
- `prisma/schema.prisma`: data models, enums, and relationships
- `src/routes/`: endpoint definitions
- `src/controllers/`: business logic
- `src/schemas/`: zod validation
- `src/middleware/`: auth, authorize, validate, error handling
- `src/utils/`: shared helpers like response formatters and VNPay utils
- `docs/roles.md`: RBAC rules

## If Your Task Is...

### Auth or session

Read:

- `src/routes/authRoutes.js`
- `src/controllers/authController.js`
- `src/middleware/authenticate.js`
- `src/utils/generateToken.js`

### User or vehicle management

Read:

- `src/routes/userRoutes.js`
- `src/controllers/userController.js`
- `src/routes/vehicleRoutes.js`
- `src/controllers/vehicleController.js`

### Parking lots or slots

Read:

- `src/routes/parkingLotRoutes.js`
- `src/controllers/parkingLotController.js`
- `src/routes/parkingSlotRoutes.js`
- `src/controllers/parkingSlotController.js`

### Bookings, check-in, checkout, or payments

Read:

- `src/routes/bookingRoutes.js`
- `src/controllers/bookingController.js`
- `src/routes/parkingRecordRoutes.js`
- `src/controllers/parkingRecordController.js`
- `src/routes/paymentRoutes.js`
- `src/controllers/paymentController.js`
- `src/jobs/paymentExpirationJob.js`
- `src/utils/vnpay.js`

### Monthly passes

Read:

- `src/routes/monthlyPassRoutes.js`
- `src/controllers/monthlyPassController.js`
- `src/schemas/monthlyPassSchema.js`

## Critical Business Rules

- `CASH` booking creates a confirmed booking and reserves a slot, but payment is usually created at checkout.
- `VNPAY` booking creates a pending payment immediately and stays pending until IPN success or failure.
- `MONTHLY_PASS` booking creates a confirmed booking only when an eligible active pass covers that vehicle type and booking window.
- Walk-in check-in requires an `AVAILABLE` slot.
- Booking-backed check-in requires a `RESERVED` slot and a `CONFIRMED` booking.
- Booking-backed check-in should respect the booking's chosen payment method and must not silently auto-apply a pass to cash/VNPay bookings.
- Checkout releases the slot back to `AVAILABLE`.
- Monthly passes are tied to one user and one vehicle type, and can cover any vehicle of that type owned by that user.

## Engineering Rules

- Follow `route -> middleware -> controller -> prisma`.
- Import Prisma only from `src/config/db.js`.
- Use `formatSuccess` and `formatError` for responses.
- Use `asyncHandler` for async controllers.
- Use `prisma.$transaction()` for multi-step state changes.
- Do not create orphaned payments.
- Do not assume cash bookings already have a payment record.

## Documentation Update Rule

When making a feature change, update the relevant agent docs in the same task if the change affects:

- API routes, payloads, or response shape
- auth, permissions, or role behavior
- status enums or business flows
- folder structure or important file locations
- frontend/backend integration expectations

Update only what changed:

- backend-only change: update backend docs
- frontend-only change: update frontend docs
- shared contract change: update the shared agent context in both folders

## What Frontend Depends On

The frontend relies on these backend contracts staying stable:

- auth via cookie or Bearer token
- `{ status, data }` and `{ status, message }` response shape
- booking, payment, slot, and monthly pass statuses
- `paymentUrl` returned for VNPay flows
- `GET /api/auth/me` for app bootstrap

If you change any of those, also update the shared agent context.
