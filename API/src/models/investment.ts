import mongoose, { Schema, model } from "mongoose";
import { IInvestment } from "./interface/Investment";

const InvestmentSchema = new Schema<IInvestment>({
  titreoperation: {
    type: String,
    required: false,
  },
  entreprise: {
    type: String,
    required: false,
  },
  annee_de_livraison: {
    type: Date,
    required: false,
  },
  ville: {
    type: String,
    required: false,
  },
  mandataire: {
    type: String,
    required: false,
  },
  ppi: {
    type: String,
    required: false,
  },
  lycee: {
    type: String,
    required: false,
  },
  notification_du_marche: {
    type: Date,
    required: false,
  },
  codeuai: {
    type: String,
    required: false,
  },
  longitude: {
    type: Number,
    required: false,
  },
  etat_d_avancement: {
    type: String,
    required: false,
  },
  montant_des_ap_votes_en_meu: {
    type: Number,
    required: false,
  },
  cao_attribution: {
    type: Date,
    required: false,
  },
  latitude: {
    type: Number,
    required: false,
  },
  maitrise_d_oeuvre: {
    type: String,
    required: false,
  },
  mode_de_devolution: {
    type: String,
    required: false,
  },
  annee_d_individualisation: {
    type: Date,
    required: false,
  },
  enveloppe_prev_en_meu: {
    type: Number,
    required: false,
  },
});

export const Investment = model("Investment", InvestmentSchema);
