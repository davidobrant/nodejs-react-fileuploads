import express from "express";
import { postController } from "../controllers/postController.mjs";
import { auth } from "../middleware/auth.mjs";

const router = express.Router();

router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.use(auth)
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export default router;
