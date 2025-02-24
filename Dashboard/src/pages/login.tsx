import React from "react";
import { AuthPage } from "../components/pages/auth";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: {
          email: "john@mail.com",
          password: "test",
        },
      }}
    />
  );
};
