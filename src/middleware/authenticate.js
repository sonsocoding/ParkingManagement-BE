import { prisma } from "../config/db.js";
import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token;

  // header for test and localStorage, cookie for production and security
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  } else if (req.cookies?.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(401).json({ message: "Unauthorized, token not found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, role: true }, // exclude password for security
    });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized, user not found" });
    }

    req.user = user; // only backend can see this
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized, token failed" });
  }
};
