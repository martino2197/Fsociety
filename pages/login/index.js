import React from "react";
import { LoginComponent } from "../../components/LoginComponent";
// import Image from "next/image";

import {
  LoginContainer,
  LoginLogo,
} from "../../components/PagesStyles/loginStyles";
import { GlobalStyles } from "../../components/PagesStyles/GlobalStyles";

// import Image from "../../assets/image";
// const dev = require("/dev.jpg");

const LoginPage = () => {
  return (
    <>
      <GlobalStyles />
      <LoginContainer>
        <LoginLogo>
          <img src="/image/logo2.png" alt="Platzi Logo" />
        </LoginLogo>
        <LoginComponent />
      </LoginContainer>
    </>
  );
};

export default LoginPage;
