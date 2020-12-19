import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
`;

export const LoginLogo = styled.div`
  width: 307px;
  height: 180px;
  /*background-image: url(logo-platzimaster_1.png);*/
  /* background: #ffffff; */

  img {
    margin-top: 50px;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;
