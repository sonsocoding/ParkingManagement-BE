# Shared Agent Context

> This file is the contract both backend and frontend agents should trust.

## System Overview

The project is a smart parking management system with two main applications:

- `backend/`: REST API and business rules
- `frontend/`: React client for users and admins

Backend owns truth for:

- authentication
- authorization
- booking state
- payment state
- slot availability
- monthly pass lifecycle

Frontend owns:

- route flow
- form UX
- loading, empty, and error states
- VNPay browser redirects and return page behavior

## Shared Runtime Assumptions

- Backend base URL: `http://localhost:3000`
- API base path: `/api`
- Frontend dev URL: `http://localhost:5173`
- Frontend usually calls backend with `VITE_API_URL=http://localhost:3000/api`

## Auth Contract

The system supports both:

- httpOnly cookie auth
- `Authorization: Bearer <token>`

Frontend should prefer cookie auth in browser flows and send credentials when needed.

Backend should keep `GET /api/auth/me` compatible because frontend uses it to restore session state.

## Response Contract

Success:

```json
{ "status": "success", "data": { } }
```

Error:

```json
{ "status": "error", "message": "Human-readable error message" }
```

Do not silently change this shape on one side without updating the other side.

## Roles

- `USER`: owns only personal resources and user flows
- `ADMIN`: full system control

## Shared Statuses

### Booking

- `PENDING_PAYMENT`
- `CONFIRMED`
- `COMPLETED`
- `CANCELLED`

### Payment

- `PENDING`
- `SUCCESS`
- `FAILED`
- `REFUNDED`

### Parking Slot

- `AVAILABLE`
- `RESERVED`
- `OCCUPIED`
- `MAINTENANCE`

### Monthly Pass

- `PENDING_PAYMENT`
- `ACTIVE`
- `EXPIRED`
- `CANCELLED`

## Shared Flow Rules

### Booking with CASH

- Create booking
- Reserve slot
- Mark booking `CONFIRMED`
- Create payment later at checkout if needed

### Booking with VNPay

- Create booking
- Reserve slot
- Create pending payment
- Return `paymentUrl`
- IPN success confirms booking
- Failure or expiry cancels booking and releases slot

### Booking with Monthly Pass

- Create booking only if an eligible active pass covers the selected vehicle type and booking window
- Reserve slot
- Mark booking `CONFIRMED`
- Do not create a separate parking payment

### Check-in and checkout

- Walk-in check-in uses an `AVAILABLE` slot
- Booking-backed check-in uses a `RESERVED` slot plus confirmed booking
- Check-in should only attach a monthly pass when the booking explicitly chose `MONTHLY_PASS`
- Checkout returns slot to `AVAILABLE`

### Monthly pass

- One active pass per user and vehicle type at a time
- A pass may be used by any vehicle of that type owned by the requesting user
- A pass may cover only one active parking session at a time across all lots
- VNPay may be used for purchase or renewal

## Coordination Rules

- If backend changes route shape, status names, required fields, or auth behavior, update this file.
- If frontend depends on a new backend field for rendering or navigation, update this file.
- If a change affects VNPay redirect or return handling, both sides should review it.
- Feature work should update the relevant docs in the same task, not as a later cleanup.
- Shared-contract changes must be mirrored in both backend and frontend shared agent context files.
