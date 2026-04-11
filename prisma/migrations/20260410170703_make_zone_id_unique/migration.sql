/*
  Warnings:

  - A unique constraint covering the columns `[zoneId]` on the table `ParkingSlot` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ParkingSlot_zoneId_key" ON "ParkingSlot"("zoneId");
