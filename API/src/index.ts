import "dotenv/config";
import helmet from "helmet";
import cors from "cors";
import express, { Express } from "express";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.listen(process.env.PORT, (): void => {
  console.log(`listening on http://localhost:${process.env.PORT}`);
});
