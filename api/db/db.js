import { client } from "../config/client.mjs";

export const db = {};

db.createPost = async ({ title, content, imageUrl, imageName, userId }) => {
  return (
    await client.query(
      "INSERT INTO posts (title, content, imageUrl, imageName, userId) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [title, content, imageUrl, imageName, userId]
    )
  ).rows[0];
};

db.getPostById = async (postId) => {
  return (await client.query("SELECT * FROM posts WHERE id = $1;", [postId]))
    .rows[0];
};

db.getAllPosts = async () => {
  return (await client.query("SELECT * FROM posts")).rows;
};

db.deletePost = async (postId) => {
  return (await client.query("DELETE FROM posts WHERE id = $1;", [postId]))
    .rows[0];
}