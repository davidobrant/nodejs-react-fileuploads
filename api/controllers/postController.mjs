import { upload } from "../config/multer.mjs";
import { db } from "../db/db.js";
import { PUBLIC_STATIC_URL } from "../config/env.js";
import { DIRNAME } from "../index.mjs";
import fs from "fs";
import path from "path";
import { ERROR } from "../utils/response-messages.js";

export const postController = {};

postController.getAllPosts = async (_, res) => {
  try {
    const posts = await db.getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(ERROR.server(err));
  }
};

postController.getPostById = async (req, res) => {
  try {
    const postId = Number(req.params.id);
    const post = await db.getPostById(postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(ERROR.server(err));
  }
};

postController.createPost = async (req, res) => {
  upload.single("image")(req, res, async (error) => {
    if (error) {
      res.status(400).json({ message: "Error uploading image...", error});
    }

    try {
      const userId = req.userId;
      const { title, content } = req.body;
      let imageUrl;
      let imageName;

      if (!title || !content) {
        res.status(400).json({ error: "Title and content are required" });
      }

      const file = req.file;
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
    } catch (err) {
      res.status(500).json(ERROR.server(err));
    }
  });
};

postController.updatePost = async (req, res) => {
  try {
    const postId = Number(req.params.id);
    const { title, content } = req.body;

    if (!title || !content) {
      res.status(400).json({ error: "Title and content are required" });
      return;
    }

    const updatedPost = await db.updatePost({
      id: postId,
      title,
      content,
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(ERROR.server(err));
  }
};

postController.deletePost = async (req, res) => {
  try {
    const postId = Number(req.params.id);
    const post = await db.getPostById(postId);

    if (!post) {
      res.status(404).json("Post not found...");
      return;
    }

    if (post.imageurl) {
      const imagePath = path.join(
        DIRNAME,
        "uploads",
        post.imageurl.replace(PUBLIC_STATIC_URL, "")
      );
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    const deletedPost = await db.deletePost(postId);
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(ERROR.server(err));
  }
};
