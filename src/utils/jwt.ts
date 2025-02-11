import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.DAFFA_SECRET_ZOO as string;

export const generateToken = (userId: number) => {
  return jwt.sign(
    { userId }, 
    SECRET_KEY, 
    { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET_KEY);
};