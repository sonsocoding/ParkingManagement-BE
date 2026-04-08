# Code Improvement Recommendations

> Senior review of the current backend codebase. **No new features** — only improvements to existing code quality, security, consistency, and maintainability.

**Reviewed**: April 2026  
**Scope**: All files under `src/`, `prisma/`, and root config

---

## 🔴 Critical — Must Fix

### 1. Missing `try/catch` in `authController.js`

**Files**: `src/controllers/authController.js`

`register`, `login`, `logout`, and `getMe` have **zero error handling**. Any Prisma error, bcrypt failure, or JWT issue will crash the process with an unhandled promise rejection.

```
register()  → no try/catch
login()     → no try/catch
logout()    → no try/catch
getMe()     → no try/catch
```

**Fix**: Wrap every controller function body in `try/catch` with proper status codes. Consider creating an `asyncHandler` utility to DRY this up across all controllers.

---

### 2. `createUser` Stores Plaintext Passwords

**File**: `src/controllers/userController.js` — Line 63-83

`createUser` takes `password` from `req.body` and saves it **directly** to the database without hashing. This is a critical security vulnerability.

```js
// CURRENT — password is stored as plaintext
const user = await prisma.user.create({
  data: { fullName, email, phone, password, role },
});
```

**Fix**: Hash the password with `bcrypt` before saving, exactly as `register()` does.

---

### 3. `login` Returns Stale Data Instead of DB Data

**File**: `src/controllers/authController.js` — Line 44-75

The `login` response uses destructured `req.body` values (`fullName`, `phone`) instead of the actual `user` object fetched from the database. If the user updated their name, the login response returns whatever the client sent — not what's in the DB.

```js
// CURRENT — fullName and phone come from req.body, not from the DB user
const { fullName, email, password, phone } = req.body;
// ...
res.status(200).json({ data: { user: { id: user.id, fullName, email, phone } } });
```

**Fix**: Return `user.fullName`, `user.email`, `user.phone` from the queried user object.

---

### 4. `getMe` Does Not Return `role`

**File**: `src/controllers/authController.js` — Line 89-105

The `select` clause excludes `role`. The frontend likely needs the role for UI rendering (e.g., showing admin dashboards). This makes the endpoint incomplete for its purpose.

**Fix**: Add `role: true` to the `select` clause.

---

## 🟡 Important — Should Fix

### 5. Wrong HTTP Status Codes Everywhere

**Files**: All controllers

| Situation | Current Status | Correct Status |
|---|---|---|
| Email already exists (`register`) | `401` | `409 Conflict` |
| Prisma create/update errors (`userController`, `vehicleController`) | `404` | `500 Internal Server Error` |
| Delete own account response body | `204` with JSON body | `204` must have **no body** |
| Successful delete (`deleteOwnVehicle`, `deleteVehicleById`) | `200` | `204 No Content` or `200` is fine, but be consistent |

**Fix**: Audit every `res.status()` call. Use `409` for conflicts, `400` for bad input, `500` for server errors, and never send a body with `204`.

---

### 6. `getOwnProfile` Leaks Password Hash

**File**: `src/controllers/userController.js` — Line 3-17

`getOwnProfile` calls `findUnique` without a `select` clause — this returns **all fields**, including the `password` hash.

```js
// CURRENT — returns everything, including password
const user = await prisma.user.findUnique({ where: { id: userId } });
return res.status(200).json({ data: { user } });
```

**Fix**: Add `select` to exclude `password`, or use `omit: { password: true }`.

---

### 7. `getAllUsers` Leaks Password Hashes for All Users

**File**: `src/controllers/userController.js` — Line 85-95

Same issue as above but worse — returns passwords for **every user in the system** to Admin/Manager.

**Fix**: Add `select` to exclude `password`.

---

### 8. Route Conflict in `vehicleRoutes.js`

**File**: `src/routes/vehicleRoutes.js`

```js
router.post("/", createVehicle);       // ANY authenticated user → POST /api/vehicles
router.get("/me", getOwnVehicle);      // ANY authenticated user → GET /api/vehicles/me
router.put("/:id", updateOwnVehicle);  // ANY authenticated user → PUT /api/vehicles/:id
router.delete("/:id", deleteOwnVehicle); // ANY authenticated user → DELETE /api/vehicles/:id
// ...
router.get("/", authorize("ADMIN", "MANAGER"), getAllVehicles);  // GET /api/vehicles
```

`GET /api/vehicles` is registered twice — first by `POST "/"` line (no conflict since different method), but the `GET "/"` for `getAllVehicles` is registered **after** `GET "/me"`. Since Express matches routes top-to-bottom and `router.use(authenticate)` is applied globally, a regular user hitting `GET /api/vehicles` will reach `getAllVehicles` but be blocked by `authorize`. However, the route ordering is fragile.

**Fix**: Place admin/manager routes **before** user-specific `/:id` routes to avoid `"me"` being interpreted as an `:id` parameter. Better yet, use a `/admin/vehicles` prefix or group routes with `Router` sub-routers.

