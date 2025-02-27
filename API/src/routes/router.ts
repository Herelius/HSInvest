import { Router, Request, Response } from "express";
import {
  getAllInvestments,
  getInvestmentByCityAndOrByProgressStatus,
  getInvestmentById,
  updateInvestment,
  createInvestment,
  deleteInvestment,
} from "./investment";

import { loginRoute, createUser, check } from "./auth";
import { cookieJwtAuth } from "../middleware/cookieJwtAuth";

export const router: Router = Router();

// login / sign up route
// @ts-ignore
router.post("/login", loginRoute);
router.post("/register", createUser);
router.get("/check", check);

// investment routes
router.post("/investments", cookieJwtAuth, getAllInvestments);
router.get("/investments/:id", cookieJwtAuth, getInvestmentById);
router.patch("/investments/:id/edit", cookieJwtAuth, updateInvestment);
router.post("/investments/new", cookieJwtAuth, createInvestment);
router.delete("/investments/:id", cookieJwtAuth, deleteInvestment);

router.get(
  "/investments/filter",
  cookieJwtAuth,
  getInvestmentByCityAndOrByProgressStatus
);
