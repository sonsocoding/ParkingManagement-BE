import { PrismaClient } from "../generated/client.js";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...\n");

  // Clean previous data
  await prisma.adminLog.deleteMany({});
  await prisma.payment.deleteMany({});
  await prisma.monthlyPass.deleteMany({});
  await prisma.parkingRecord.deleteMany({});
  await prisma.booking.deleteMany({});
  await prisma.parkingSlot.deleteMany({});
  await prisma.vehicle.deleteMany({});
  await prisma.parkingLot.deleteMany({});
  await prisma.user.deleteMany({});

  // ===== CREATE USERS =====
  const hashedPasswordAdmin = await bcrypt.hash("admin123", 10);
  const hashedPasswordManager = await bcrypt.hash("manager123", 10);
  const hashedPasswordUser = await bcrypt.hash("user123", 10);

  const admin = await prisma.user.create({
    data: {
      email: "admin@parking.com",
      password: hashedPasswordAdmin,
      phone: "0901234567",
      fullName: "Nguyễn Văn Admin",
      role: "ADMIN",
    },
  });
  console.log("✅ Created admin:", admin.email);

  const manager = await prisma.user.create({
    data: {
      email: "manager@parking.com",
      password: hashedPasswordManager,
      phone: "0902234567",
      fullName: "Trần Thị Manager",
      role: "MANAGER",
    },
  });
  console.log("✅ Created manager:", manager.email);

  const user = await prisma.user.create({
    data: {
      email: "user@parking.com",
      password: hashedPasswordUser,
      phone: "0903234567",
      fullName: "Lê Văn User",
      role: "USER",
    },
  });
  console.log("✅ Created user:", user.email);

  // ===== CREATE PARKING LOT =====
  const parkingLot = await prisma.parkingLot.create({
    data: {
      name: "Bãi Đỗ Tây Hồ",
      address: "Số 123, Đường Tây Hồ, Quận Tây Hồ, Hà Nội",
      totalSlots: 100,
      carHourlyRate: 50000, // 50,000 VND/hour
      motorbikeHourlyRate: 10000, // 10,000 VND/hour
      zones: {
        carZones: [
          { zoneId: "A", name: "Khu A", slotCount: 30 },
          { zoneId: "B", name: "Khu B", slotCount: 20 },
        ],
        motoZones: [
          { zoneId: "C", name: "Khu C", slotCount: 30 },
          { zoneId: "D", name: "Khu D", slotCount: 20 },
        ],
      },
    },
  });
  console.log("✅ Created parking lot:", parkingLot.name);

  // ===== CREATE PARKING SLOTS =====
  const slots = [];

  // Car slots in Zone A (5 slots)
  for (let i = 1; i <= 5; i++) {
    const slot = await prisma.parkingSlot.create({
      data: {
        parkingLotId: parkingLot.id,
        zoneId: "A",
        slotNumber: `A-${i}`,
        vehicleType: "CAR",
        status: "AVAILABLE",
      },
    });
    slots.push(slot);
  }

  // Car slots in Zone B (3 slots)
  for (let i = 1; i <= 3; i++) {
    const slot = await prisma.parkingSlot.create({
      data: {
        parkingLotId: parkingLot.id,
        zoneId: "B",
        slotNumber: `B-${i}`,
        vehicleType: "CAR",
        status: "AVAILABLE",
      },
    });
    slots.push(slot);
  }

  // MOTORBIKE slots in Zone C (2 slots)
  for (let i = 1; i <= 2; i++) {
    const slot = await prisma.parkingSlot.create({
      data: {
        parkingLotId: parkingLot.id,
        zoneId: "C",
        slotNumber: `C-${i}`,
        vehicleType: "MOTORBIKE",
        status: "AVAILABLE",
      },
    });
    slots.push(slot);
  }

  console.log(`✅ Created ${slots.length} parking slots\n`);

  // ===== CREATE VEHICLES =====
  const vehicle1 = await prisma.vehicle.create({
    data: {
      userId: user.id,
      plateNumber: "30A-12345",
      vehicleType: "CAR",
      color: "Đen",
    },
  });
  console.log("✅ Created vehicle 1:", vehicle1.plateNumber);

  const vehicle2 = await prisma.vehicle.create({
    data: {
      userId: user.id,
      plateNumber: "30B-98765",
      vehicleType: "MOTORBIKE",
      color: "Xanh",
    },
  });
  console.log("✅ Created vehicle 2:", vehicle2.plateNumber);

  // ===== CREATE BOOKINGS =====
  const now = new Date();
  const booking1 = await prisma.booking.create({
    data: {
      userId: user.id,
      vehicleId: vehicle1.id,
      parkingSlotId: slots[0].id,
      parkingLotId: parkingLot.id,
      startTime: now,
      endTime: new Date(now.getTime() + 2 * 60 * 60 * 1000), // 2 hours
      estimatedCost: 100000, // 100,000 VND
      status: "CONFIRMED",
    },
  });
  console.log("✅ Created booking 1:", booking1.id);

  const booking2 = await prisma.booking.create({
    data: {
      userId: user.id,
      vehicleId: vehicle2.id,
      parkingSlotId: slots[6].id,
      parkingLotId: parkingLot.id,
      startTime: new Date(now.getTime() + 1 * 60 * 60 * 1000),
      endTime: new Date(now.getTime() + 4 * 60 * 60 * 1000),
      estimatedCost: 150000,
      status: "PENDING",
    },
  });
  console.log("✅ Created booking 2:", booking2.id);

  // ===== CREATE PARKING RECORDS =====
  const record1 = await prisma.parkingRecord.create({
    data: {
      vehicleId: vehicle1.id,
      parkingLotId: parkingLot.id,
      parkingSlotId: slots[0].id,
      bookingId: booking1.id,
      checkIn: new Date(now.getTime() - 1 * 60 * 60 * 1000), // checked in 1 hour ago
      checkOut: null,
      actualCost: 50000,
      paymentStatus: "PENDING",
    },
  });
  console.log("✅ Created parking record 1:", record1.id);

  // ===== CREATE PAYMENTS =====
  const payment1 = await prisma.payment.create({
    data: {
      userId: user.id,
      bookingId: booking1.id,
      amount: 100000,
      method: "VNPAY",
      status: "SUCCESS",
      referenceId: "VNP20250401001",
    },
  });
  console.log("✅ Created payment 1:", payment1.referenceId);

  const payment2 = await prisma.payment.create({
    data: {
      userId: user.id,
      bookingId: booking2.id,
      amount: 150000,
      method: "MOMO",
      status: "PENDING",
      referenceId: "MOMO20250401001",
    },
  });
  console.log("✅ Created payment 2:", payment2.referenceId);

  // ===== CREATE MONTHLY PASS =====
  const monthlyPass = await prisma.monthlyPass.create({
    data: {
      userId: user.id,
      parkingLotId: parkingLot.id,
      vehicleType: "CAR",
      startDate: new Date("2025-04-01"),
      endDate: new Date("2025-05-01"),
      price: 1500000, // 1,500,000 VND/month
      status: "ACTIVE",
    },
  });
  console.log("✅ Created monthly pass:", monthlyPass.id);

  // ===== CREATE ADMIN LOG =====
  const log = await prisma.adminLog.create({
    data: {
      adminId: admin.id,
      action: "CREATE",
      resourceType: "ParkingLot",
      resourceId: parkingLot.id,
      changes: {
        new: {
          name: parkingLot.name,
          address: parkingLot.address,
          totalSlots: parkingLot.totalSlots,
        },
      },
      ipAddress: "127.0.0.1",
    },
  });
  console.log("✅ Created admin log:", log.id);

  console.log("\n🎉 Database seed completed successfully!\n");

  // ===== DISPLAY SUMMARY =====
  console.log("📊 Summary:");
  console.log(`   - Users: 3 (Admin, Manager, User)`);
  console.log(`   - Parking Lot: 1`);
  console.log(`   - Parking Slots: ${slots.length}`);
  console.log(`   - Vehicles: 2`);
  console.log(`   - Bookings: 2`);
  console.log(`   - Parking Records: 1`);
  console.log(`   - Payments: 2`);
  console.log(`   - Monthly Passes: 1`);
  console.log(`   - Admin Logs: 1\n`);

  console.log("🔐 Demo Credentials:");
  console.log("   Admin    → admin@parking.com / admin123");
  console.log("   Manager  → manager@parking.com / manager123");
  console.log("   User     → user@parking.com / user123\n");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
