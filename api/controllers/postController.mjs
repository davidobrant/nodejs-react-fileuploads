import { upload } from "../config/multer.mjs";
import { db } from "../db/db.js";
import { PUBLIC_STATIC_URL } from "../config/env.js";

export const postController = {};

postController.getAllPosts = async (_, res) => {
  const posts = await db.getAllPosts();
  res.status(200).json(posts);
};

postController.getPostById = async (req, res) => {
  const postId = Number(req.params.id);
  const post = await db.getPostById(postId);
  res.status(200).json(post);
};

postController.createPost = async (req, res) => {
  upload.single("image")(req, res, async (_) => {
    const { title, content } = req.body;
    const userId = req.userId;
    if (!title || !content) {
      res.status(400).json("Need all required fields...");
    }
    const file = req.file;
    let imageUrl;
    let imageName;
    if (file) {
      const { mimetype, filename, originalname } = file;
      if (mimetype.toString().startsWith("image/")) {
        imageUrl = PUBLIC_STATIC_URL + filename;
        imageName = originalname;
      }
    }
    const post = await db.createPost({
      title,
      content,
      imageUrl,
      imageName,
      userId,
    });

    res.status(201).json(post);
  });
};

postController.updatePost = async (req, res) => {
  res.status(201).json("Update post");
};

postController.deletePost = async (req, res) => {
  const postId = Number(req.params.id);
  const post = await db.deletePost(postId);
  res.status(200).json(post);
};