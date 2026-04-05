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
| **Lock/Unlock Users**           | ❌                | ✅    | ❌      |
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

## 👤 USER (Customer) - Detailed Permissions

### Authentication & Profile

- **Register Account**: ✅ Self-registration only
- **Login**: ✅ With JWT token
- **View Own Profile**: ✅ Personal information (name, email, phone, address)
- **Edit Own Profile**: ✅ Update personal details
- **Change Password**: ✅ Own password only
- **View Own Session History**: ✅ Login history and device info

### Vehicle Management

- **Register Vehicle**: ✅ Add own vehicles
- **View Own Vehicles**: ✅ See full list of registered vehicles
- **Edit Own Vehicle**: ✅ Update vehicle information (license plate, color, type)
- **Delete Own Vehicle**: ✅ Remove vehicle from profile
- **View Other Users' Vehicles**: ❌ Restricted

### Parking Lot & Search

- **Search Available Parking Lots**: ✅ Filter by location, type, price range
- **View Parking Lot Details**: ✅ Location, capacity, available spots, pricing
- **View Real-time Availability**: ✅ Updated via WebSocket
- **View Parking Lot Map**: ✅ See layout and spot locations
- **View Pricing**: ✅ Hourly rates, daily rates, monthly passes

### Booking & Reservation

- **Book Parking Spot**: ✅ Reserve spot for self (Queue system prevents conflicts)
- **View Own Bookings**: ✅ Only personal bookings
- **Modify Own Booking**: ✅ Extend duration (if allowed)
- **Cancel Own Booking**: ✅ Automatic refund processing
- **View Other Users' Bookings**: ❌ Restricted

### Payments & Transactions

- **View Own Transaction History**: ✅ All personal payments and receipts
- **View Invoice/Receipt**: ✅ Download own invoices
- **View Payment Status**: ✅ Pending, completed, failed
- **View All Transactions**: ❌ Only own transactions
- **Process Payment**: ✅ Via Momo, VNPay, or Bank
- **Dispute Payment**: ✅ Submit payment dispute for review

### Monthly Pass Management

- **Register Monthly Pass**: ✅ Apply for new pass
- **View Own Monthly Pass**: ✅ Status, expiry date, terms
- **Renew Monthly Pass**: ✅ Auto-renewal or manual extension
- **Cancel Monthly Pass**: ✅ With proper notice
- **View Pass History**: ✅ Past and current passes

### Notifications & Support

- **Receive Notifications**: ✅ Email/SMS alerts
  - Booking about to expire
  - Monthly pass expiring soon
  - Payment confirmation
  - System maintenance alerts
- **Submit Support Ticket**: ✅ Report issues or request help
- **View Support Ticket Status**: ✅ Own tickets only

### Data Access

- **Export Own Data**: ✅ Download personal records (transaction history, invoices)
- **Delete Account**: ✅ Request account deletion (soft delete)

---

## 🛡️ ADMIN - Detailed Permissions

### Authentication & Access

- **Login**: ✅ With JWT token + 2FA (recommended)
- **Manage Sessions**: ✅ View and revoke own sessions
- **Grant Access**: ✅ Create and manage other admin accounts
- **Access Control List**: ✅ Manage sub-admin permissions

### User Management (Full Control)

- **View All Users**: ✅ Complete user database with filters
- **Search Users**: ✅ By name, email, phone, account status
- **View User Profile**: ✅ All user information and history
- **Edit User Profile**: ✅ Update any user's information
- **Create User Account**: ✅ Manual account creation
- **Lock/Unlock Account**: ✅ Suspend or reactivate users
- **Reset User Password**: ✅ Assign temporary password
- **View User Login History**: ✅ Track access and devices
- **Delete User**: ❌ Not permitted (soft delete only with manager approval)

### Vehicle Management (Full Control)

- **View All Vehicles**: ✅ Complete vehicle database
- **Search Vehicles**: ✅ By license plate, owner, type
- **View Vehicle Details**: ✅ All information including history
- **Edit Vehicle Information**: ✅ Update any vehicle data
- **Link/Unlink Vehicle to User**: ✅ Manage vehicle-user relationships
- **Mark Vehicle as Blacklisted**: ✅ Flag problematic vehicles
- **View Vehicle Usage History**: ✅ Entry and exit logs

### Parking Lot Management (Full Control)

- **Create Parking Lot**: ✅ Add new parking facility
- **View All Parking Lots**: ✅ Complete inventory
- **Edit Parking Lot**: ✅ Update details, pricing, capacity
- **Manage Parking Spots**: ✅ Add, remove, or modify individual spots
- **Set Pricing**: ✅ Configure hourly/daily/monthly rates
- **Manage Spot Categories**: ✅ Create vehicle type restrictions (car, motorcycle, etc.)
- **Enable/Disable Parking Lot**: ✅ Close facility temporarily
- **View Parking Lot Statistics**: ✅ Utilization, revenue by lot
- **View Real-time Spot Status**: ✅ Live updates via WebSocket

### Booking & Reservation Management

- **View All Bookings**: ✅ Complete booking history
- **Search Bookings**: ✅ By user, spot, date range
- **View Booking Details**: ✅ Full booking information
- **Modify Booking**: ✅ Change spot, duration, or cancel
- **Force Checkout**: ✅ Manually end a booking
- **View Booking Conflicts**: ✅ Queue system logs
- **Handle Overdue Bookings**: ✅ Generate penalties

### Payment Management (Full Control)

