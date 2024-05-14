import express from 'express'
import uploadController from '../controllers/uploadController.mjs'

const router = express.Router();

router.post("/", uploadController.uploadFile)
router.get("/", uploadController.downloadFile)

export default router