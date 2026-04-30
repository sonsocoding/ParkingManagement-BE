export const ACTIVE_BOOKING_STATUSES = ["PENDING_PAYMENT", "CONFIRMED"];
export const ACTIVE_PARKING_RECORD_STATUS = "CHECKED_IN";

export class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const findActiveVehicleUsage = async (
  db,
  { vehicleId, excludeBookingId = null, excludeParkingRecordId = null },
) => {
  // We treat active bookings and active parking sessions as the same exclusivity pool:
  // one vehicle can participate in only one of them at a time.
  const [booking, parkingRecord] = await Promise.all([
    db.booking.findFirst({
      where: {
        vehicleId,
        status: { in: ACTIVE_BOOKING_STATUSES },
        ...(excludeBookingId
          ? {
              id: {
                not: excludeBookingId,
              },
            }
          : {}),
      },
      select: {
        id: true,
        status: true,
      },
    }),
    db.parkingRecord.findFirst({
      where: {
        vehicleId,
        status: ACTIVE_PARKING_RECORD_STATUS,
        ...(excludeParkingRecordId
          ? {
              id: {
                not: excludeParkingRecordId,
              },
            }
          : {}),
      },
      select: {
        id: true,
        status: true,
      },
    }),
  ]);

  return { booking, parkingRecord };
};

// main guard use by controllers to prevent active use conflict. Throws if any active booking or parking record is found for the vehicle.
export const assertVehicleAvailableForActiveUse = async (db, options) => {
  const { booking, parkingRecord } = await findActiveVehicleUsage(db, options);

  // These messages are intentionally specific because the frontend now surfaces them directly.
  if (booking && parkingRecord) {
    throw new HttpError(409, "Vehicle already has another active usage");
  }
  if (parkingRecord) {
    throw new HttpError(409, "Vehicle is already checked in");
  }
  if (booking) {
    throw new HttpError(409, "Vehicle already has an active booking");
  }

  return { booking, parkingRecord };
};
