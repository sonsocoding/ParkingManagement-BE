import { PrismaClient } from "./src/generated/client.js";
const prisma = new PrismaClient();
async function getIds() {
  const users = await prisma.user.findMany();
  const lots = await prisma.parkingLot.findMany();
  const slots = await prisma.parkingSlot.findMany();
  const vehicles = await prisma.vehicle.findMany();
  const bookings = await prisma.booking.findMany();
  const records = await prisma.parkingRecord.findMany();

  console.log(
    JSON.stringify(
      {
        users: users.map((u) => ({ role: u.role, id: u.id, email: u.email })),
        lots: lots.map((l) => ({ name: l.name, id: l.id })),
        slots: slots.map((s) => ({
          slotNumber: s.slotNumber,
          id: s.id,
          type: s.vehicleType,
          lotId: s.parkingLotId,
        })),
        vehicles: vehicles.map((v) => ({ plate: v.plateNumber, id: v.id, type: v.vehicleType })),
        bookings: bookings.map((b) => ({ id: b.id, status: b.status })),
        records: records.map((r) => ({ id: r.id, status: r.status })),
      },
      null,
      2,
    ),
  );
}
getIds().finally(() => prisma.$disconnect());
