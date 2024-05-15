import { client } from "../config/client.mjs";

export const db = {};

db.getAllPosts = async () => {
  const result = await client.query("SELECT * FROM posts");
  return result.rows;
};

db.getPostById = async (postId) => {
  const result = await client.query("SELECT * FROM posts WHERE id = $1;", [postId]);
  return result.rows[0];
};

db.createPost = async ({ title, content, imageUrl, imageName, userId }) => {
  const result = await client.query(
    "INSERT INTO posts (title, content, imageUrl, imageName, userId) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
    [title, content, imageUrl, imageName, userId]
  );
  return result.rows[0];
};

db.updatePost = async ({ id, title, content, imageUrl, imageName, userId }) => {
  const result = await client.query(
    "UPDATE posts SET title = $2, content = $3, imageUrl = $4, imageName = $5, userId = $6 WHERE id = $1 RETURNING *;",
    [id, title, content, imageUrl, imageName, userId]
  );
  return result.rows[0];
};

db.deletePost = async (postId) => {
  const result = await client.query("DELETE FROM posts WHERE id = $1 RETURNING *;", [postId]);
  return result.rows[0];
};
