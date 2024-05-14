import express from "express";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/client.mjs";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

import uploadRoutes from "./routes/uploadRoutes.mjs";
import postRoutes from "./routes/postRoutes.mjs";
import mediaRoutes from "./routes/mediaRoutes.mjs";

app.use("/api/images", express.static(path.join(dirname(fileURLToPath(import.meta.url)), "uploads")));

app.use("/upload", uploadRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/media", mediaRoutes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
