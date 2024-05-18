import express from 'express'
const router = express.Router();
import { authController } from '../controllers/authController.mjs';
import { auth } from '../middleware/auth.mjs';

router.get("/", authController.getAuth)
router.get("/profile", auth, authController.getProfile)
router.post("/logout", authController.logout)
router.post("/login", authController.login)
router.post("/login/mock", authController.loginMock)

export default router