import { Request, Response } from "express";

import { Investment } from "../models/investment";
import { IInvestment } from "../models/interface/Investment";
import { investmentValidationSchema } from "./investmentsValidation";

export const getAllInvestments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const investments: IInvestment[] = await Investment.find().exec();

    res.status(200).send({ data: investments });
  } catch (error) {
    res.status(404).send({ error: error });
  }
};

export const getInvestmentByCityAndOrByProgressStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      ville,
      etat_d_avancement,
    }: { ville?: string; etat_d_avancement?: string } = req.query;
    const filter: { ville?: any; etat_d_avancement?: any } = {};
    if (ville) {
      filter.ville = new RegExp(ville, "i");
    }
    if (etat_d_avancement) {
      filter.etat_d_avancement = RegExp(etat_d_avancement, "i");
    }
    const filtredInvestments: IInvestment[] =
      await Investment.find(filter).exec();
    res.status(200).send(filtredInvestments);
  } catch (error) {
    res.status(404).send({ error: error });
  }
};

export const getInvestmentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const investment: IInvestment | null = await Investment.findById(id).exec();
    res.status(200).send({ data: investment });
  } catch (error) {
    res.status(404).send({ error: error });
  }
};

export const updateInvestment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const investment: IInvestment | null = await Investment.findById(id).exec();

    if (!investment) throw new Error("Investment not found");

    const validationValue = await investmentValidationSchema.validateAsync(
      req.body
    );

    await Investment.updateOne({ _id: id }, validationValue);

    res.status(200).send({ message: "Data updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

export const createInvestment = async (req: Request, res: Response) => {
  try {
    const validationValue = await investmentValidationSchema.validateAsync(
      req.body
    );

    const investment = new Investment(validationValue);

    await investment.save();

    res.status(201).send({ message: "Investment created" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
};
