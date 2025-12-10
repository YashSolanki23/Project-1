export class AppError extends Error {
  public statusCode:number;
  public type:string;

  constructor(type:string ,message:string,statusCode=500)
    {
      super(message);
      this.type=type;
      this.statusCode=statusCode;
    }
  
}