import React from "react";

import { SearchComponent } from "../../components/SearchComponent";
// import { LoginComponent } from "../components/LoginComponent";
import {
  IndexContainer,
  IndexHeader,
  IndexLogo,
  Favorites,
} from "../../components/PagesStyles/indexStyles";
import { MainComponent } from "../../components/MainComponent";

const Home = () => {
  return (
    <IndexContainer>
      <IndexHeader>
        <IndexLogo>
          <img src="/image/logo2.png" alt="Platzi Logo" />
        </IndexLogo>
        <h1>Talent Placement</h1>
        <Favorites>Favoritos</Favorites>
      </IndexHeader>
      <SearchComponent />
      <MainComponent />
    </IndexContainer>
  );
};

export default Home;
