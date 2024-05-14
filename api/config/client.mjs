import pg from "pg";
import dotenv from "dotenv";
import { init } from "./init.js";

dotenv.config();

const { Client } = pg;

export const client = new Client({
  connectionString: process.env.PGURI,
});

export const connectDB = async () => {
  try {
    await client.connect();
    await init();
  } catch (error) {
    console.log("Error connecting to DB...");
  }
};
