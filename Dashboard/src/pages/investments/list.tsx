import { JSX } from "react";

import {
  List,
  DateField,
  useTable,
  ShowButton,
  EditButton,
  DeleteButton,
  getDefaultSortOrder,
  FilterDropdown,
} from "@refinedev/antd";
import { Table, Space, Input, Select } from "antd";

export const ListInvestments = (): JSX.Element => {
  const { tableProps, sorters } = useTable({
    sorters: { initial: [{ field: "_id", order: "asc" }] },
    filters: {
      initial: [{ field: "_id", operator: "in", value: "" }],
    },
    syncWithLocation: true,
  });

  const selectOptions = [
    { value: "Opération livrée", label: "Opération livrée" },
    { value: "Abandonné", label: "Abandonné" },
    { value: "En Chantier", label: "En Chantier" },
    { value: "Etude de maîtrise d'œuvre", label: "Etude de maîtrise d'œuvre" },
    { value: "Etudes et diagnostics", label: "Etudes et diagnostics" },
    { value: "Suspendue", label: "Suspendue" },
    { value: "Sélection mandataire", label: "Sélection mandataire" },
    {
      value: "Sélection maîtrise d'œuvre",
      label: "Sélection maîtrise d'œuvre",
    },
    { value: "Suspendue", label: "Suspendue" },
    { value: "Sélection entreprise", label: "Sélection entreprise" },
  ];

  return (
    <List title="Investissements" resource="investments">
      <Table {...tableProps} rowKey="_id">
        <Table.Column
          dataIndex="ville"
          title="Ville"
          sorter
          defaultSortOrder={getDefaultSortOrder("ville", sorters)}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Input />
            </FilterDropdown>
          )}
        />
        <Table.Column
          dataIndex="etat_d_avancement"
          title="Etat d'avancement"
          sorter
          defaultSortOrder={getDefaultSortOrder("etat_d_avancement", sorters)}
          filterDropdown={(props) => (
            <FilterDropdown {...props} mapValue={(selectedKey) => selectedKey}>
              <Select
                showSearch
                style={{ minWidth: 200 }}
                options={selectOptions}
              />
            </FilterDropdown>
          )}
        />
        <Table.Column dataIndex="entreprise" title="Entreprise" sorter />
        <Table.Column
          dataIndex="annee_d_individualisation"
          title="Année d'individualisation"
          sorter
          defaultSortOrder={getDefaultSortOrder(
            "annee_d_individualisation",
            sorters
          )}
          render={(value: string) => <DateField value={value} format="YYYY" />}
        />
        <Table.Column
          dataIndex="annee_de_livraison"
          title="Année de livraison"
          sorter
          defaultSortOrder={getDefaultSortOrder("annee_de_livraison", sorters)}
          render={(value: string) => <DateField value={value} format="YYYY" />}
        />
        <Table.Column
          dataIndex="cao_attribution"
          title="CAO attribution"
          sorter
          defaultSortOrder={getDefaultSortOrder("cao_attribution", sorters)}
          render={(value: string) => (
            <DateField value={value} format="DD MMM YYYY" />
          )}
        />
        <Table.Column
          dataIndex="enveloppe_prev_en_meu"
          title="Enveloppe prev en MEU"
          sorter
          defaultSortOrder={getDefaultSortOrder(
            "enveloppe_prev_en_meu",
            sorters
          )}
        />
        <Table.Column
          dataIndex="latitude"
          title="Latitude"
          sorter
          defaultSortOrder={getDefaultSortOrder("latitude", sorters)}
        />
        <Table.Column
          dataIndex="longitude"
          title="Longitude"
          sorter
          defaultSortOrder={getDefaultSortOrder("longitude", sorters)}
        />
        <Table.Column
          dataIndex="lycee"
          title="Lycee"
          sorter
          defaultSortOrder={getDefaultSortOrder("lycee", sorters)}
        />
        <Table.Column
          dataIndex="maitrise_d_oeuvre"
          title="Maitrise d'oeuvre"
          sorter
          defaultSortOrder={getDefaultSortOrder("maitrise_d_oeuvre", sorters)}
        />
        <Table.Column
          dataIndex="mandataire"
          title="Mandataire"
          sorter
          defaultSortOrder={getDefaultSortOrder("mandataire", sorters)}
        />
        <Table.Column
          dataIndex="mode_de_devolution"
          title="Mode de devolution"
          sorter
          defaultSortOrder={getDefaultSortOrder("mode_de_devolution", sorters)}
        />
        <Table.Column
          dataIndex="montant_des_ap_votes_en_meu"
          title="Montant des ap votes en MEU"
          sorter
          defaultSortOrder={getDefaultSortOrder(
            "montant_des_ap_votes_en_meu",
            sorters
          )}
        />
        <Table.Column
          dataIndex="notification_du_marche"
          title="Notification du marche"
          sorter
          defaultSortOrder={getDefaultSortOrder(
            "notification_du_marche",
            sorters
          )}
          render={(value: string) => (
            <DateField value={value} format="DD MMM YYYY" />
          )}
        />
        <Table.Column
          dataIndex="ppi"
          title="PPI"
          sorter
          defaultSortOrder={getDefaultSortOrder("ppi", sorters)}
        />
        <Table.Column
          dataIndex="latitude"
          title="Latitude"
          sorter
          defaultSortOrder={getDefaultSortOrder("latitude", sorters)}
        />
        <Table.Column
          dataIndex="titreoperation"
          title="Titre operation"
          sorter
          defaultSortOrder={getDefaultSortOrder("titreoperation", sorters)}
        />
        <Table.Column
          title="Actions"
          render={(_, record) => (
            <Space>
              <ShowButton hideText size="small" recordItemId={record._id} />
              <EditButton hideText size="small" recordItemId={record._id} />
              <DeleteButton hideText size="small" recordItemId={record._id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
