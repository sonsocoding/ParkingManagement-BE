const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "Parking Management System API",
    version: "1.0.0",
    description: "API documentation for the Parking Management System backend",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
  components: {
    securitySchemes: {
      cookieAuth: {
        type: "apiKey",
        in: "cookie",
        name: "token",
      },
    },
    schemas: {
      User: {
        type: "object",
        properties: {
          id: { type: "string" },
          email: { type: "string" },
          fullName: { type: "string" },
          phone: { type: "string", nullable: true },
          role: { type: "string", enum: ["ADMIN", "MANAGER", "USER"] },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
      Vehicle: {
        type: "object",
        properties: {
          id: { type: "string" },
          userId: { type: "string" },
          plateNumber: { type: "string" },
          vehicleType: { type: "string", enum: ["CAR", "MOTORBIKE"] },
          color: { type: "string", nullable: true },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
      ParkingLot: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          address: { type: "string" },
          totalSlots: { type: "integer" },
          lotType: { type: "string", enum: ["CAR_ONLY", "MOTORBIKE_ONLY", "BOTH"] },
          carHourlyRate: { type: "number" },
          motorbikeHourlyRate: { type: "number" },
        },
      },
      ParkingSlot: {
        type: "object",
        properties: {
          id: { type: "string" },
          parkingLotId: { type: "string" },
          zoneId: { type: "string" },
          slotNumber: { type: "string" },
          vehicleType: { type: "string", enum: ["CAR", "MOTORBIKE"] },
          status: { type: "string", enum: ["AVAILABLE", "OCCUPIED", "RESERVED", "MAINTENANCE"] },
        },
      },
      Booking: {
        type: "object",
        properties: {
          id: { type: "string" },
          userId: { type: "string" },
          vehicleId: { type: "string" },
          parkingSlotId: { type: "string" },
          parkingLotId: { type: "string" },
          startTime: { type: "string", format: "date-time" },
          endTime: { type: "string", format: "date-time" },
          estimatedCost: { type: "number" },
          status: { type: "string", enum: ["PENDING_PAYMENT", "CONFIRMED", "COMPLETED", "CANCELLED"] },
        },
      },
      ParkingRecord: {
        type: "object",
        properties: {
          id: { type: "string" },
          userId: { type: "string" },
          vehicleId: { type: "string" },
          parkingLotId: { type: "string" },
          parkingSlotId: { type: "string" },
          bookingId: { type: "string", nullable: true },
          checkInTime: { type: "string", format: "date-time" },
          checkOutTime: { type: "string", format: "date-time", nullable: true },
          actualCost: { type: "number" },
          paymentStatus: { type: "string", enum: ["PENDING", "SUCCESS", "FAILED", "REFUNDED"] },
          status: { type: "string", enum: ["CHECKED_IN", "CHECKED_OUT"] },
        },
      },
      Payment: {
        type: "object",
        properties: {
          id: { type: "string" },
          userId: { type: "string" },
          bookingId: { type: "string", nullable: true },
          amount: { type: "number" },
          method: { type: "string", enum: ["CASH", "VNPAY"] },
          status: { type: "string", enum: ["PENDING", "SUCCESS", "FAILED", "REFUNDED"] },
          referenceId: { type: "string", nullable: true },
        },
      },
      MonthlyPass: {
        type: "object",
        properties: {
          id: { type: "string" },
          userId: { type: "string" },
          vehicleType: { type: "string", enum: ["CAR", "MOTORBIKE"] },
          startDate: { type: "string", format: "date-time" },
          endDate: { type: "string", format: "date-time" },
          price: { type: "number" },
          status: { type: "string", enum: ["ACTIVE", "EXPIRED", "CANCELLED"] },
        },
      },
    },
  },
  paths: {
    "/api/auth/register": {
      post: {
        tags: ["Auth"],
        summary: "Register a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["fullName", "email", "password", "phoneNumber"],
                properties: {
                  fullName: { type: "string" },
                  email: { type: "string" },
                  password: { type: "string" },
                  phoneNumber: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "User registered successfully" },
          400: { description: "Bad request" },
        },
      },
    },
    "/api/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Login user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["email", "password"],
                properties: {
                  email: { type: "string" },
                  password: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Login successful" },
          401: { description: "Unauthorized" },
        },
      },
    },
    "/api/auth/logout": {
      post: {
        tags: ["Auth"],
        summary: "Logout user",
        responses: {
          200: { description: "Logout successful" },
        },
      },
    },
    "/api/auth/me": {
      get: {
        tags: ["Auth"],
        summary: "Get current user info",
        security: [{ cookieAuth: [] }],
        responses: {
          200: {
            description: "Current user info",
            content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } },
          },
          401: { description: "Unauthorized" },
        },
      },
    },
    "/api/users": {
      get: {
        tags: ["Users"],
        summary: "Get all users (Admin/Manager only)",
        security: [{ cookieAuth: [] }],
        responses: {
          200: { description: "List of users" },
        },
      },
      post: {
        tags: ["Users"],
        summary: "Create user (Admin only)",
        security: [{ cookieAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  fullName: { type: "string" },
                  email: { type: "string" },
                  password: { type: "string" },
                  phoneNumber: { type: "string" },
                  role: { type: "string", enum: ["USER", "ADMIN", "MANAGER"] },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "User created" },
        },
      },
    },
    "/api/users/me": {
      get: {
        tags: ["Users"],
        summary: "Get own profile",
        security: [{ cookieAuth: [] }],
        responses: {
          200: { description: "User profile" },
        },
      },
      put: {
        tags: ["Users"],
        summary: "Update own profile",
        security: [{ cookieAuth: [] }],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  fullName: { type: "string" },
                  phoneNumber: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Profile updated" },
        },
      },
      delete: {
        tags: ["Users"],
        summary: "Delete own profile",
        security: [{ cookieAuth: [] }],
        responses: {
          200: { description: "Profile deleted" },
        },
      },
    },
    "/api/parking-lots": {
      get: {
        tags: ["Parking Lots"],
        summary: "Get all parking lots",
        security: [{ cookieAuth: [] }],
        responses: {
          200: { description: "List of parking lots" },
        },
      },
      post: {
        tags: ["Parking Lots"],
        summary: "Create parking lot (Admin only)",
        security: [{ cookieAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "address", "totalSlots"],
                properties: {
                  name: { type: "string" },
                  address: { type: "string" },
                  totalSlots: { type: "integer" },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "Parking lot created" },
        },
      },
    },
    "/api/parking-lots/{id}": {
      get: {
        tags: ["Parking Lots"],
        summary: "Get parking lot by ID",
        security: [{ cookieAuth: [] }],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
        ],
        responses: {
          200: { description: "Parking lot details" },
        },
      },
      put: {
        tags: ["Parking Lots"],
        summary: "Update parking lot (Admin only)",
        security: [{ cookieAuth: [] }],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  address: { type: "string" },
                  totalSlots: { type: "integer" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Parking lot updated" },
        },
      },
      delete: {
        tags: ["Parking Lots"],
        summary: "Delete parking lot (Admin only)",
        security: [{ cookieAuth: [] }],
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
        ],
        responses: {
          200: { description: "Parking lot deleted" },
        },
      },
    },
    "/api/bookings": {
      get: {
        tags: ["Bookings"],
        summary: "Get all bookings (Admin/Manager only)",
        security: [{ cookieAuth: [] }],
        responses: {
          200: { description: "List of all bookings" },
        },
      },
      post: {
        tags: ["Bookings"],
        summary: "Create a booking (User only)",
        security: [{ cookieAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["parkingSlotId", "startTime", "endTime"],
                properties: {
                  parkingSlotId: { type: "string" },
                  startTime: { type: "string", format: "date-time" },
                  endTime: { type: "string", format: "date-time" },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "Booking created" },
        },
      },
    },
    "/api/bookings/me": {
      get: {
        tags: ["Bookings"],
        summary: "Get own bookings (User only)",
        security: [{ cookieAuth: [] }],
        responses: {
          200: { description: "List of own bookings" },
        },
      },
    },
  },
};

export default swaggerDocs;
