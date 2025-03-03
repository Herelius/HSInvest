import "dotenv/config";
import { readFileSync } from "fs";
import mongoose from "mongoose";
import { Investment } from "./models/investment";
import { IInvestment } from "./models/interface/Investment";

const db_uri: string | undefined = process.env.DB_URI;

if (!db_uri) {
  console.error("Please provide a valid MongoDB URI");
  process.exit(1);
}

const data: IInvestment[] = JSON.parse(
  readFileSync("data/dataset.json", "utf-8")
);

const importJsonData = async (data: IInvestment[]): Promise<void> => {
  try {
    mongoose.connect(db_uri);
    const investmentData: IInvestment[] | undefined = await Investment.find();
    if (investmentData && investmentData.length) {
      console.log("Data already exists - Cleaning and repopulating ...");
      await Investment.deleteMany();
    }
    await Investment.create(data);
    console.log("Data imported successfully");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
};

importJsonData(data);
