import { Request,Response,NextFunction } from "express";
import { getAllUsers,updateUserById,deleteUserById } from "./auth.repo";


export async function getUsersController(
   req:Request,
  res:Response,
  next:NextFunction
){
try{
const users=await getAllUsers()
 res.json(users)
}catch(err)
{
  next(err);
}
}


export async function updateUserController(
  req:Request,
  res:Response,
  next:NextFunction
){
  try {
    const userId=req.params.id;
    const result=await updateUserById(userId,req.body);

    res.json({
      message:"User updated",
      user:result,
    })

  } catch (err) {
    next(err);
  }
}

export async function deleteUserController(
   req:Request,
  res:Response,
  next:NextFunction
){
  try{
    await deleteUserById(req.params.id);
    res.json({
      message:"user deleted"
    })
  }catch(err)
  {
    next(err)
  }
}

