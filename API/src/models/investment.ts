import { Schema, model } from "mongoose";
import { IInvestment } from "./interface/Investment";

const InvestmentSchema = new Schema<IInvestment>({
  titreoperation: {
    type: String,
    required: true,
  },
  entreprise: {
    type: String,
    required: true,
  },
  annee_de_livraison: {
    type: Date,
    required: true,
  },
  ville: {
    type: String,
    required: true,
  },
  mandataire: {
    type: String,
    required: true,
  },
  ppi: {
    type: String,
    required: true,
  },
  lycee: {
    type: String,
    required: true,
  },
  notification_du_marche: {
    type: Date,
    required: true,
  },
  codeuai: {
    type: String,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  etat_d_avancement: {
    type: String,
    required: true,
  },
  montant_des_ap_votes_en_meu: {
    type: Number,
    required: true,
  },
  cao_attribution: {
    type: Date,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  maitrise_d_oeuvre: {
    type: String,
    required: true,
  },
  mode_de_devolution: {
    type: String,
    required: true,
  },
  annee_d_individualisation: {
    type: Date,
    required: true,
  },
  enveloppe_prev_en_meu: {
    type: Number,
    required: true,
  },
});

export const Investment = model("Investment", InvestmentSchema);
