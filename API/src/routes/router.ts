import { Router, Request, Response } from "express";
import {
  getAllInvestments,
  getInvestmentByCityAndOrByProgressStatus,
  getInvestmentById,
} from "./investment";

export const router: Router = Router();

router.get("/investments", getAllInvestments);
router.get("/investments/id/:id", getInvestmentById);
router.get("/investments/filter", getInvestmentByCityAndOrByProgressStatus);
