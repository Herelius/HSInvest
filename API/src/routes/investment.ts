import { Request, Response } from "express";
import { Investment } from "../models/investment";
import { IInvestment } from "../models/interface/Investment";

export const getAllInvestments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const investments: IInvestment[] = await Investment.find().exec();
    res.status(200).send(investments);
  } catch (error) {
    res.send({ error: error });
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
    const filtredInvestments: IInvestment[] = await Investment.find(
      filter
    ).exec();
    res.status(200).send(filtredInvestments);
  } catch (error) {
    res.send({ error: error });
  }
};

export const getInvestmentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const investment: IInvestment | null = await Investment.findById(id).exec();
    res.status(200).send(investment);
  } catch (error) {
    res.send({ error: error });
  }
};
