import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file manually from the backend folder
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Debugging output
console.log("🔹 ENV Variables Loaded:", process.env);
console.log("🔹 MONGODB_URL:", process.env.MONGODB_URL, "| Type:", typeof process.env.MONGODB_URL);

if (!process.env.MONGODB_URL) {
  console.error("❌ Error: MONGODB_URL is undefined. Check your .env file.");
  process.exit(1); // Stop execution if the database URL is not found
}

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ DB Connected"))
  .catch((e) => console.error("❌ MongoDB Connection Error:", e));
