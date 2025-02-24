import { JSX } from "react";

import {
  List,
  DateField,
  useTable,
  ShowButton,
  EditButton,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const ListInvestments = (): JSX.Element => {
  const { tableProps } = useTable();

  return (
    <List title="Investissements" resource="investments">
      <Table {...tableProps} rowKey="_id">
        <Table.Column dataIndex="entreprise" title="Entreprise" />
        <Table.Column
          dataIndex="annee_d_individualisation"
          title="Année d'individualisation"
          render={(value: string) => <DateField value={value} format="YYYY" />}
        />
        <Table.Column
          dataIndex="annee_de_livraison"
          title="Année de livraison"
          render={(value: string) => <DateField value={value} format="YYYY" />}
        />
        <Table.Column
          dataIndex="cao_attribution"
          title="CAO attribution"
          render={(value: string) => (
            <DateField value={value} format="DD MMM YYYY" />
          )}
        />
        <Table.Column
          dataIndex="enveloppe_prev_en_meu"
          title="Enveloppe prev en MEU"
        />
        <Table.Column dataIndex="etat_d_avancement" title="Etat d'avancement" />
        <Table.Column dataIndex="latitude" title="Latitude" />
        <Table.Column dataIndex="longitude" title="Longitude" />
        <Table.Column dataIndex="lycee" title="Lycee" />
        <Table.Column dataIndex="maitrise_d_oeuvre" title="Maitrise d'oeuvre" />
        <Table.Column dataIndex="mandataire" title="Mandataire" />
        <Table.Column
          dataIndex="mode_de_devolution"
          title="Mode de devolution"
        />
        <Table.Column
          dataIndex="montant_des_ap_votes_en_meu"
          title="Montant des ap votes en MEU"
        />
        <Table.Column
          dataIndex="notification_du_marche"
          title="Notification du marche"
          render={(value: string) => (
            <DateField value={value} format="DD MMM YYYY" />
          )}
        />
        <Table.Column dataIndex="ppi" title="PPI" />
        <Table.Column dataIndex="latitude" title="Latitude" />
        <Table.Column dataIndex="titreoperation" title="Titre operation" />
        <Table.Column dataIndex="ville" title="Ville" />
        <Table.Column
          title="Actions"
          render={(_, record) => (
            <Space>
              <ShowButton hideText size="small" recordItemId={record._id} />
              <EditButton hideText size="small" recordItemId={record._id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
