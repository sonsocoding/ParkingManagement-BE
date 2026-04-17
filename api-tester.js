import axios from "axios";

const API_URL = "http://[::1]:3000/api";
let currentCookie = "";

// Configure axios instance
const api = axios.create({
  baseURL: API_URL,
  validateStatus: () => true, // Don't throw errors on 400/500
});

// Interceptor to attach cookies
api.interceptors.request.use((config) => {
  if (currentCookie) {
    config.headers["Cookie"] = currentCookie;
  }
  return config;
});

// Interceptor to save cookies
api.interceptors.response.use((response) => {
  const setCookieHeader = response.headers["set-cookie"];
  if (setCookieHeader && setCookieHeader.length > 0) {
    currentCookie = setCookieHeader[0].split(";")[0];
  }
  return response;
});

async function runTests() {
  console.log("🚦 Starting Full API Test Suite...\n");
  let passed = 0;
  let failed = 0;

  function assert(condition, message, response = null) {
    if (condition) {
      console.log(`✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${message}`);
      if (response && response.data) {
        console.error("   Response:", typeof response.data === 'object' ? JSON.stringify(response.data) : response.data);
      }
      failed++;
    }
  }

  try {
    // -------------------------------------------------------------
    // PHASE 1: AUTHENTICATION
    // -------------------------------------------------------------
    console.log("--- PHASE 1: AUTHENTICATION ---");
    const loginRes = await api.post("/auth/login", {
      email: "admin@parking.com",
      password: "admin123",
    });
    assert(loginRes.status === 200, "Admin can log in", loginRes);

    const meRes = await api.get("/auth/me");
    assert(meRes.status === 200 && meRes.data.data.user.role === "ADMIN", "Auth cookie works", meRes);

    // -------------------------------------------------------------
    // PHASE 2: PARKING LOTS & SLOTS
    // -------------------------------------------------------------
    console.log("\n--- PHASE 2: PARKING LOTS ---");
    const createLotRes = await api.post("/parking-lots", {
      name: "Test Lot Alpha",
      address: "123 Tech Street",
      totalSlots: 5,
      carHourlyRate: 20000,
      motorbikeHourlyRate: 5000,
      lotType: "BOTH"
    });
    assert(createLotRes.status === 201, "Admin can create a parking lot", createLotRes);
    const lotId = createLotRes.data?.data?.parkingLot?.id;

    // Test Duplicate Lot Name (assuming name doesn't have unique constraint, wait, checking schema)
    // Actually, skip duplicate lot name since lot name isn't unique in schema.

    console.log("\n--- PHASE 3: PARKING SLOTS ---");
    if (lotId) {
      const createSlotRes = await api.post("/parking-slots", {
        parkingLotId: lotId,
        zoneId: "A",
        slotNumbers: ["A-10", "A-11"],
        vehicleType: "CAR"
      });
      assert(createSlotRes.status === 201, "Admin can bulk create parking slots", createSlotRes);

      // Verify slot creation
      const getSlotsRes = await api.get(`/parking-slots/${lotId}`);
      assert(getSlotsRes.status === 200 && getSlotsRes.data.data.parkingSlot.length >= 2, "Can fetch slots by lot ID", getSlotsRes);
      
      const testSlotId = getSlotsRes.data.data.parkingSlot[0]?.id;

      if (testSlotId) {
        // Test update slot status
        const updateSlotRes = await api.put(`/parking-slots/${testSlotId}/status`, { status: "MAINTENANCE" });
        assert(updateSlotRes.status === 200, "Admin can change slot status to MAINTENANCE", updateSlotRes);

        // Test update slot status back
        await api.put(`/parking-slots/${testSlotId}/status`, { status: "AVAILABLE" });
      }
    }

    // -------------------------------------------------------------
    // PHASE 4: USERS & VEHICLES
    // -------------------------------------------------------------
    console.log("\n--- PHASE 4: USERS & VEHICLES ---");
    
    // Switch to User
    await api.post("/auth/login", { email: "user@parking.com", password: "user123" });
    
    // Get My Vehicles
    const myVehiclesRes = await api.get("/vehicles/me");
    assert(myVehiclesRes.status === 200, "User can fetch their own vehicles", myVehiclesRes);
    
    const vehicleId = myVehiclesRes.data?.data?.vehicle?.[0]?.id;

    // -------------------------------------------------------------
    // PHASE 5: BOOKINGS
    // -------------------------------------------------------------
    console.log("\n--- PHASE 5: BOOKINGS ---");
    if (vehicleId && lotId) {
      // Get available slot
      const slotsRes = await api.get(`/parking-slots/${lotId}`);
      const availableSlotId = slotsRes.data?.data?.parkingSlot?.find(s => s.status === "AVAILABLE")?.id;

      if (availableSlotId) {
        // Create booking in the past
        const pastDate = new Date(Date.now() - 3600000).toISOString();
        const futureDate = new Date(Date.now() + 3600000).toISOString();
        
        const badBookingRes = await api.post("/bookings", {
          vehicleId,
          parkingLotId: lotId,
          parkingSlotId: availableSlotId,
          startTime: pastDate,
          endTime: futureDate,
          paymentMethod: "CASH"
        });
        assert(badBookingRes.status === 400, "User CANNOT create a booking starting in the past", badBookingRes);

        // Create valid booking
        const validBookingRes = await api.post("/bookings", {
          vehicleId,
          parkingLotId: lotId,
          parkingSlotId: availableSlotId,
          startTime: new Date(Date.now() + 3600000).toISOString(),
          endTime: new Date(Date.now() + 7200000).toISOString(),
          paymentMethod: "CASH"
        });
        assert(validBookingRes.status === 201, "User can create a valid future booking", validBookingRes);

        const bookingId = validBookingRes.data?.data?.booking?.id;

        // Try canceling a confirmed booking
        if (bookingId) {
          const cancelRes = await api.delete(`/bookings/${bookingId}`);
          assert(cancelRes.status === 200, "User can cancel their own booking", cancelRes);

          // Try checking into a canceled booking
          const checkInCanceledRes = await api.post("/records/checkin", {
            vehicleId,
            parkingLotId: lotId,
            parkingSlotId: availableSlotId,
            bookingId: bookingId
          });
          assert(checkInCanceledRes.status === 400 || checkInCanceledRes.status === 404, "User CANNOT check-in to a canceled booking", checkInCanceledRes);
        }
      }
    }

    // -------------------------------------------------------------
    // PHASE 6: PARKING RECORDS (Walk-in)
    // -------------------------------------------------------------
    console.log("\n--- PHASE 6: PARKING RECORDS (WALK-IN) ---");
    // Get ALL user's vehicles again and find one that isn't checked in.
    const vehiclesRes = await api.get("/vehicles/me");
    if (vehiclesRes.status === 200 && vehiclesRes.data?.data?.vehicle?.length > 1) {
      // vehicle index 2 (vehicle3) is mostly likely free since 1 and 2 are used by seed
      const freeVehicle = vehiclesRes.data.data.vehicle[1];
      const freeVehicleId = freeVehicle?.id;

      // -------------------------------------------------------------
      // PHASE 5.5: MONTHLY PASSES
      // -------------------------------------------------------------
      console.log("\n--- PHASE 5.5: MONTHLY PASSES ---");
      // Register a monthly pass for this user's vehicle type
      const registerPassRes = await api.post("/monthly-passes", {
        vehicleType: freeVehicle.vehicleType,
        months: 2
      });
      assert(registerPassRes.status === 201 || registerPassRes.status === 409, "User can register a monthly pass (or already has one)", registerPassRes);

      const passRes = await api.get("/monthly-passes/me");
      assert(passRes.status === 200, "User can view their own monthly passes", passRes);

      const allLotsRes = await api.get("/parking-lots");
      const seedLotId = allLotsRes.data?.data?.parkingLots?.[0]?.id;
      
      if (seedLotId && freeVehicleId) {
        const seedSlotsRes = await api.get(`/parking-slots/${seedLotId}`);
        const freeSlotId = seedSlotsRes.data?.data?.parkingSlot?.find(s => s.status === "AVAILABLE" && s.vehicleType === freeVehicle.vehicleType)?.id;

        if (freeSlotId) {
          // Check In Walk in
          const walkInRes = await api.post("/records/checkin", {
            vehicleId: freeVehicleId,
            parkingLotId: seedLotId,
            parkingSlotId: freeSlotId
          });
          assert(walkInRes.status === 201, "User can do a walk-in check-in", walkInRes);
          
          const recordId = walkInRes.data?.data?.parkingRecord?.id;

          if (recordId) {
            // Check out walk in
            const checkOutRes = await api.put(`/records/${recordId}/checkout`);
            assert(checkOutRes.status === 200, "User can check out of a walk-in record", checkOutRes);
          }
        }
      }
    }

    // -------------------------------------------------------------
    console.log(`\n🎉 Full API Test Suite Completed!`);
    console.log(`Passed: ${passed} | Failed: ${failed}`);

  } catch (error) {
    console.error("FATAL TEST ERROR:", error);
  }
}

runTests();
