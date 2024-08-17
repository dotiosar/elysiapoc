import { Elysia } from "elysia";
import { connectToDatabase } from "./utils/db"; // Import the database utility
import { userRoutes } from "./routes/userRoutes"; // Import the user routes
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const app = new Elysia();

// Connect to PostgreSQL when the server starts
connectToDatabase();

// Register the user routes
userRoutes(app);

app.get("/", () => "Hello Elysia");

app.listen(3000, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
