import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/env.js";

export const auth = async (req, res, next) => {
  try {
    const token = req.cookies.amber;

    if (!token) {
      return next();
    }

    const encodedData = jwt.verify(token, ACCESS_TOKEN_SECRET);

    if (!encodedData) {
      return next();
    }

    req.authenticated = true;
    req.userId = encodedData.userId;
    req.username = encodedData.username;
    req.admin = encodedData.admin;

    next();
  } catch (err) {
    next(err);
  }
};
