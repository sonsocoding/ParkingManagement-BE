/*
  Warnings:

  - You are about to drop the column `checkIn` on the `ParkingRecord` table. All the data in the column will be lost.
  - You are about to drop the column `checkOut` on the `ParkingRecord` table. All the data in the column will be lost.
  - Added the required column `checkInTime` to the `ParkingRecord` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ParkingRecordStatus" AS ENUM ('CHECKED_IN', 'CHECKED_OUT');

-- DropIndex
DROP INDEX "ParkingRecord_checkIn_idx";

-- AlterTable
ALTER TABLE "ParkingRecord" DROP COLUMN "checkIn",
DROP COLUMN "checkOut",
ADD COLUMN     "checkInTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "checkOutTime" TIMESTAMP(3),
ADD COLUMN     "status" "ParkingRecordStatus" NOT NULL DEFAULT 'CHECKED_IN';

-- CreateIndex
CREATE INDEX "ParkingRecord_checkInTime_idx" ON "ParkingRecord"("checkInTime");
