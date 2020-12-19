// ------------------------------ import libraries
import styled from "styled-components";
import Link from "next/link";
// import { media } from "../../global-styles/MediaQueries";

// // ------------------------------ import variables
// import {
//   colors,
//   border,
//   spacing,
//   shadows,
//   fonts,
// } from "../../global-styles/Variables";

// ------------------------------------ COMPONENTS ------------------------------------//
export const LoginBox = styled.div`
  margin-top: 50px;
  width: 30%;
  height: 60%;
  background: #ffffff;
  opacity: 70%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const LoginButton = styled(Link)`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  background: #5e81f4;
  color: #ffffff;
  border: none;
`;

export const LoginTitle = styled.h1`
  width: 80%;
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
`;

export const LoginForm = styled.form`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 0;
    font-size: 12px;
  }
  input {
    margin: 5px;
    height: 60px;
    border-radius: 10px;
    border: none;
    background: #e5e5e5;
  }

  a {
    margin: 10px;
    text-align: center;
  }
`;
