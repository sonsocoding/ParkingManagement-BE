# Backend Folder Structure

## Purpose

Use this file to quickly locate code in the `backend/` app.

## Structure

```text
backend/
├── AGENT.md
├── docs/
│   ├── agent.md
│   ├── folder_structures.md
│   ├── roles.md
│   └── agents/
│       ├── backend-agent.md
│       ├── backend-folder-structure.md
│       └── shared-agent-context.md
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

## Where To Start By Task

- New endpoint: `src/routes/`, `src/controllers/`, `src/schemas/`
- Data relationship issue: `prisma/schema.prisma`
- Auth or permission bug: `src/middleware/` and `docs/roles.md`
- Payment/VNPay issue: `src/controllers/paymentController.js`, `src/utils/vnpay.js`, `src/jobs/paymentExpirationJob.js`
- App boot or route mount issue: `src/app.js`, `src/server.js`

## Editing Flow

When changing a feature, usually read in this order:

1. Route
2. Controller
3. Validation schema
4. Prisma schema or related model
5. Shared agent context if the change affects frontend contract
