import { Elysia } from "elysia";
import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const app = new Elysia();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL successfully!");
  } catch (error) {
    console.error("Failed to connect to PostgreSQL:", error);
  }
}

app.get("/", () => "Hello Elysia");

app.listen(3000, async () => {
  await connectToDatabase(); // Connect to PostgreSQL on server start
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
