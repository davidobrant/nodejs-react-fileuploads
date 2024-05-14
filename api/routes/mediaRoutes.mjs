import express from 'express'
import mediaController from '../controllers/mediaController.mjs'
import { upload } from '../config/multer.mjs'

const router = express.Router()

router.get("/:imageUrl", mediaController.getImage)
router.post("/", upload.single("image"), mediaController.postImage)

export default router