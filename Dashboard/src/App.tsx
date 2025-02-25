import { JSX } from "react";
import { Authenticated, Refine } from "@refinedev/core";

import routerProvider, { NavigateToResource } from "@refinedev/react-router";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

import {
  ErrorComponent,
  RefineThemes,
  ThemedLayoutV2,
  ThemedTitleV2,
  useNotificationProvider,
} from "@refinedev/antd";
import { AuthPage } from "./components/pages/auth";
import { App as AntdApp, ConfigProvider } from "antd";

import { dataProvider } from "./providers/data-provider";
import { authProvider } from "./providers/auth-provider";

import { ListInvestments } from "./pages/investments/list";
import { ShowInvestment } from "./pages/investments/show";
import { EditInvestment } from "./pages/investments/edit";
import { CreateInvestment } from "./pages/investments/create";

import { Login } from "./pages/login";

import "antd/dist/reset.css";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={RefineThemes.Purple}>
        <AntdApp>
          <Refine
            dataProvider={dataProvider}
            routerProvider={routerProvider}
            authProvider={authProvider}
            notificationProvider={useNotificationProvider}
            resources={[
              {
                name: "investments",
                list: "/investments",
                show: "/investments/:id",
                edit: "/investments/:id/edit",
                create: "/investments/new",
                meta: { label: "Investissements" },
              },
            ]}
          >
            <Routes>
              <Route
                element={
                  <Authenticated
                    key="authenticated-routes"
                    redirectOnFail="/login"
                  >
                    <ThemedLayoutV2
                      Title={(props) => (
                        <ThemedTitleV2 {...props} text="HSInvest" />
                      )}
                    >
                      <Outlet />
                    </ThemedLayoutV2>
                  </Authenticated>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="investments" />}
                />
                <Route path="/investments">
                  <Route index element={<ListInvestments />} />
                  <Route path=":id" element={<ShowInvestment />} />
                  <Route path=":id/edit" element={<EditInvestment />} />
                  <Route path="new" element={<CreateInvestment />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
              <Route
                element={
                  <Authenticated key="auth-pages" fallback={<Outlet />}>
                    <NavigateToResource resource="investments" />
                  </Authenticated>
                }
              >
                <Route path="/login" element={<Login />} />
                <Route
                  path="/register"
                  element={<AuthPage type="register" />}
                />
              </Route>
            </Routes>
          </Refine>
        </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
