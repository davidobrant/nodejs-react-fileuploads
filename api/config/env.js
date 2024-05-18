import dotenv from "dotenv";
dotenv.config();

export const BASE_URL = process.env.BASE_URL;
export const PUBLIC_STATIC_URL = process.env.PUBLIC_STATIC_URL;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
