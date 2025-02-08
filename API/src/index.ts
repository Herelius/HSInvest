import "dotenv/config";
import helmet from "helmet";
import cors from "cors";
import express, { Express } from "express";
import mongoose from "mongoose";

const port: number | string = process.env.PORT || 3000;
const db_uri: string | undefined = process.env.DB_URI;

if (!db_uri) {
  console.error("Please provide a valid MongoDB URI");
  process.exit(1);
}

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

mongoose
  .connect(db_uri)
  .then((): void => console.info("successfully connected to DB!"))
  .catch((error: any): never => {
    throw new Error(error);
  });

app.listen(port, (): void => {
  console.log(`listening on http://localhost:${process.env.PORT}`);
});
