import { JSX } from "react";
import { Refine } from "@refinedev/core";

import { dataProvider } from "./providers/data-provider";

const App = (): JSX.Element => {
  return (
    <Refine
      dataProvider={dataProvider}
      resources={[
        {
          name: "investments",
          list: "/investments",
          show: "/investments/:id",
          edit: "/investments/:id/edit",
          create: "/investments/new",
        },
      ]}
    >
      <h1>Hello</h1>
    </Refine>
  );
};

export default App;
