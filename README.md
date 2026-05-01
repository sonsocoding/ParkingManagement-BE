# Parking Management System - Backend

This repository contains the backend for my parking management project. It is the part I focused on the most because I wanted to learn how real systems protect data, enforce business rules, and stay consistent when many actions happen at the same time.

## Overview

- Handles authentication and role-based access for `ADMIN` and `USER`
- Manages vehicles, parking lots, parking slots, bookings, parking records, payments, and monthly passes
- Supports both cash and VNPay payment flows
- Exposes API documentation through Swagger
- Enforces real business rules instead of only storing CRUD data

## 🛠️ Tech Stack

- `Node.js`
- `Express 5`
- `PostgreSQL`
- `Prisma ORM`
- `JWT`
- `Zod`
- `Swagger`
- `VNPay sandbox`

## Why This Backend Matters

This is not just a basic API with simple create, read, update, delete operations. A lot of the work in this repo is about protecting correctness:

- Preventing race conditions when two users try to reserve the same slot
- Validating request data before it reaches the business logic
- Controlling allowed state transitions for bookings and payments
- Preventing invalid actions such as using the wrong vehicle type for a slot
- Handling payment callbacks and expiration flows safely
- Keeping multi-step operations consistent with database transactions

## ⭐ Notable Backend Features

- Race-condition protection  
  Booking creation uses transaction-based logic so a slot cannot be treated as available by multiple requests at the same time.

- Strong validation layer  
  Request bodies are validated with `Zod`, which helps reject bad input early and keeps controllers cleaner.

- Authorization and route protection  
  Middleware separates authentication, authorization, validation, and controller logic, which made the codebase more maintainable.

- Booking and payment state control  
  The backend enforces allowed status transitions like `PENDING_PAYMENT -> CONFIRMED -> COMPLETED` so invalid jumps do not happen silently.

- Active vehicle usage checks  
  A vehicle cannot create overlapping active usage, which prevents duplicate bookings or parking sessions for the same vehicle.

- VNPay integration  
  The system creates payment URLs, handles return verification, and reacts to payment success, failure, or expiration.

- Monthly pass logic  
  Monthly passes are tied to vehicle type and support rules such as one active usage at a time.

- Error handling  
  The API has centralized error handling and maps important Prisma/database errors into cleaner HTTP responses.

- Background expiration handling  
  Payment expiration logic is handled by a background job so unpaid VNPay bookings do not stay stuck forever.

## 📚 What I Learned

- How to design a relational database from a real business workflow
- How to think in terms of system rules, not only endpoints
- How authentication and authorization should be separated clearly
- How transactions help protect data consistency in multi-step actions
- How to validate input and guard against edge cases early
- How third-party payment flows are more complex than normal form submissions
- How much backend quality depends on handling failure cases, not just happy paths

## 💡 Skills This Repo Shows

- Backend architecture and API design
- Database modeling and schema evolution
- Business logic implementation
- Validation design
- Auth and access control
- Error handling
- Payment integration
- Debugging and iterative improvement

## 🚀 Key Features

- Login, register, logout, and profile flow
- Parking lot and parking slot management
- Vehicle registration and ownership checks
- Booking lifecycle with reservation rules
- Check-in / check-out parking records
- Cash and VNPay payment support
- Monthly pass purchase and renewal
- Admin management endpoints

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

## 🔧 What I Would Improve Next

- Add automated tests for booking, payment, and monthly pass flows
- Add refresh tokens or stronger session management
- Improve logging, monitoring, and production-readiness
- Add better rate limiting and security hardening
- Move more complex business logic into clearer service layers
- Prepare cleaner deployment and environment setup

## 📝 Project Note

This backend is one half of a two-repository project. The frontend lives in a separate repo and consumes these APIs, but this backend is the main part that best reflects what I learned technically in the project.
