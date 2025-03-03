import { JSX } from "react";

import { Show, DateField, NumberField } from "@refinedev/antd";
import { Typography } from "antd";
import { useShow } from "@refinedev/core";

export const ShowInvestment = (): JSX.Element => {
  const {
    query: { data, isLoading },
  } = useShow();

  return (
    <Show isLoading={isLoading} canDelete={true}>
      <Typography.Title level={5}>ID</Typography.Title>
      <Typography.Text>{data?.data._id}</Typography.Text>

      <Typography.Title level={5}>Titre Operation</Typography.Title>
      <Typography.Text>{data?.data.titreoperation}</Typography.Text>

      <Typography.Title level={5}>Entreprise</Typography.Title>
      <Typography.Text>{data?.data.entreprise}</Typography.Text>

      <Typography.Title level={5}>Annee de Livraison</Typography.Title>
      <Typography.Text>
        <DateField value={data?.data.annee_de_livraison} format="YYYY" />
      </Typography.Text>

      <Typography.Title level={5}>Ville</Typography.Title>
      <Typography.Text>{data?.data.ville}</Typography.Text>

      <Typography.Title level={5}>Mandataire</Typography.Title>
      <Typography.Text>{data?.data.mandataire}</Typography.Text>

      <Typography.Title level={5}>Nombre de Lots</Typography.Title>
      <Typography.Text>{data?.data.nombre_de_lots}</Typography.Text>

      <Typography.Title level={5}>PPI</Typography.Title>
      <Typography.Text>{data?.data.ppi}</Typography.Text>

      <Typography.Title level={5}>Lycee</Typography.Title>
      <Typography.Text>{data?.data.lycee}</Typography.Text>

      <Typography.Title level={5}>Notification du Marche</Typography.Title>
      <Typography.Text>
        <DateField
          value={data?.data.notification_du_marche}
          format="DD MMM YYYY"
        />
      </Typography.Text>

      <Typography.Title level={5}>Code UAI</Typography.Title>
      <Typography.Text>{data?.data.codeuai}</Typography.Text>

      <Typography.Title level={5}>Longitude</Typography.Title>
      <Typography.Text>{data?.data.longitude}</Typography.Text>

      <Typography.Title level={5}>Etat d'Avancement</Typography.Title>
      <Typography.Text>{data?.data.etat_d_avancement}</Typography.Text>

      <Typography.Title level={5}>Montant des ap votes en MEU</Typography.Title>
      <Typography.Text>
        <NumberField value={data?.data.montant_des_ap_votes_en_meu} />
      </Typography.Text>

      <Typography.Title level={5}>CAO Attribution</Typography.Title>
      <Typography.Text>
        <DateField value={data?.data.cao_attribution} format="DD MMM YYYY" />
      </Typography.Text>

      <Typography.Title level={5}>Latitude</Typography.Title>
      <Typography.Text>{data?.data.latitude}</Typography.Text>

      <Typography.Title level={5}>Maitrise d'Oeuvre</Typography.Title>
      <Typography.Text>{data?.data.maitrise_d_oeuvre}</Typography.Text>

      <Typography.Title level={5}>Mode de Devolution</Typography.Title>
      <Typography.Text>{data?.data.mode_de_devolution}</Typography.Text>

      <Typography.Title level={5}>Annee d'Individualisation</Typography.Title>
      <Typography.Text>
        <DateField value={data?.data.annee_d_individualisation} format="YYYY" />
      </Typography.Text>

      <Typography.Title level={5}>Enveloppe prev en MEU</Typography.Title>
      <Typography.Text>
        <NumberField value={data?.data.enveloppe_prev_en_meu} />
      </Typography.Text>
    </Show>
  );
};
