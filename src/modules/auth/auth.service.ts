import { hashPassword,verifyPassword } from "../password.service"
import { findUserByEmail,createUser } from "./auth.repo"
import { AppError } from "../../core/errors/Apperror"
import { generateAccessToken,generateRefreshToken,verifyRefreshToken } from "../token.service"
import { RegisterInput,LoginInput } from "./auth.types"



export async function register(input:RegisterInput)
{
  const existing=await findUserByEmail(input.email);

  if(existing)
  {
    throw new AppError("Email exists","Email already registered",400)
  }
  const hashedpassword=await hashPassword(input.password);


  const user=await createUser({
    email:input.email,
    passwordHash:hashedpassword.tostring()
  });
}