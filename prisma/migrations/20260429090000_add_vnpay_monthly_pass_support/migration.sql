-- Add metadata for gateway-specific payment context
ALTER TABLE "Payment"
ADD COLUMN "metadata" JSONB;

-- Extend MonthlyPass status enum with pending-payment state
BEGIN;
CREATE TYPE "PassStatus_new" AS ENUM ('PENDING_PAYMENT', 'ACTIVE', 'EXPIRED', 'CANCELLED');
ALTER TABLE "MonthlyPass"
ALTER COLUMN "status" TYPE "PassStatus_new"
USING ("status"::text::"PassStatus_new");
ALTER TYPE "PassStatus" RENAME TO "PassStatus_old";
ALTER TYPE "PassStatus_new" RENAME TO "PassStatus";
DROP TYPE "public"."PassStatus_old";
COMMIT;
