parking-management-backend/
│
├── src/
│ ├── config/
│ │ ├── database.js # Prisma & PostgreSQL connection
│ │ ├── jwt.js # JWT secret & token config
│ │ ├── environment.js # All .env variables
│ │ └── payment.js # Momo, VNPay API keys
│ │
│ ├── middleware/
│ │ ├── auth.js # JWT verification
│ │ ├── authorization.js # Role-based access control (Admin, User, Manager)
│ │ ├── errorHandler.js # Global error handling
│ │ ├── validation.js # Request data validation
│ │ ├── rateLimiter.js # Rate limiting for APIs
│ │ └── logging.js # Request logging
│ │
│ ├── routes/
│ │ ├── index.js # Main router (combines all routes)
│ │ ├── auth.routes.js # Register, login, refresh token
│ │ ├── user.routes.js # User profile, vehicle management
│ │ ├── parking.routes.js # Parking lot CRUD
│ │ ├── booking.routes.js # Book spot, cancel, view bookings
│ │ ├── payment.routes.js # Payment, transactions, refunds
│ │ ├── monthlyPass.routes.js # Monthly pass registration
│ │ ├── admin.routes.js # Admin dashboard operations
│ │ └── manager.routes.js # Manager analytics & reports
│ │
│ ├── controllers/
│ │ ├── authController.js # Auth logic (register, login)
│ │ ├── userController.js # User profile & vehicle logic
│ │ ├── parkingController.js # Parking lot operations
│ │ ├── bookingController.js # Booking operations
│ │ ├── paymentController.js # Payment processing
│ │ ├── monthlyPassController.js # Pass management
│ │ ├── adminController.js # Admin operations
│ │ └── managerController.js # Analytics & reporting
│ │
│ ├── services/
│ │ ├── authService.js # Authentication logic
│ │ ├── userService.js # User business logic
│ │ ├── parkingService.js # Parking lot business logic
│ │ ├── bookingService.js # Booking logic + Queue system
│ │ ├── queueService.js # Queue/Lock mechanism for race conditions
│ │ ├── paymentService.js # Payment gateway integration
│ │ ├── monthlyPassService.js # Pass business logic
│ │ ├── notificationService.js # Email/SMS alerts
│ │ ├── auditService.js # Audit logging
│ │ └── analyticsService.js # Data aggregation & reports
│ │
│ ├── models/
│ │ └── prisma/ # Prisma schema models (handled by Prisma)
│ │
│ ├── utils/
│ │ ├── jwt.js # JWT token generation & verification
│ │ ├── password.js # Password hashing & verification
│ │ ├── formatResponse.js # Standardized API responses
│ │ ├── errorMessages.js # Centralized error messages
│ │ ├── validators.js # Data validation utilities
│ │ ├── dateTime.js # Date & time calculations
│ │ ├── pricing.js # Pricing calculation logic
│ │ └── constants.js # App-wide constants
│ │
│ ├── websocket/
│ │ ├── socketHandler.js # Socket.io setup
│ │ ├── parkingNamespace.js # Real-time parking updates
│ │ ├── notificationNamespace.js # Real-time notifications
│ │ └── events.js # Socket event definitions
│ │
│ ├── jobs/
│ │ ├── scheduler.js # Cron jobs setup (node-cron)
│ │ ├── reminderJob.js # Send expiry reminders
│ │ ├── passRenewalJob.js # Auto-renew passes
│ │ └── cleanupJob.js # Data cleanup jobs
│ │
│ ├── database/
│ │ ├── migrations/ # Prisma migrations (auto-generated)
│ │ └── seeds/ # Database seeding scripts
│ │ ├── seedUsers.js
│ │ ├── seedParkingLots.js
│ │ └── seedPricing.js
│ │
│ └── app.js # Express app setup (middleware, routes)
│
├── prisma/
│ └── schema.prisma # Prisma database schema
│
├── tests/ # Testing folder (optional at this stage)
│ ├── unit/
│ │ ├── services/
│ │ ├── utils/
│ │ └── middleware/
│ ├── integration/
│ │ ├── routes/
│ │ └── api/
│ └── fixtures/
│
├── logs/ # Application logs
│ ├── error.log
│ ├── access.log
│ └── audit.log
│
├── .env # Environment variables (DO NOT COMMIT)
├── .env.example # Example .env template
├── .gitignore
├── package.json
├── package-lock.json
├── server.js # Entry point (starts Express + WebSocket)
├── README.md # Project documentation
└── docker-compose.yml # Docker setup (optional)
