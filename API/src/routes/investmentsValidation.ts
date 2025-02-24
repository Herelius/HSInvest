import Joi from "joi";
import JoiDate from "@joi/date";
import { IInvestment } from "../models/interface/Investment";

const JoiWithDate = Joi.extend(JoiDate);

export const investmentValidationSchema = Joi.object<IInvestment>({
  titreoperation: Joi.string(),
  entreprise: Joi.string(),
  annee_de_livraison: JoiWithDate.date(),
  ville: Joi.string(),
  mandataire: Joi.string(),
  ppi: Joi.string(),
  lycee: Joi.string(),
  notification_du_marche: Joi.string(),
  codeuai: Joi.string(),
  longitude: Joi.number(),
  etat_d_avancement: Joi.string(),
  montant_des_ap_votes_en_meu: Joi.number(),
  cao_attribution: Joi.string(),
  latitude: Joi.number(),
  maitrise_d_oeuvre: Joi.string(),
  mode_de_devolution: Joi.string(),
  annee_d_individualisation: Joi.date(),
  enveloppe_prev_en_meu: Joi.number(),
});
