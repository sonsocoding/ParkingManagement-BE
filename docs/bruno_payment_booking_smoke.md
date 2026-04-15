# Bruno Smoke Test: Booking + Payment (Pre-VNPay)

## Preconditions
- Server is running.
- Seed data is loaded (`npm run seed`).
- You have both a `USER` and `ADMIN` account token.
- Use a parking slot that is currently `AVAILABLE`.

## 1) Login as USER
- Endpoint: `POST /api/auth/login`
- Save token as `userToken`.

## 2) Create CASH booking (auto-payment should be created)
- Endpoint: `POST /api/bookings`
- Header: `Authorization: Bearer {{userToken}}`
- Example body:
```json
{
  "vehicleId": "<user_vehicle_id>",
  "parkingLotId": "<parking_lot_id>",
  "parkingSlotId": "<available_slot_id>",
  "startTime": "2026-04-16T09:00:00.000Z",
  "endTime": "2026-04-16T11:00:00.000Z",
  "paymentMethod": "CASH"
}
```
- Expected:
  - HTTP `201`
  - `booking.status = CONFIRMED`
  - `updatedSlot.status = RESERVED`
  - `payment.status = PENDING`
  - `payment.method = CASH`

## 3) Verify USER bookings
- Endpoint: `GET /api/bookings/me`
- Header: `Authorization: Bearer {{userToken}}`
- Expected:
  - HTTP `200`
  - New booking exists in list.

## 4) Verify USER payments
- Endpoint: `GET /api/payments/me`
- Header: `Authorization: Bearer {{userToken}}`
- Expected:
  - HTTP `200`
  - Auto-created payment for the booking exists with `PENDING` status.

## 5) Confirm VNPAY booking path is disabled
- Repeat booking create with `"paymentMethod": "VNPAY"`.
- Expected:
  - HTTP `400`
  - Error message indicates VNPay booking flow is temporarily disabled.

## 6) Login as ADMIN
- Endpoint: `POST /api/auth/login`
- Save token as `adminToken`.

## 7) Admin force-create payment for user booking
- Endpoint: `POST /api/payments`
- Header: `Authorization: Bearer {{adminToken}}`
- Example body:
```json
{
  "bookingId": "<booking_id_from_step_2>",
  "amount": 10000,
  "method": "CASH",
  "referenceId": "BRUNO-ADMIN-001"
}
```
- Expected:
  - HTTP `201`
  - Payment is created with `userId` equal to booking owner.

## 8) Admin update payment status
- Endpoint: `PUT /api/payments/:id/status`
- Header: `Authorization: Bearer {{adminToken}}`
- Example body:
```json
{
  "status": "SUCCESS"
}
```
- Expected:
  - HTTP `200`
  - Valid transition from `PENDING` to `SUCCESS`.

## 9) Admin complete booking
- Endpoint: `PUT /api/bookings/:id/status`
- Header: `Authorization: Bearer {{adminToken}}`
- Example body:
```json
{
  "status": "COMPLETED"
}
```
- Expected:
  - HTTP `200`
  - Booking becomes `COMPLETED`
  - Slot is released to `AVAILABLE`
  - Parking record is created successfully (no field mismatch errors).
