# Smart Parking Management System - Role-Based Access Control

## 📋 Overview

This document clarifies the permissions and capabilities for each role in the Smart Parking Management System. The system is built on a role-based access control (RBAC) model with three primary roles: **User (Customer)**, **Admin**, and **Manager**.

---

## 🔐 Role Hierarchy & Permissions

### Quick Reference Table

| Feature                         | User              | Admin | Manager |
| ------------------------------- | ----------------- | ----- | ------- |
| **View Own Profile**            | ✅                | ✅    | ✅      |
| **View All Profiles**           | ❌                | ✅    | ✅      |
| **Edit Own Profile**            | ✅                | ✅    | ✅      |
| **Edit Other Profiles**         | ❌                | ✅    | ❌      |
| **Create User Account**         | Self-registration | ✅    | ❌      |
| **View Own Vehicles**           | ✅                | ✅    | ✅      |
| **View All Vehicles**           | ❌                | ✅    | ✅      |
| **Search Parking Lots**         | ✅                | ✅    | ✅      |
| **Create/Edit Parking Lots**    | ❌                | ✅    | ❌      |
| **View Real-time Availability** | ✅                | ✅    | ✅      |
| **Book Parking Spot**           | ✅                | ✅    | ❌      |
| **View Own Bookings**           | ✅                | ✅    | ❌      |
| **View All Bookings**           | ❌                | ✅    | ✅      |
| **Cancel Own Booking**          | ✅                | ✅    | ❌      |
| **Cancel Other's Booking**      | ❌                | ✅    | ❌      |
| **View Own Transactions**       | ✅                | ✅    | ✅      |
| **View All Transactions**       | ❌                | ✅    | ✅      |
| **Manual Payment Override**     | ❌                | ✅    | ❌      |
| **View Revenue Reports**        | ❌                | ❌    | ✅      |
| **View Usage Analytics**        | ❌                | ❌    | ✅      |
| **View Audit Logs**             | ❌                | ✅    | ✅      |
| **Register Monthly Pass**       | ✅                | ✅    | ❌      |
| **Approve Monthly Pass**        | ❌                | ✅    | ❌      |
| **Access Admin Dashboard**      | ❌                | ✅    | ❌      |
| **Access Manager Dashboard**    | ❌                | ❌    | ✅      |

---

## 🔄 Model-by-Model Breakdown

### User Model

```
USER CAN:
├── View own profile information
├── Edit own profile
├── Register vehicles (own only)
├── View own vehicles
├── View own bookings
├── Cancel own bookings
├── View own transactions
├── Download own receipts
├── Register for monthly pass (own)
└── View own notification history

ADMIN & MANAGER CAN:
├── View all user profiles
├── Edit user profiles
├── Search/filter users
└── View user history

MANAGER & ADMIN ONLY:
└── View all user data aggregated
```

### Vehicle Model

```
USER CAN:
├── Register own vehicle
├── View own vehicles
├── Edit own vehicle info
└── Delete own vehicle

ADMIN CAN:
├── View all vehicles
├── Edit all vehicle data
├── Search vehicles
├── Link/unlink vehicles to users
├── Blacklist vehicles
└── View vehicle entry/exit history

MANAGER CAN:
├── View all vehicles (read-only)
└── Search vehicles
```

### Parking Lot Model

```
USER CAN:
├── Search available parking lots
├── View parking lot details
├── View real-time availability
└── View pricing

ADMIN CAN:
├── Create parking lot
├── View all parking lots
├── Edit parking lot information
├── Manage individual spots
├── Set pricing
├── Enable/disable parking lot
└── View utilization statistics

MANAGER CAN:
├── View all parking lots (read-only)
├── View occupancy status
├── View utilization analytics
└── Generate capacity reports
```

### Booking Model

```
USER CAN:
├── Create own booking
├── View own bookings
├── Modify own booking (extend)
├── Cancel own booking
└── View own booking history

ADMIN CAN:
├── View all bookings
├── Create booking for user
├── Modify any booking
├── Cancel any booking
├── Force checkout
└── Handle overdue bookings

MANAGER CAN:
├── View all bookings (read-only)
├── View booking statistics
├── View booking trends
└── Export booking data
```

### Payment/Transaction Model

```
USER CAN:
├── View own transactions
├── Download own invoice
├── View payment status
├── Submit payment dispute
└── Retry failed payment

ADMIN CAN:
├── View all transactions
├── View transaction details
├── Manual payment override
├── Issue refund
├── Resolve payment disputes
├── View failed transactions
└── Generate custom invoices

MANAGER CAN:
├── View all transactions (read-only)
├── View revenue reports
├── View revenue trends
├── Export financial data
└── View payment method breakdown
```

### Monthly Pass Model

```
USER CAN:
├── Register new monthly pass
├── View own monthly pass
├── View pass expiry date
├── Renew monthly pass
├── Cancel monthly pass
└── View pass usage history

ADMIN CAN:
├── View all monthly passes
├── Approve pass applications
├── Issue pass directly
├── Extend pass validity
├── Terminate pass
└── Generate pass reports

MANAGER CAN:
├── View all monthly passes (read-only)
├── View pass utilization
├── View pass revenue
├── View renewal statistics
└── Generate pass analytics
```

