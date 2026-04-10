/*
  Warnings:

  - You are about to drop the column `hourlyRate` on the `ParkingLot` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "LotType" AS ENUM ('CAR_ONLY', 'MOTORBIKE_ONLY', 'BOTH');

-- AlterTable
ALTER TABLE "ParkingLot" DROP COLUMN "hourlyRate",
ADD COLUMN     "carHourlyRate" DECIMAL(10,2),
ADD COLUMN     "lotType" "LotType" NOT NULL DEFAULT 'BOTH',
ADD COLUMN     "motorbikeHourlyRate" DECIMAL(10,2);
