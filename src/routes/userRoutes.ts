// src/routes/userRoutes.ts

import { Elysia } from "elysia";
import { signupHandler } from "../handlers/userHandler";

export const userRoutes = (app: Elysia) => {
  app.post("/signup", signupHandler);
};