---

### 9. No Input Validation

**Files**: All controllers

Zero validation on any endpoint. Examples of what will crash or cause bad data:

- `register` with empty `email` → Prisma unique constraint error (unhandled)
- `register` with no `password` → `bcrypt.hash(undefined, salt)` throws
- `createVehicle` with invalid `vehicleType` → Prisma enum error (unhandled)
- `updateOwnProfile` with someone else's `email` → Prisma unique constraint error (unhandled)

**Fix**: Add validation middleware (e.g., `express-validator` or `zod`) to validate request bodies before they reach controllers.

---

### 10. Duplicate `dotenv.config()` Calls

**Files**: `src/app.js` (Line 11), `src/server.js` (Line 4)

`dotenv.config()` is called in both files. It should only be called once, as early as possible — in `server.js` before importing `app.js`.

**Fix**: Remove `dotenv.config()` from `app.js`. Keep it only in `server.js` and move it **before** the `import app` statement (note: with ES modules, top-level imports execute before module-level code, so you may need to use `--require dotenv/config` in your start script, or restructure).

---

### 11. `connectDB` Is Never Called

**File**: `src/config/db.js`

The `connectDB` function exists but is never imported or called anywhere. `server.js` does not call it. Prisma lazily connects on first query, so it technically works, but:
- You lose the startup health check
- If the DB is down, the first user request fails instead of the app failing to start

**Fix**: Call `connectDB()` in `server.js` before `app.listen()`, or remove the dead code.

---

## 🔵 Minor — Nice to Have

### 12. Inconsistent Response Format

**Files**: All controllers

Responses mix multiple formats:

```js
// authController — includes status field
{ status: "success", data: { user }, token }

// userController — no status field
{ data: { user } }

// error responses — different shapes
{ message: "..." }
{ message: `Error ... with error: ${err}` }
```

**Fix**: Standardize all responses to one format:
```js
// Success
{ status: "success", data: { ... } }

// Error  
{ status: "error", message: "..." }
```

Create a `formatResponse` utility in `src/utils/`.

---

### 13. Error Messages Leak Internal Details

**Files**: `src/controllers/userController.js`, `src/controllers/vehicleController.js`

```js
return res.status(404).json({ message: `Error creating user with error: ${err}` });
```

Exposes full Prisma error stack to the client. This is a security and UX issue.

**Fix**: Log the full error server-side, return a generic message to the client:
```js
console.error("createUser error:", err);
return res.status(500).json({ message: "Failed to create user" });
```

---

### 14. No Global Error Handler

**File**: `src/app.js`

No global error-handling middleware. If any middleware or route throws, Express returns an ugly HTML error page or crashes.

**Fix**: Add a catch-all error handler at the bottom of `app.js`:
```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: "error", message: "Internal server error" });
});
```

---

### 15. `createUser` Uses `PUT` Instead of `POST`

**File**: `src/routes/userRoutes.js` — Line 27

```js
router.put("/create", authorize("ADMIN"), createUser);
```

Creating a resource should use `POST`, not `PUT`. `PUT` is for full replacement of an existing resource.

**Fix**: Change to `router.post("/", authorize("ADMIN"), createUser);`

---

### 16. `.gitignore` Is Incomplete

**File**: `.gitignore`

Current:
```
.env
node_modules
/generated/prisma
```

Missing entries for common artifacts.

**Fix**:
```
.env
node_modules/
src/generated/
.DS_Store
*.log
```

Note: `src/generated/` should be ignored since it's auto-generated by `npx prisma generate`.

---

### 17. `deleteOwnVehicle` Returns Deleted Object with `200`

**File**: `src/controllers/vehicleController.js` — Line 76-103

It returns the deleted vehicle data. While not wrong, it's inconsistent with `deleteOwnProfile` (which returns `204` with no data). Pick one pattern and stick with it.

**Fix**: Either always return `204 No Content`, or always return `200` with the deleted resource. Be consistent across all delete endpoints.

---

### 18. `seed.js` Uses `PrismaClient` from Wrong Location

**File**: `prisma/seed.js` — Line 1

```js
import { PrismaClient } from "@prisma/client";
```

But `db.js` imports from `../generated/client.js` (custom output path). The seed file should import from the same location for consistency, or both should use `@prisma/client`.

**Fix**: Align import paths. Either both use `@prisma/client` or both use the custom generated path.

---

## 📋 Priority Summary

| Priority | Count | Items |
|---|---|---|
| 🔴 Critical | 4 | #1 Missing try/catch, #2 Plaintext passwords, #3 Stale login data, #4 Missing role in getMe |
| 🟡 Important | 7 | #5 Wrong status codes, #6-7 Password leaks, #8 Route conflicts, #9 No validation, #10 Duplicate dotenv, #11 Dead connectDB |
| 🔵 Minor | 7 | #12-18 Consistency, error handling, REST conventions |

---

**Start with the 🔴 Critical items. They are security vulnerabilities or data integrity bugs.**