- **View All Transactions**: ✅ Complete transaction history
- **View Payment Details**: ✅ Amount, date, method, status
- **Manual Payment Override**: ✅ Process/cancel payment manually
- **Refund Payment**: ✅ Full or partial refund
- **View Failed Transactions**: ✅ Resolve payment issues
- **Generate Invoices**: ✅ Create custom invoices
- **View Transaction Disputes**: ✅ Resolve customer disputes
- **Payment Reconciliation**: ✅ Match records with payment gateways

### Monthly Pass Management

- **View All Monthly Passes**: ✅ Complete pass inventory
- **Approve Pass Applications**: ✅ Accept or reject new pass requests
- **Issue Monthly Pass**: ✅ Create pass directly
- **Renew/Extend Pass**: ✅ Extend expiry date
- **Terminate Pass**: ✅ Cancel pass early
- **View Pass History**: ✅ All passes and modifications
- **Generate Pass Reports**: ✅ Utilization and revenue by pass

### Error & Exception Handling

- **Correct Data Errors**: ✅ Fix incorrect bookings, pricing, or vehicle info
- **Resolve Double Bookings**: ✅ Handle queue conflicts
- **Manage Refunds**: ✅ Manual refund processing
- **Handle Complaints**: ✅ Review and resolve customer issues
- **Data Cleanup**: ✅ Merge duplicate records, fix inconsistencies

### Vehicle Entry/Exit Logging

- **Record Vehicle Entry**: ✅ Check-in without pre-booking
- **Record Vehicle Exit**: ✅ Check-out and generate payment
- **View Entry/Exit History**: ✅ Complete log for all vehicles
- **Search by License Plate**: ✅ Find vehicle location and history
- **Generate Occupancy Reports**: ✅ Vehicle count over time

### Audit & Compliance

- **View Audit Logs**: ✅ All admin actions with timestamps
- **View Access Logs**: ✅ Who accessed what and when
- **Generate Audit Reports**: ✅ Compliance and accountability reports
- **Export Logs**: ✅ For external audits

### System Configuration

- **Access Admin Dashboard**: ✅ Full system control
- **View System Status**: ✅ Server health, API status
- **Configure Settings**: ✅ System parameters and features
- **Manage Roles & Permissions**: ✅ If super-admin
- **View System Logs**: ✅ Error and debug logs

---

## 📊 MANAGER - Detailed Permissions

### Authentication & Access

- **Login**: ✅ With JWT token
- **View Own Profile**: ✅ Personal information
- **Edit Own Profile**: ✅ Update personal details
- **Change Password**: ✅ Own password only

### User & Vehicle Viewing (Read-Only)

- **View All Users**: ✅ Full user list with basic info
- **Search Users**: ✅ Filter and search capabilities
- **View User Details**: ✅ See basic profile information
- **Edit User Profile**: ❌ Not permitted
- **View All Vehicles**: ✅ Complete vehicle inventory
- **Search Vehicles**: ✅ By license plate, owner, type

### Parking Lot Information (Read-Only)

- **View All Parking Lots**: ✅ Complete facility list
- **View Parking Lot Details**: ✅ Capacity, pricing, location
- **View Real-time Availability**: ✅ Current spot status
- **View Occupancy Status**: ✅ Updated via WebSocket
- **Create/Edit Parking Lot**: ❌ Not permitted

### Booking & Reservation Analytics

- **View All Bookings**: ✅ Complete booking history
- **View Booking Statistics**: ✅ Bookings per lot, peak hours
- **View Booking Trends**: ✅ Daily, weekly, monthly patterns
- **Export Booking Data**: ✅ For analysis and reports
- **Make Bookings**: ❌ Only admins and users can book

### Financial Reporting & Analytics

- **View All Transactions**: ✅ Complete financial data
- **View Revenue Reports**: ✅ By date, parking lot, vehicle type
- **View Revenue Trends**: ✅ Daily, monthly, yearly comparison
- **Export Financial Data**: ✅ For accounting and audits
- **View Revenue by Parking Lot**: ✅ Which lot generates most revenue
- **View Revenue by Vehicle Type**: ✅ Car vs motorcycle revenue
- **View Monthly Pass Revenue**: ✅ Separate pass income tracking

### Analytics & Insights

- **View Occupancy Analytics**: ✅ Spot utilization rate (percentage)
- **View Peak Hours**: ✅ Identify busy times
- **View Vehicle Density**: ✅ Vehicles per lot by time slot
- **View Traffic Pattern**: ✅ Entry and exit trends
- **Generate Capacity Alerts**: ✅ Warning levels (80%, 90%, 100% capacity)
- **View Historical Data**: ✅ Compare different time periods

### Monthly Pass Analytics

- **View All Monthly Passes**: ✅ Complete pass data
- **View Pass Utilization**: ✅ How many passes active
- **View Pass Revenue**: ✅ Income from passes
- **View Pass Renewal Rate**: ✅ Percentage of renewals
- **View Pass Holder Statistics**: ✅ Demographics and distribution

### Audit & Compliance (Limited)

- **View Audit Logs**: ✅ Read-only access
- **View Access Logs**: ✅ User activity logging
- **Generate Reports**: ✅ For management review
- **Export Data**: ✅ For external reporting

### System Access

- **Access Manager Dashboard**: ✅ Analytics and reporting interface
- **View Dashboard Widgets**: ✅ Revenue, occupancy, usage metrics
- **Create Custom Reports**: ✅ Based on available data
- **Schedule Report Delivery**: ✅ Automated report generation
- **View System Status**: ✅ Operational metrics

### Restricted Actions

- **Cannot Create/Edit Records**: ❌ No data modification
- **Cannot Process Payments**: ❌ View only
- **Cannot Manage Users**: ❌ View only
- **Cannot Make Bookings**: ❌ Not permitted
- **Cannot Access Admin Tools**: ❌ Restricted

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
