import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { formatSuccess, formatError } from "../utils/formatResponse.js";

const register = asyncHandler(async (req, res) => {
  const { fullName, email, password, phone } = req.body;

  const userExist = await prisma.user.findUnique({
    where: { email },
  });

  if (userExist) {
    return res.status(409).json(formatError("This email already exists"));
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
      phone,
    },
  });

  const token = generateToken(user.id, res);

  res.status(201).json(formatSuccess({
    user: {
      id: user.id,
      fullName,
      email,
      phone,
      role: user.role,
    },
    token
  }));
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(400).json(formatError("Email or password incorrect"));
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json(formatError("Email or password incorrect"));
  }

  const token = generateToken(user.id, res);

  res.status(200).json(formatSuccess({
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
    token
  }));
});

const logout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json(formatSuccess(null, "Logged out successfully"));
});

const getMe = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    select: { id: true, fullName: true, email: true, phone: true, role: true },
  });

  if (!user) {
    return res.status(404).json(formatError("User not found"));
  }

  res.status(200).json(formatSuccess({ user }));
});

export { register, login, logout, getMe };
