// ------------------------------ import libraries
import React from "react";

// ------------------------------ import styles and images
import { LoginBox, LoginTitle, LoginForm, LoginButton } from "./styles";
// import { Rate } from "../Rate";

// ------------------------------------ COMPONENT ------------------------------------//

export const LoginComponent = () => {
  return (
    <LoginBox>
      <LoginTitle>Bienvenido a Talent Placement Search</LoginTitle>
      <LoginForm>
        <p>User Name</p>
        <input />
        <p>Password</p>
        <input />
        <a>Forgot your Password?</a>
      </LoginForm>
      <LoginButton>LOGIN</LoginButton>
    </LoginBox>
  );
};
