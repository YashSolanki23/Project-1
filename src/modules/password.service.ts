import bcrypt from "bcrypt"

const salt=12;

export async function hashPassword(password:string){
  return await bcrypt.hash(password,salt);
}

export async function verifyPassword(password:string,hash:string){
  return await bcrypt.compare(password,hash);
}
