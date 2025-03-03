import { JSX } from "react";
import dayjs from "dayjs";

import { Edit, useForm } from "@refinedev/antd";

import { Form, Input, DatePicker, InputNumber } from "antd";

export const EditInvestment = (): JSX.Element => {
  const { formProps, saveButtonProps } = useForm({
    redirect: "show",
  });

  return (
    <Edit saveButtonProps={saveButtonProps} canDelete={true}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Titre Operation" name="titreoperation">
          <Input />
        </Form.Item>

        <Form.Item label="Entreprise" name="entreprise">
          <Input />
        </Form.Item>

        <Form.Item
          label="Annee de Livraison"
          name="annee_de_livraison"
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
        >
          <DatePicker picker="year" />
        </Form.Item>

        <Form.Item label="Ville" name="ville">
          <Input />
        </Form.Item>

        <Form.Item label="Mandataire" name="mandataire">
          <Input />
        </Form.Item>

        <Form.Item label="Nombre de Lots" name="nombre_de_lots">
          <InputNumber />
        </Form.Item>

        <Form.Item label="PPI" name="ppi">
          <Input />
        </Form.Item>

        <Form.Item label="Lycee" name="lycee">
          <Input />
        </Form.Item>

        <Form.Item
          label="Notification du Marche"
          name="notification_du_marche"
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
        >
          <DatePicker format="DD MMM YYYY" />
        </Form.Item>

        <Form.Item label="Code UAI" name="codeuai">
          <Input />
        </Form.Item>

        <Form.Item label="Longitude" name="longitude">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Etat d'Avancement" name="etat_d_avancement">
          <Input />
        </Form.Item>

        <Form.Item
          label="Montant des ap votes en MEU"
          name="montant_des_ap_votes_en_meu"
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="CAO Attribution"
          name="cao_attribution"
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
        >
          <DatePicker format="DD MMM YYYY" />
        </Form.Item>

        <Form.Item label="Latitude" name="latitude">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Maitrise d'Oeuvre" name="maitrise_d_oeuvre">
          <Input />
        </Form.Item>

        <Form.Item label="Mode de Devolution" name="mode_de_devolution">
          <Input />
        </Form.Item>

        <Form.Item
          label="Annee d'Individualisation"
          name="annee_d_individualisation"
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
        >
          <DatePicker picker="year" />
        </Form.Item>

        <Form.Item label="Enveloppe prev en MEU" name="enveloppe_prev_en_meu">
          <InputNumber />
        </Form.Item>
      </Form>
    </Edit>
  );
};
