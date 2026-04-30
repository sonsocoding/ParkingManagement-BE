-- Extend payment method enum so bookings can explicitly use monthly-pass coverage
BEGIN;
CREATE TYPE "PaymentMethod_new" AS ENUM ('CASH', 'VNPAY', 'MONTHLY_PASS');
ALTER TABLE "Payment"
ALTER COLUMN "method" TYPE "PaymentMethod_new"
USING ("method"::text::"PaymentMethod_new");
ALTER TYPE "PaymentMethod" RENAME TO "PaymentMethod_old";
ALTER TYPE "PaymentMethod_new" RENAME TO "PaymentMethod";
DROP TYPE "public"."PaymentMethod_old";
COMMIT;

-- Persist the user's booking payment choice and optional linked monthly pass
ALTER TABLE "Booking"
ADD COLUMN "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'CASH',
ADD COLUMN "monthlyPassId" TEXT;

-- Backfill known booking payment methods from existing booking-linked payments
UPDATE "Booking" AS b
SET "paymentMethod" = p."method"
FROM "Payment" AS p
WHERE p."bookingId" = b."id"
  AND p."method" IN ('CASH', 'VNPAY');

-- Add indexes and relation for monthly-pass-backed bookings
CREATE INDEX "Booking_paymentMethod_idx" ON "Booking"("paymentMethod");
CREATE INDEX "Booking_monthlyPassId_idx" ON "Booking"("monthlyPassId");

ALTER TABLE "Booking"
ADD CONSTRAINT "Booking_monthlyPassId_fkey"
FOREIGN KEY ("monthlyPassId")
REFERENCES "MonthlyPass"("id")
ON DELETE SET NULL
ON UPDATE CASCADE;
