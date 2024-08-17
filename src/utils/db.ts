import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL successfully!");
  } catch (error) {
    console.error("Failed to connect to PostgreSQL:", error);
    throw error;
  }
}

export default client;
