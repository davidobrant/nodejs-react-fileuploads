import express from "express";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/client.mjs";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

const allowedOrigins = ["http://localhost:5173"];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import uploadRoutes from "./routes/uploadRoutes.mjs";
import postRoutes from "./routes/postRoutes.mjs";
import mediaRoutes from "./routes/mediaRoutes.mjs";
import authRoutes from "./routes/authRoutes.mjs";

export const DIRNAME = dirname(fileURLToPath(import.meta.url));

app.use("/api/images", express.static(path.join(DIRNAME, "uploads")));

app.use("/upload", uploadRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/media", mediaRoutes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
