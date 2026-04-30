# Monthly Pass Booking Plan

## Goal

Add a third booking payment method: `MONTHLY_PASS`.

Desired behavior:

- A user with an eligible active monthly pass for the selected vehicle type can choose `MONTHLY_PASS` during booking.
- That booking should not require VNPay or cash payment.
- The booking should remain explicitly covered by the pass from booking through check-out.
- Users who choose `CASH` or `VNPAY` should not be silently converted to monthly-pass coverage later.

## Current Behavior

### Backend

- Booking creation only accepts `CASH` and `VNPAY`.
- Bookings do not persist the selected payment method directly.
- `checkIn` currently auto-applies any active monthly pass for the same vehicle type.
- `checkOut` sets `actualCost = 0` when the parking record has `monthlyPassId`.

### Frontend

- The booking screen only offers `Cash on exit` and `VNPay`.
- The UI does not check whether the user has an eligible pass before booking.
- Booking and payment screens still assume payment is only cash or VNPay.

## Recommended Product Rules

These should be treated as the target rules for implementation.

1. `MONTHLY_PASS` is an explicit user choice during booking.
2. A pass can only be used when it is:
   - `ACTIVE`
   - already paid successfully
   - the same `vehicleType` as the booked vehicle/slot
   - not already in use by another active parking session at check-in time
3. `CASH` and `VNPAY` bookings must stay cash/VNPay bookings.
4. Generic check-in should not auto-apply a pass to bookings that did not choose `MONTHLY_PASS`.
5. A monthly-pass booking should complete with `0` parking charge.
6. No standard parking `Payment` row should be created for a booking covered by a pass.

## Open Decision To Confirm

Recommended default:

- A pass should only be selectable if it stays valid through the booking `endTime`. -approve this idea-

If the team wants a looser rule instead, this plan must be adjusted to define what happens when a pass expires mid-booking.

## Backend Plan

### 1. Schema and enum updates

Files:

- `backend/prisma/schema.prisma`

Changes:

- Add `MONTHLY_PASS` to `PaymentMethod`.
- Add a `paymentMethod` field on `Booking`.
  - Reason: the system currently loses the original booking payment choice unless a `Payment` exists.
- Add an optional `monthlyPassId` field on `Booking`.
  - Reason: the booking should explicitly reference the pass it intends to use.

Notes:

- After schema changes, Prisma migration and generated client updates will be required.
- Existing seed data may need updates if `Booking.paymentMethod` becomes required.

### 2. Booking validation updates

Files:

- `backend/src/schemas/bookingSchema.js`

Changes:

- Extend booking `paymentMethod` validation to allow `MONTHLY_PASS`.
- Keep `CASH` as the default unless product wants a different default. -if user has pass, make pass default-

Optional refinement:

- If the payload later includes a specific `monthlyPassId`, validate its presence only when `paymentMethod === "MONTHLY_PASS"`.

### 3. Booking creation logic

Files:

- `backend/src/controllers/bookingController.js`

Changes:

- Persist the chosen `paymentMethod` on the booking.
- When `paymentMethod === "MONTHLY_PASS"`:
  - find an eligible pass for the current user and vehicle type
  - verify the pass is paid and active
  - verify the booking time is covered by the pass validity window
  - create the booking in `CONFIRMED` state
  - reserve the slot
  - do not create a VNPay payment
  - store `booking.monthlyPassId`
- When `paymentMethod === "CASH"`:
  - keep current behavior
- When `paymentMethod === "VNPAY"`:
  - keep current behavior

Recommended response shape:

- Return `booking.paymentMethod`
- Return `booking.monthlyPassId` when present
- Continue returning `paymentUrl` only for `VNPAY`

### 4. Check-in flow changes

Files:

- `backend/src/controllers/parkingRecordController.js`
- `backend/src/schemas/parkingRecordSchema.js` only if new request fields are needed

Changes:

- Remove current implicit monthly-pass auto-apply behavior for normal bookings.
- At booking-backed check-in:
  - read `booking.paymentMethod`
  - if it is `MONTHLY_PASS`, revalidate the linked pass
  - attach `monthlyPassId` from booking onto the created parking record
- For `CASH` and `VNPAY` bookings:
  - do not auto-attach a pass

Important reason:

- Without this change, users who pick cash or VNPay can still receive unintended free coverage.

### 5. Check-out flow changes

Files:

- `backend/src/controllers/parkingRecordController.js`

Changes:

- Keep `actualCost = 0` when the parking record is covered by a pass.
- For pass-covered bookings:
  - mark parking record payment status successful
  - mark booking `COMPLETED`
  - do not create a cash payment
  - do not mutate an unrelated VNPay payment

Validation check:

- Ensure the logic path is driven by the explicit record/booking payment method, not by broad monthly-pass discovery.

### 6. Payment controller review

Files:

- `backend/src/controllers/paymentController.js`
- `backend/src/schemas/paymentSchema.js`

