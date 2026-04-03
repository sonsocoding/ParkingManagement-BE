import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const payload = { id: userId };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // Makes the cookie inaccessible to JavaScript (via document.cookie)
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax", //  Changed from strict to allow localhost ports bridging
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7d
  });

  return token;
};