### Audit Log Model

```
USER CAN:
└── Cannot access audit logs

ADMIN CAN:
├── View complete audit logs
├── Search audit logs
├── View who did what and when
├── View access history
└── Export audit reports

MANAGER CAN:
├── View audit logs (read-only)
├── Generate audit reports
└── Export logs for compliance
```

---

## 🔐 Permission Enforcement Strategy

### Middleware Implementation

**All endpoints should enforce role-based checks:**

```
1. Authentication Middleware
   - Verify JWT token is valid
   - Extract user role from token
   - If no token → Reject (401 Unauthorized)

2. Authorization Middleware
   - Check if user role has permission for this endpoint
   - If unauthorized → Reject (403 Forbidden)

3. Data-Level Access Control
   - User can only view/modify own data (except Admin)
   - Admin can view/modify all data
   - Manager can only read (most data)
```

### Example Rules

```
GET /api/users/:id
├── If user_id == current_user.id → Allow (User can view self)
├── If current_role == ADMIN → Allow (Admin can view any)
├── If current_role == MANAGER → Allow (Manager can view any)
└── Otherwise → Deny (403 Forbidden)

PUT /api/users/:id
├── If user_id == current_user.id → Allow (User can edit self)
├── If current_role == ADMIN → Allow (Admin can edit any)
└── Otherwise → Deny (403 Forbidden)

GET /api/bookings
├── If current_role == USER → Return only own bookings
├── If current_role == ADMIN → Return all bookings
├── If current_role == MANAGER → Return all bookings (read-only)
```

---

## 📋 API Endpoint Protection Template

For each endpoint in your Express backend, apply this pattern:

```javascript
// Endpoint only accessible by Users for their own data
router.get(
  "/api/users/:id/profile",
  authMiddleware, // Verify token
  (req, res) => {
    const requestedId = req.params.id;
    const currentUserId = req.user.id;
    const currentRole = req.user.role;

    if (currentRole === "USER" && requestedId !== currentUserId) {
      return res.status(403).json({ error: "Forbidden" });
    }

    if (["ADMIN", "MANAGER"].includes(currentRole)) {
      // Allow access to any user's profile
    }

    // Proceed with logic
  },
);

// Endpoint only accessible by Admin
router.post(
  "/api/parking-lots",
  authMiddleware,
  adminOnly, // Custom middleware
  (req, res) => {
    // Create parking lot
  },
);

// Endpoint readable by Manager, modifiable by Admin
router.put(
  "/api/parking-lots/:id",
  authMiddleware,
  (req, res, next) => {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ error: "Only Admin can modify" });
    }
    next();
  },
  (req, res) => {
    // Update parking lot
  },
);
```

---

## 🛑 Denied Actions Summary

### Actions that trigger 403 Forbidden:

| Action                        | By User | By Manager | By Admin       |
| ----------------------------- | ------- | ---------- | -------------- |
| Create another user's profile | ❌      | ❌         | ✅             |
| Edit another user's profile   | ❌      | ❌         | ✅             |
| Lock/unlock user account      | ❌      | ❌         | ✅             |
| Create/edit parking lot       | ❌      | ❌         | ✅             |
| Approve monthly pass          | ❌      | ❌         | ✅             |
| Override payment              | ❌      | ❌         | ✅             |
| View other user's bookings    | ❌      | ❌         | ✅             |
| Make booking as Manager       | ❌      | ❌         | N/A            |
| Modify another user's booking | ❌      | ❌         | ✅             |
| Delete user account           | ❌      | ❌         | ❌ (Soft only) |
| Access admin dashboard        | ❌      | ❌         | ✅             |
| Modify audit logs             | ❌      | ❌         | ❌             |

---

## 🔑 Key Points to Remember

1. **User (Customer)**: Can only access their own data. No cross-user visibility.
2. **Admin**: Full system control. Can view and modify all data.
3. **Manager**: Read-only analytics and reporting. Cannot modify any data.

4. **Always enforce role checks** at both:
   - Endpoint level (middleware)
   - Database query level (only fetch data they can access)

5. **Log all sensitive actions** for audit trail.

6. **Use JWT tokens** to encode role information securely.

7. **Implement timeout sessions** for security (especially Admin).

---

## 📝 Example JWT Token Payload

```json
{
  "id": "user_123",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "USER",
  "iat": 1704067200,
  "exp": 1704153600
}
```

```json
{
  "id": "admin_456",
  "email": "admin@example.com",
  "name": "Admin Panel",
  "role": "ADMIN",
  "iat": 1704067200,
  "exp": 1704153600
}
```

```json
{
  "id": "manager_789",
  "email": "manager@example.com",
  "name": "Manager Analysis",
  "role": "MANAGER",
  "iat": 1704067200,
  "exp": 1704153600
}
```

---

## 🚀 Next Steps

1. Implement middleware for role checking in Express
2. Add role validation on every protected route
3. Test all permission combinations
4. Document API endpoints with required roles
5. Set up audit logging for sensitive actions

---

**Last Updated**: April 2026  
**System Version**: 1.0.0  
**Role System**: RBAC (Role-Based Access Control)
