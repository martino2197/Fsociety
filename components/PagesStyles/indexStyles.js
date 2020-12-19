import styled from "styled-components";

export const IndexContainer = styled.div`
  width: 100vw;
  /* height: 100vh; */
  background-color: #f5f5fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
`;

export const IndexHeader = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #f5f5fb;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  justify-content: space-around;
  align-items: center;
  padding: 25px;
  font-family: "Inter", sans-serif;
`;

export const IndexLogo = styled.div`
  width: 307px;
  height: 180px;
  /*background-image: url(logo-platzimaster_1.png);*/
  /* background: #ffffff; */

  img {
    margin-top: 25px;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const Favorites = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  background: #5e81f4;
  color: #ffffff;
  border: none;
`;
