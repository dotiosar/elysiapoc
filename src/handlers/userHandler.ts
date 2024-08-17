// src/handlers/userHandler.ts

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

interface SignupRequest {
  full_name: string;
  email: string;
  password: string;
}

export const signupHandler = async (req: any) => {
  const { full_name, email, password }: SignupRequest = await req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        fullName: full_name,
        email,
        password: hashedPassword,
      },
    });
    return {
      status: 201,
      message: "User registered successfully",
      userId: user.id,
    };
  } catch (error) {
    console.error("Error inserting user:", error);
    return {
      status: 500,
      message: "An error occurred while registering the user",
    };
  }
};
