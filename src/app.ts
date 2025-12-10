import express from "express";
import cors from "cors";
import errorHandler = require("./core/errors/errorHandler");

export function createApp() {
  const app = express();
  app.use(cors());

  app.get("/api/health", (req, res) => {
    res.json({ health: "ok" });
  });
app.use(errorHandler.errorHandler)
  return app;
}