Changes:

- Review whether admin-created payments should allow `MONTHLY_PASS`.
- Recommended: do not create standard payment records for parking bookings covered by a pass.
- Keep monthly pass purchase and renewal flows unchanged unless the new enum addition requires schema updates.

Why review this area:

- `PaymentMethod` enum expansion can affect admin endpoints and validation even if booking coverage does not create a payment row.

### 7. Supporting docs and seed review

Files:

- `backend/AGENT.md`
- `backend/docs/agents/shared-agent-context.md`
- `backend/docs/roles.md` if role behavior changes
- `backend/prisma/seed.js` if new required fields are introduced

Changes:

- Document the third booking payment method.
- Update business rules for booking, check-in, and checkout.
- Note that monthly-pass coverage is explicit, not silently auto-applied.

## Frontend Plan

### 1. Service and data assumptions

Files:

- `frontend/src/api/index.js`
- `frontend/src/utils/apiNormalizers.js`

Changes:

- No major service expansion is required if the booking endpoint stays the same.
- Ensure frontend code expects `booking.paymentMethod` and optional `booking.monthlyPassId` in booking payloads.

### 2. Booking page UX

Files:

- `frontend/src/pages/user/LotDetail.jsx`
- matching styles in `frontend/src/styles/pages/user/LotDetail.css` if needed

Changes:

- Load the user’s monthly passes alongside vehicles and slot data.
- Determine whether the user has an eligible active pass for the selected slot’s vehicle type.
- Show a third option in the payment selector only when eligible:
  - `Monthly Pass`
- When `MONTHLY_PASS` is selected:
  - show total as `0`
  - explain that the active pass covers this booking
  - submit `paymentMethod: "MONTHLY_PASS"`
- When not eligible:
  - do not show the option, or show it disabled with a short reason

Recommended UX copy:

- `Covered by your active car pass`
- `Covered by your active motorbike pass`

### 3. Booking success flow

Files:

- `frontend/src/pages/user/LotDetail.jsx`

Changes:

- After successful booking:
  - redirect to VNPay only for `VNPAY`
  - for `CASH` and `MONTHLY_PASS`, route to `My Bookings`

### 4. My Bookings display

Files:

- `frontend/src/pages/user/MyBookings.jsx`

Changes:

- Show the payment method for each booking.
- If `paymentMethod === "MONTHLY_PASS"`:
  - replace generic cost messaging with clear pass-coverage messaging
  - avoid showing language that implies cash is due at checkout
- Keep current pending-payment messaging only for `VNPAY`

### 5. Payment history expectations

Files:

- `frontend/src/pages/user/MyPayments.jsx`
- `frontend/src/pages/admin/AllPayments.jsx`

Changes:

- Confirm the UI does not expect every completed booking to have a standard payment row.
- If needed, update empty-state or explanatory text to mention monthly-pass-covered bookings.

## Suggested Implementation Order

1. Update Prisma schema and migration.
2. Update booking validation and booking creation logic.
3. Update check-in logic to stop implicit auto-apply.
4. Update checkout logic for explicit pass-covered bookings.
5. Update frontend booking screen.
6. Update booking/payment display screens.
7. Update docs and seed data.
8. Run end-to-end manual verification.

## Test Checklist

### Backend

- Create booking with `CASH` still works.
- Create booking with `VNPAY` still creates pending payment and payment URL.
- Create booking with `MONTHLY_PASS` succeeds for eligible pass owner.
- Create booking with `MONTHLY_PASS` fails when:
  - user has no pass for that vehicle type
  - pass is expired
  - pass is not paid
  - pass validity does not cover booking time
- Check-in for `MONTHLY_PASS` booking attaches the linked pass.
- Check-in for `CASH` booking does not auto-apply a pass.
- Check-in for `VNPAY` booking does not auto-apply a pass.
- Check-out for pass-covered booking results in `actualCost = 0`.
- Check-out for cash and VNPay paths still behave correctly.

### Frontend

- User with eligible pass sees the third option.
- User without eligible pass does not see it, or sees it disabled with explanation.
- Selecting `MONTHLY_PASS` shows `0` total.
- VNPay flow still redirects properly.
- `My Bookings` clearly distinguishes:
  - pending VNPay booking
  - confirmed cash booking
  - confirmed monthly-pass booking

## Risks To Watch

- Existing implicit pass auto-apply can conflict with explicit payment-method behavior.
- Adding `paymentMethod` to `Booking` may require seed and migration updates.
- If a booking references a pass, cancellation and pass lifecycle rules should be checked carefully.
- If a pass expires before check-in, the product must define whether the booking becomes invalid or payable by another method.

## Recommended Next Step

Before implementation, confirm this exact rule:

- `MONTHLY_PASS` is only available when the pass remains valid until booking `endTime`.

If confirmed, this plan can be implemented directly with minimal ambiguity.
