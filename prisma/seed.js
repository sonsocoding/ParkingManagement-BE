import { PrismaClient } from "../src/generated/client.js";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...\n");

  await prisma.payment.deleteMany({});
  await prisma.monthlyPass.deleteMany({});
  await prisma.parkingRecord.deleteMany({});
  await prisma.booking.deleteMany({});
  await prisma.parkingSlot.deleteMany({});
  await prisma.vehicle.deleteMany({});
  await prisma.parkingLot.deleteMany({});
  await prisma.user.deleteMany({});

  const [hashedAdmin, hashedUser] = await Promise.all([
    bcrypt.hash("admin123", 10),
    bcrypt.hash("user123", 10),
  ]);

  const userProfiles = [
    ["user1@parking.com", "Lê Văn Minh", "0903234567"],
    ["user2@parking.com", "Trần Thị Lan", "0904234567"],
    ["user3@parking.com", "Phạm Quốc Huy", "0905234567"],
    ["user4@parking.com", "Đỗ Mai Anh", "0906234567"],
    ["user5@parking.com", "Bùi Gia Bảo", "0907234567"],
    ["user6@parking.com", "Ngô Thu Hà", "0908234567"],
    ["user7@parking.com", "Vũ Nhật Nam", "0909234567"],
    ["user8@parking.com", "Trương Quỳnh Chi", "0910234567"],
    ["user9@parking.com", "Hoàng Đức Long", "0911234567"],
    ["user10@parking.com", "Phan Khánh Vy", "0912234567"],
    ["user11@parking.com", "Đặng Minh Quân", "0913234567"],
    ["user12@parking.com", "Lý Hải Yến", "0914234567"],
  ];

  const createdUsers = [];
  createdUsers.push(
    await prisma.user.create({
      data: {
        email: "admin@parking.com",
        password: hashedAdmin,
        phone: "0901234567",
        fullName: "Nguyễn Văn Admin",
        role: "ADMIN",
      },
    })
  );

  for (const [email, fullName, phone] of userProfiles) {
    createdUsers.push(
      await prisma.user.create({
        data: {
          email,
          password: hashedUser,
          phone,
          fullName,
          role: "USER",
        },
      })
    );
  }

  const admin = createdUsers[0];
  const appUsers = createdUsers.slice(1);

  console.log(`✅ Created ${createdUsers.length} users`);

  const parkingLot1 = await prisma.parkingLot.create({
    data: {
      name: "Bãi Đỗ Tây Hồ",
      address: "Số 123, Đường Tây Hồ, Quận Tây Hồ, Hà Nội",
      totalSlots: 72,
      lotType: "BOTH",
      carHourlyRate: 50000,
      motorbikeHourlyRate: 10000,
      zones: {
        carZones: [
          { zoneId: "A", name: "Khu A", slotCount: 18 },
          { zoneId: "B", name: "Khu B", slotCount: 18 },
        ],
        motoZones: [
          { zoneId: "C", name: "Khu C", slotCount: 18 },
          { zoneId: "D", name: "Khu D", slotCount: 18 },
        ],
      },
    },
  });

  const parkingLot2 = await prisma.parkingLot.create({
    data: {
      name: "Bãi Đỗ Bách Khoa",
      address: "Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
      totalSlots: 40,
      lotType: "BOTH",
      carHourlyRate: 40000,
      motorbikeHourlyRate: 5000,
      zones: {
        carZones: [{ zoneId: "E", name: "Khu E", slotCount: 20 }],
        motoZones: [{ zoneId: "F", name: "Khu F", slotCount: 20 }],
      },
    },
  });

  const parkingLot3 = await prisma.parkingLot.create({
    data: {
      name: "Bãi Đỗ Ô Tô Cầu Giấy",
      address: "241 Xuân Thủy, Cầu Giấy, Hà Nội",
      totalSlots: 40,
      lotType: "CAR_ONLY",
      carHourlyRate: 60000,
      zones: {
        carZones: [
          { zoneId: "VIP", name: "Khu VIP", slotCount: 15 },
          { zoneId: "G", name: "Khu G", slotCount: 25 },
        ],
      },
    },
  });

  console.log("✅ Created 3 parking lots");

  const slotPlans = [
    { parkingLotId: parkingLot1.id, zoneId: "A", vehicleType: "CAR", count: 18 },
    { parkingLotId: parkingLot1.id, zoneId: "B", vehicleType: "CAR", count: 18 },
    { parkingLotId: parkingLot1.id, zoneId: "C", vehicleType: "MOTORBIKE", count: 18 },
    { parkingLotId: parkingLot1.id, zoneId: "D", vehicleType: "MOTORBIKE", count: 18 },
    { parkingLotId: parkingLot2.id, zoneId: "E", vehicleType: "CAR", count: 20 },
    { parkingLotId: parkingLot2.id, zoneId: "F", vehicleType: "MOTORBIKE", count: 20 },
    { parkingLotId: parkingLot3.id, zoneId: "VIP", vehicleType: "CAR", count: 15 },
    { parkingLotId: parkingLot3.id, zoneId: "G", vehicleType: "CAR", count: 25 },
  ];

  const slots = {};
  const slotsByZone = {};
  for (const plan of slotPlans) {
    slotsByZone[plan.zoneId] = [];
    for (let i = 1; i <= plan.count; i++) {
      const slot = await prisma.parkingSlot.create({
        data: {
          parkingLotId: plan.parkingLotId,
          zoneId: plan.zoneId,
          slotNumber: `${plan.zoneId}-${i}`,
          vehicleType: plan.vehicleType,
          status: "AVAILABLE",
        },
      });
      slots[slot.slotNumber] = slot;
      slotsByZone[plan.zoneId].push(slot);
    }
  }
  console.log(`✅ Created ${Object.keys(slots).length} parking slots`);

  const maintenanceSlotNumbers = ["A-18", "B-18", "D-18", "E-20", "VIP-15"];
  for (const slotNumber of maintenanceSlotNumbers) {
    await prisma.parkingSlot.update({
      where: { id: slots[slotNumber].id },
      data: { status: "MAINTENANCE" },
    });
    slots[slotNumber].status = "MAINTENANCE";
  }

  const colors = [
    "Black",
    "White",
    "Silver",
    "Blue",
    "Red",
    "Gray",
    "Green",
    "Yellow",
    "Brown",
    "Orange",
  ];

  const carPlates = [
    "30A-12345",
    "30K-56789",
    "88A-99887",
    "51G-31313",
    "34A-68686",
    "29A-11223",
    "30G-77889",
    "15A-88990",
    "43A-55667",
    "18A-22446",
    "99A-66778",
    "35A-10101",
  ];

  const bikePlates = [
    "29M1-45678",
    "30H7-23456",
    "17B2-11122",
    "43F1-76543",
    "29X3-88991",
    "30L9-22334",
    "14B7-55678",
    "36M2-90123",
    "37H1-34567",
    "92K1-77889",
    "59T2-11224",
    "47P1-88901",
  ];

  const vehicles = {};
  const userVehicles = [];
  appUsers.forEach((user, index) => {
    const carPlate = carPlates[index];
    const bikePlate = bikePlates[index];
    userVehicles.push({
      userId: user.id,
      plateNumber: carPlate,
      vehicleType: "CAR",
      color: colors[index % colors.length],
    });
    userVehicles.push({
      userId: user.id,
      plateNumber: bikePlate,
      vehicleType: "MOTORBIKE",
      color: colors[(index + 3) % colors.length],
    });
  });

  for (const vehicleData of userVehicles) {
    const vehicle = await prisma.vehicle.create({ data: vehicleData });
    vehicles[vehicle.plateNumber] = vehicle;
  }
  console.log(`✅ Created ${Object.keys(vehicles).length} vehicles`);

  const now = new Date();
  const hour = 60 * 60 * 1000;
  const day = 24 * hour;

  const createBooking = async ({
    userId,
    vehicleId,
    slotNumber,
    parkingLotId,
    startTime,
    endTime,
    estimatedCost,
    bookingStatus,
    paymentStatus,
    paymentMethod,
    slotStatus,
    referenceId,
    createPayment = false,
  }) => {
    const booking = await prisma.booking.create({
      data: {
        userId,
        vehicleId,
        parkingSlotId: slots[slotNumber].id,
        parkingLotId,
        startTime,
        endTime,
        estimatedCost,
        paymentMethod,
        status: bookingStatus,
      },
    });

    if (createPayment) {
      await prisma.payment.create({
        data: {
          userId,
          bookingId: booking.id,
          amount: estimatedCost,
          method: paymentMethod,
          status: paymentStatus,
          referenceId,
        },
      });
    }

    if (slotStatus) {
      await prisma.parkingSlot.update({
        where: { id: slots[slotNumber].id },
        data: { status: slotStatus },
      });
      slots[slotNumber].status = slotStatus;
    }

    return booking;
  };

  const createParkingRecord = async ({
    userId,
    vehicleId,
    slotNumber,
    parkingLotId,
    bookingId = null,
    checkInTime,
    checkOutTime = null,
    actualCost,
    paymentStatus,
    recordStatus,
    paymentMethod,
    referenceId,
    createPayment = false,
    paymentLink = "parkingRecord",
  }) => {
    const record = await prisma.parkingRecord.create({
      data: {
        userId,
        vehicleId,
        parkingLotId,
        parkingSlotId: slots[slotNumber].id,
        bookingId,
        checkInTime,
        checkOutTime,
        actualCost,
        paymentStatus,
        status: recordStatus,
      },
    });

    if (createPayment) {
      await prisma.payment.create({
        data: {
          userId,
          bookingId: paymentLink === "booking" ? bookingId : null,
          parkingRecordId: paymentLink === "parkingRecord" ? record.id : null,
          amount: actualCost,
          method: paymentMethod,
          status: paymentStatus,
          referenceId,
        },
      });
    }

    const nextStatus = recordStatus === "CHECKED_IN" ? "OCCUPIED" : "AVAILABLE";
    await prisma.parkingSlot.update({
      where: { id: slots[slotNumber].id },
      data: { status: nextStatus },
    });
    slots[slotNumber].status = nextStatus;

    return record;
  };

  const lot1OccupiedCars = [
    { slot: "A-1", plate: "30A-12345", user: appUsers[0] },
    { slot: "A-2", plate: "30K-56789", user: appUsers[1] },
    { slot: "A-3", plate: "88A-99887", user: appUsers[2] },
    { slot: "A-5", plate: "34A-68686", user: appUsers[4] },
    { slot: "A-6", plate: "29A-11223", user: appUsers[5] },
    { slot: "A-7", plate: "30G-77889", user: appUsers[6] },
    { slot: "A-8", plate: "15A-88990", user: appUsers[7] },
  ];

  const lot1OccupiedBikes = [
    { slot: "C-1", plate: "29M1-45678", user: appUsers[0] },
    { slot: "C-2", plate: "30H7-23456", user: appUsers[1] },
    { slot: "C-3", plate: "17B2-11122", user: appUsers[2] },
    { slot: "C-4", plate: "43F1-76543", user: appUsers[3] },
    { slot: "C-5", plate: "29X3-88991", user: appUsers[4] },
    { slot: "C-6", plate: "30L9-22334", user: appUsers[5] },
    { slot: "C-7", plate: "14B7-55678", user: appUsers[6] },
    { slot: "C-8", plate: "36M2-90123", user: appUsers[7] },
    { slot: "C-9", plate: "37H1-34567", user: appUsers[8] },
  ];

  for (const [index, item] of [...lot1OccupiedCars, ...lot1OccupiedBikes].entries()) {
    await createParkingRecord({
      userId: item.user.id,
      vehicleId: vehicles[item.plate].id,
      slotNumber: item.slot,
      parkingLotId: parkingLot1.id,
      checkInTime: new Date(now.getTime() - (index + 1) * 20 * 60 * 1000),
      actualCost: 0,
      paymentStatus: "PENDING",
      recordStatus: "CHECKED_IN",
      paymentMethod: "CASH",
      createPayment: false,
    });
  }

  const reservedBookings = [
    {
      user: appUsers[11],
      plate: "35A-10101",
      slot: "B-13",
      lotId: parkingLot1.id,
      startOffsetHours: 1,
      durationHours: 3,
      amount: 150000,
      bookingStatus: "CONFIRMED",
      paymentStatus: "SUCCESS",
      paymentMethod: "VNPAY",
      referenceId: "VNPAY-BOOKING-1001",
      createPayment: true,
    },
    {
      user: appUsers[10],
      plate: "59T2-11224",
      slot: "D-13",
      lotId: parkingLot1.id,
      startOffsetHours: 2,
      durationHours: 4,
      amount: 40000,
      bookingStatus: "CONFIRMED",
      paymentStatus: "SUCCESS",
      paymentMethod: "VNPAY",
      referenceId: "VNPAY-BOOKING-1002",
      createPayment: true,
    },
    {
      user: appUsers[9],
      plate: "18A-22446",
      slot: "B-14",
      lotId: parkingLot1.id,
      startOffsetHours: 3,
      durationHours: 2,
      amount: 100000,
      bookingStatus: "CONFIRMED",
      paymentStatus: null,
      paymentMethod: "CASH",
      referenceId: null,
      createPayment: false,
    },
    {
      user: appUsers[9],
      plate: "92K1-77889",
      slot: "D-14",
      lotId: parkingLot1.id,
      startOffsetHours: 5,
      durationHours: 5,
      amount: 50000,
      bookingStatus: "CANCELLED",
      paymentStatus: "FAILED",
      paymentMethod: "VNPAY",
      referenceId: "VNPAY-BOOKING-1003",
      createPayment: true,
      slotStatus: "AVAILABLE",
    },
  ];

  for (const item of reservedBookings) {
    await createBooking({
      userId: item.user.id,
      vehicleId: vehicles[item.plate].id,
      slotNumber: item.slot,
      parkingLotId: item.lotId,
      startTime: new Date(now.getTime() + item.startOffsetHours * hour),
      endTime: new Date(now.getTime() + (item.startOffsetHours + item.durationHours) * hour),
      estimatedCost: item.amount,
      bookingStatus: item.bookingStatus,
      paymentStatus: item.paymentStatus,
      paymentMethod: item.paymentMethod,
      slotStatus: item.slotStatus ?? "RESERVED",
      referenceId: item.referenceId,
      createPayment: item.createPayment,
    });
  }

  await createParkingRecord({
    userId: appUsers[10].id,
    vehicleId: vehicles["99A-66778"].id,
    slotNumber: "E-1",
    parkingLotId: parkingLot2.id,
    checkInTime: new Date(now.getTime() - 90 * 60 * 1000),
    actualCost: 0,
    paymentStatus: "PENDING",
    recordStatus: "CHECKED_IN",
    paymentMethod: "CASH",
    createPayment: false,
  });

  await createParkingRecord({
    userId: appUsers[11].id,
    vehicleId: vehicles["47P1-88901"].id,
    slotNumber: "F-1",
    parkingLotId: parkingLot2.id,
    checkInTime: new Date(now.getTime() - 70 * 60 * 1000),
    actualCost: 0,
    paymentStatus: "PENDING",
    recordStatus: "CHECKED_IN",
    paymentMethod: "CASH",
    createPayment: false,
  });

  await createParkingRecord({
    userId: appUsers[8].id,
    vehicleId: vehicles["43A-55667"].id,
    slotNumber: "VIP-1",
    parkingLotId: parkingLot3.id,
    checkInTime: new Date(now.getTime() - 2 * hour),
    actualCost: 0,
    paymentStatus: "PENDING",
    recordStatus: "CHECKED_IN",
    paymentMethod: "CASH",
    createPayment: false,
  });

  await createBooking({
    userId: appUsers[3].id,
    vehicleId: vehicles["51G-31313"].id,
    slotNumber: "E-2",
    parkingLotId: parkingLot2.id,
    startTime: new Date(now.getTime() + 2 * hour),
    endTime: new Date(now.getTime() + 6 * hour),
    estimatedCost: 160000,
    bookingStatus: "CONFIRMED",
    paymentStatus: "SUCCESS",
    paymentMethod: "VNPAY",
    slotStatus: "RESERVED",
    referenceId: "VNPAY-BOOKING-2001",
    createPayment: true,
  });

  const pastScenarios = [
    {
      user: appUsers[1],
      plate: "30H7-23456",
      slot: "C-15",
      lotId: parkingLot1.id,
      startDaysAgo: 2,
      durationHours: 3,
      amount: 30000,
      paymentStatus: "SUCCESS",
      paymentMethod: "CASH",
      booking: true,
      referenceId: null,
    },
    {
      user: appUsers[5],
      plate: "29A-11223",
      slot: "B-15",
      lotId: parkingLot1.id,
      startDaysAgo: 4,
      durationHours: 5,
      amount: 250000,
      paymentStatus: "SUCCESS",
      paymentMethod: "CASH",
      booking: false,
      referenceId: null,
    },
    {
      user: appUsers[6],
      plate: "14B7-55678",
      slot: "F-2",
      lotId: parkingLot2.id,
      startDaysAgo: 6,
      durationHours: 8,
      amount: 40000,
      paymentStatus: "SUCCESS",
      paymentMethod: "CASH",
      booking: false,
      referenceId: null,
    },
    {
      user: appUsers[9],
      plate: "18A-22446",
      slot: "G-1",
      lotId: parkingLot3.id,
      startDaysAgo: 9,
      durationHours: 6,
      amount: 360000,
      paymentStatus: "SUCCESS",
      paymentMethod: "VNPAY",
      booking: true,
      referenceId: "VNPAY-BOOKING-3003",
    },
  ];

  for (const item of pastScenarios) {
    const startTime = new Date(now.getTime() - item.startDaysAgo * day);
    const endTime = new Date(startTime.getTime() + item.durationHours * hour);
    let bookingId = null;

    if (item.booking) {
      const booking = await createBooking({
        userId: item.user.id,
        vehicleId: vehicles[item.plate].id,
        slotNumber: item.slot,
        parkingLotId: item.lotId,
        startTime,
        endTime,
        estimatedCost: item.amount,
        bookingStatus: "COMPLETED",
        paymentStatus: "SUCCESS",
        paymentMethod: item.paymentMethod,
        createPayment: item.paymentMethod === "VNPAY",
        referenceId: item.referenceId,
      });
      bookingId = booking.id;
    }

    await createParkingRecord({
      userId: item.user.id,
      vehicleId: vehicles[item.plate].id,
      slotNumber: item.slot,
      parkingLotId: item.lotId,
      bookingId,
      checkInTime: startTime,
      checkOutTime: endTime,
      actualCost: item.amount,
      paymentStatus: item.paymentStatus,
      recordStatus: "CHECKED_OUT",
      paymentMethod: item.paymentMethod,
      referenceId: item.referenceId,
      createPayment: item.paymentMethod === "CASH" || !item.booking,
      paymentLink: item.booking ? "booking" : "parkingRecord",
    });
  }

  const monthlyPasses = [
    {
      userId: appUsers[0].id,
      vehicleType: "CAR",
      startDate: new Date("2026-04-01"),
      endDate: new Date("2026-05-01"),
      price: 1500000,
      status: "ACTIVE",
      method: "VNPAY",
      paymentStatus: "SUCCESS",
      referenceId: "PASS-2026-04-U1",
    },
    {
      userId: appUsers[2].id,
      vehicleType: "CAR",
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-04-01"),
      price: 1400000,
      status: "EXPIRED",
      method: "VNPAY",
      paymentStatus: "SUCCESS",
      referenceId: "PASS-2026-03-U3",
    },
    {
      userId: appUsers[4].id,
      vehicleType: "MOTORBIKE",
      startDate: new Date("2026-05-01"),
      endDate: new Date("2026-06-01"),
      price: 650000,
      status: "CANCELLED",
      method: "VNPAY",
      paymentStatus: "REFUNDED",
      referenceId: "PASS-2026-05-U5",
    },
    {
      userId: appUsers[6].id,
      vehicleType: "MOTORBIKE",
      startDate: new Date("2026-05-10"),
      endDate: new Date("2026-06-10"),
      price: 300000,
      status: "PENDING_PAYMENT",
      method: "VNPAY",
      paymentStatus: "PENDING",
      referenceId: "PASS-2026-05-U7-PENDING",
    },
  ];

  for (const item of monthlyPasses) {
    const pass = await prisma.monthlyPass.create({
      data: {
        userId: item.userId,
        vehicleType: item.vehicleType,
        startDate: item.startDate,
        endDate: item.endDate,
        price: item.price,
        status: item.status,
      },
    });

    await prisma.payment.create({
      data: {
        userId: item.userId,
        monthlyPassId: pass.id,
        amount: item.price,
        method: item.method,
        status: item.paymentStatus,
        referenceId: item.referenceId,
      },
    });
  }

  const lot1Statuses = Object.values(slots).filter(
    (slot) => slot.parkingLotId === parkingLot1.id
  );
  const lot1Occupied = lot1Statuses.filter((slot) => slot.status === "OCCUPIED").length;
  const lot1Reserved = lot1Statuses.filter((slot) => slot.status === "RESERVED").length;
  const lot1Maintenance = lot1Statuses.filter(
    (slot) => slot.status === "MAINTENANCE"
  ).length;
  const lot1Utilized = lot1Occupied + lot1Reserved;
  const lot1UtilizationRate = ((lot1Utilized / lot1Statuses.length) * 100).toFixed(1);

  const allSlots = Object.values(slots);
  const occupiedSlots = allSlots.filter((slot) => slot.status === "OCCUPIED").length;
  const reservedSlots = allSlots.filter((slot) => slot.status === "RESERVED").length;
  const maintenanceSlots = allSlots.filter((slot) => slot.status === "MAINTENANCE").length;

  const [activeBookings, activeParkingRecords] = await Promise.all([
    prisma.booking.findMany({
      where: {
        status: {
          in: ["PENDING_PAYMENT", "CONFIRMED"],
        },
      },
      select: {
        id: true,
        vehicleId: true,
      },
    }),
    prisma.parkingRecord.findMany({
      where: {
        status: "CHECKED_IN",
      },
      select: {
        id: true,
        vehicleId: true,
      },
    }),
  ]);

  const activeUsageByVehicle = new Map();
  for (const usage of [
    ...activeBookings.map((booking) => ({ ...booking, kind: "booking" })),
    ...activeParkingRecords.map((record) => ({ ...record, kind: "parkingRecord" })),
  ]) {
    const current = activeUsageByVehicle.get(usage.vehicleId) ?? [];
    current.push(`${usage.kind}:${usage.id}`);
    activeUsageByVehicle.set(usage.vehicleId, current);
  }

  const duplicateActiveUsage = [...activeUsageByVehicle.entries()].filter(
    ([, usages]) => usages.length > 1,
  );

  if (duplicateActiveUsage.length > 0) {
    throw new Error(
      `Seed contains duplicate active vehicle usage: ${duplicateActiveUsage
        .map(([vehicleId, usages]) => `${vehicleId} => ${usages.join(", ")}`)
        .join("; ")}`,
    );
  }

  console.log("\n🎉 Database seed completed successfully!\n");
  console.log("📊 Summary:");
  console.log(`   - Users: ${createdUsers.length} (1 ADMIN + ${appUsers.length} USER)`);
  console.log(`   - Vehicles: ${Object.keys(vehicles).length}`);
  console.log(`   - Parking Lots: 3`);
  console.log(`   - Parking Slots: ${allSlots.length}`);
  console.log(`   - Occupied Slots: ${occupiedSlots}`);
  console.log(`   - Reserved Slots: ${reservedSlots}`);
  console.log(`   - Maintenance Slots: ${maintenanceSlots}`);
  console.log(`   - Lot 1 utilization: ${lot1Utilized}/${lot1Statuses.length} (${lot1UtilizationRate}%)`);
  console.log(`   - Lot 1 occupied/reserved/maintenance: ${lot1Occupied}/${lot1Reserved}/${lot1Maintenance}`);
  console.log(`   - Monthly Passes: ${monthlyPasses.length}`);

  console.log("\n🔐 Demo Credentials:");
  console.log("   Admin     → admin@parking.com / admin123");
  console.log("   Users     → user1@parking.com to user12@parking.com / user123");

  void admin;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("❌ Seed error:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
