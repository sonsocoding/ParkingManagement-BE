# Parking Management System - Backend

This repository contains the backend for my parking management project. I built it to practice turning a real workflow into a REST API: authentication, bookings, parking records, payments, monthly passes, and admin management.

## What This Backend Does

- Handles authentication and role-based access for `ADMIN` and `USER`
- Manages vehicles, parking lots, parking slots, bookings, parking records, payments, and monthly passes
- Supports both cash and VNPay payment flows
- Protects important business rules such as slot availability, valid booking status changes, and active vehicle usage checks
- Exposes API documentation through Swagger

## Tech Stack

- Node.js
- Express 5
- PostgreSQL
- Prisma ORM
- JWT authentication
- Zod validation
- Swagger
- VNPay sandbox integration

## What I Learned

- Designing a relational database from a real business scenario
- Building modular REST APIs with routes, controllers, middleware, validation, and shared utilities
- Using Prisma transactions to avoid data inconsistency in multi-step flows
- Handling authentication, authorization, and secure request validation
- Integrating a third-party payment gateway and dealing with async payment confirmation
- Thinking more carefully about edge cases instead of only happy paths

## Skills This Repo Shows

- Backend architecture and API design
- Database modeling and schema evolution
- Business logic implementation
- Error handling and validation
- Payment integration
- Debugging and feature iteration

## Key Features

- Login, register, and profile flow
- Parking lot and parking slot management
- Vehicle registration
- Booking lifecycle with slot reservation
- Check-in / check-out parking records
- Cash and VNPay payment support
- Monthly pass purchase and renewal
- Admin management endpoints

## How To Run

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

## What I Would Improve Next

- Add automated tests for booking and payment flows
- Add refresh tokens / stronger session handling
- Improve logging, monitoring, and deployment setup
- Add better rate limiting and security hardening
- Separate more business logic into dedicated service layers

## Project Note

This backend is one half of a two-repository project. The frontend lives in a separate repo and consumes these APIs.
