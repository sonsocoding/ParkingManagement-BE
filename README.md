# Parking Management System - Backend

Frontend repo: `https://github.com/sonsocoding/ParkingManagement-FE`  
Backend repo: `https://github.com/sonsocoding/ParkingManagement-BE`

This repository contains the backend for my parking management project. I focused on making it more than a simple CRUD API by enforcing **business rules**, **data consistency**, **race condition protection**, and **safe multi-step flows** like booking and payment handling.

## Overview

- Handles authentication and role-based access for `ADMIN` and `USER`
- Manages vehicles, parking lots, parking slots, bookings, parking records, payments, and monthly passes
- Supports both cash and VNPay payment flows
- Exposes API documentation through Swagger
- Enforces real business rules instead of only storing data

## 🛠️ Tech Stack

- `Node.js`
- `Express 5`
- `PostgreSQL`
- `Prisma ORM`
- `JWT`
- `Zod`
- `Swagger`
- `VNPay sandbox`

## Key Features

- **Auth and access control** for `ADMIN` and `USER`
- **Vehicle, parking lot, slot, booking, payment, and monthly pass management**
- **Race condition protection** so multiple users cannot safely treat the same slot as available at the same time
- **Validation with `Zod`** so invalid input is rejected early
- **State control** for booking and payment flows such as `PENDING_PAYMENT -> CONFIRMED -> COMPLETED`
- **Active usage checks** to prevent overlapping bookings or parking sessions for the same vehicle
- **VNPay integration** with payment URL creation, return verification, and expiration handling
- **Centralized error handling** for cleaner API responses
- **Swagger docs** for API exploration

## Folder Structure

```text
backend/
├── docs/
│   ├── roles.md
│   └── agents/
├── prisma/
│   ├── schema.prisma
│   ├── seed.js
│   └── migrations/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   ├── controllers/
│   ├── jobs/
│   ├── middleware/
│   ├── routes/
│   ├── schemas/
│   └── utils/
├── package.json
└── README.md
```

## ▶️ How To Run

```bash
npm install
npx prisma migrate dev
npm run seed
npm run dev
```

Create a `.env` file with the main variables below:

```bash
DATABASE_URL=...
JWT_SECRET=...
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:3000
VNPAY_TMN_CODE=...
VNPAY_SECURE_SECRET=...
VNPAY_RETURN_URL=http://localhost:5173/payments/vnpay-return
PORT=3000
```

Swagger is available after startup at `http://localhost:3000/api-docs`.

## What This Project Shows

- **Backend architecture** with separated middleware, validation, and controller layers
- **Database design** based on a real workflow instead of isolated endpoints
- **Transactional thinking** for consistency and **race condition handling** in booking and payment flows
- **Integration work** with JWT auth, Prisma, and VNPay
- **Practical backend problem-solving** around validation, authorization, and failure handling

## Next Improvements

- Add automated tests for booking, payment, and monthly pass flows
- Add refresh tokens or stronger session management
- Improve logging, monitoring, and production-readiness
- Add better rate limiting and security hardening
- Move more complex business logic into clearer service layers
- Prepare cleaner deployment and environment setup
