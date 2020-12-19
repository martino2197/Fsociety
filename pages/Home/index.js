import React from "react";
import fetch from "isomorphic-unfetch";

import { SearchComponent } from "../../components/SearchComponent";
// import { LoginComponent } from "../components/LoginComponent";
import {
  IndexContainer,
  IndexHeader,
  IndexLogo,
  Favorites,
} from "../../components/PagesStyles/indexStyles";
import { MainComponent } from "../../components/MainComponent";
import { GlobalStyles } from "../../components/PagesStyles/GlobalStyles";

const Home = (props) => {
  return (
    <>
      <GlobalStyles />
      <IndexContainer>
        <IndexHeader>
          <IndexLogo>
            <img src="/image/logo2.png" alt="Platzi Logo" />
          </IndexLogo>
          <h1>Talent Placement</h1>
          {console.log(props.offers)}
          {/* <Favorites>Favoritos</Favorites> */}
        </IndexHeader>
        <SearchComponent />
        <MainComponent offers={props.offers} />
      </IndexContainer>
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  const res = await fetch("https://hackaton-master.herokuapp.com/jobs");
  const resJSON = await res.json();
  return {
    offers: resJSON.data,
  };
};
// console.log(props.users);

export default Home;
