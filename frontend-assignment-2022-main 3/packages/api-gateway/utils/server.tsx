import express, { Application } from "express";
import restaurants from "../routes/restaurant";
const cors = require("cors");

const createServer = () => {
  const app: Application = express();
  const port = 3001;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/", (req, res) => res.send("LINE MAN Wongnai Frontend Assignment"));
  app.use("/restaurants", restaurants);

  return app;
};

export default createServer;