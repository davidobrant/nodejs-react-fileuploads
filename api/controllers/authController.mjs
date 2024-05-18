import { ERROR } from "../utils/response-messages.js";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../config/env.js";
import { auth } from "../middleware/auth.mjs";

export const authController = {};

const cookieOptions = {
  httpOnly: true,
  maxAge: 60 * 60 * 1000,
  sameSite: "strict",
  secure: false,
};

authController.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: "Username and password is required..." });
    }

    const user = await db.getUserByUsername();

    if (!user) {
      res.status(404).json({ message: "User not found..." });
    }

    if (!compareSync(password, user.password)) {
      res.status(400).json({ message: "Invalid credentials..." });
    }

    const userData = {
      userId: user.id,
      username: user.username,
      admin: user.admin,
    };

    const token = jwt.sign(userData, ACCESS_TOKEN_SECRET);

    res
      .status(200)
      .cookie("amber", token, cookieOptions)
      .json({ login: "success", userData });
  } catch (err) {
    res.status(500).json(ERROR.server(err));
  }
};

authController.loginMock = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userData = {
      userId: 1,
      username,
      admin: true,
    };

    const token = jwt.sign(userData, ACCESS_TOKEN_SECRET);

    res
      .status(200)
      .cookie("amber", token, cookieOptions)
      .json({ login: "success", user: userData });
  } catch (err) {
    res.status(500).json(ERROR.server(err));
  }
};

authController.logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("amber", "logout", { maxAge: 1 })
      .json({ message: "Logged out..." });
  } catch (err) {
    res.status(500).json(ERROR.server(err));
  }
};

authController.getAuth = (req, res) => {
  const user = {};
  res.status(200).json(user);
};

authController.getProfile = (req, res) => {
  try {
    if (req.authenticated) {
      const user = {
        userId: req.userId,
        username: req.username,
        admin: req.admin,
      };
      return res.status(200).json(user);
    }
    res.status(200).json(null);
  } catch (err) {
    ERROR.serverError(res);
  }
};
