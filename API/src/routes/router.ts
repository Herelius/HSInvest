import { Router, Request, Response } from "express";
import {
  getAllInvestments,
  getInvestmentByCityAndOrByProgressStatus,
  getInvestmentById,
  updateInvestment,
} from "./investment";

import { loginRoute, createUser } from "./auth";
import { cookieJwtAuth } from "../middleware/cookieJwtAuth";

export const router: Router = Router();

// login / sign up route
// @ts-ignore
router.post("/login", loginRoute);
router.post("/register", createUser);

// investment routes
router.get("/investments", cookieJwtAuth, getAllInvestments);
router.get("/investments/:id", cookieJwtAuth, getInvestmentById);
router.patch("/investments/:id/edit", cookieJwtAuth, updateInvestment);

router.get(
  "/investments/filter",
  cookieJwtAuth,
  getInvestmentByCityAndOrByProgressStatus
);
