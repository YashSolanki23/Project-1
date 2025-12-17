import { Request,Response,NextFunction } from "express";
import * as AuthService from "./auth.service";
import { deleteUserById, getAllUsers, updateUserById } from "./auth.repo";

export async function registerController(
req:Request,
res:Response,
next:NextFunction
){
try {
console.log("register controller hit",req.body)
  const result=await AuthService.register(req.body);
  console.log("body",req.body)
  res.status(201).json(result);
} catch (err) {
  next(err);
}
}

export async function loginController(
req:Request,
res:Response,
next:NextFunction
){
try {
  const result=await AuthService.login(req.body);
  res.json(result)
  console.log("Logged In",result);
} catch (err) {
  next(err)
}
}

export async function refreshController(
  req:Request,
res:Response,
next:NextFunction
){
try {
  const { refreshToken }=req.body;
  const result=await AuthService.refresh(refreshToken)
  res.json(result)
  console.log("refresh token",result)
} catch (err) {
  next(err)
}
}

