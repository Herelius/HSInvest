import "dotenv/config";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import express, { Express } from "express";

import { router } from "./routes/router";

const port: number | string = process.env.PORT || 3000;
const db_uri: string | undefined = process.env.DB_URI;

if (!db_uri) {
  console.error("Please provide a valid MongoDB URI");
  process.exit(1);
}

mongoose
  .connect(db_uri)
  .then((): void => console.info("successfully connected to DB!"))
  .catch((error: any): never => {
    throw new Error(error);
  });

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api", router);

app.listen(port, (): void => {
  console.log(`listening on http://localhost:${process.env.PORT}`);
});
