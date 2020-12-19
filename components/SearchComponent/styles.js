// ------------------------------ import libraries
import styled from "styled-components";

// ------------------------------------ COMPONENTS ------------------------------------//
export const SearchBarContainer = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #f5f5fb;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: space-around;
  align-items: center;
  padding: 25px;
  font-family: "Inter", sans-serif;
`;

export const SearchBar = styled.section`
  width: 525px;
  border-radius: 5px;
  border: 1px solid #dfe1e5;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  form {
    width: 525px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 1px solid #dfe1e5;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    background-image: url(https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_search_48px-512.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 18px;
    height: 18px;
  }

  input {
    width: 450px;
    height: 40px;
    border: none;
    outline: none;
  }
`;

export const SearchFilter = styled.section`
  width: 530px;
  margin: 0 auto;

  div {
    display: inline-block;
  }
  button {
    height: 36px;
    background-color: #ffffff;
    border: 0;
    font-size: 14px;
    color: #5f6368;
    border-radius: 5px;
    padding: 0 15px;
    margin: 0 22px;
  }
`;

export const ButtonSelector = styled.button`
  border-radius: 2px;
  margin: 0px;
  font-size: 13px !important;
  font-weight: 400 !important;
  transition: all ease-in-out 0.3s;
  border: none;
  cursor: pointer;
  padding: 5px 20px !important;
  background-color: #ffffff;
  color: #898989;
  border: 1px solid #cccccc !important;

  &:hover {
    background-color: #ffffff;
    border: 1px solid #41abd6 !important;
    color: #41abd6;
    transition: all ease-in-out 0.3s;
  }
  &:active {
    background-color: #ffffff !important ;
    border: 1px solid #41abd6;
    transition: all ease-in-out 0.3s;
  }
  &:focus {
    background-color: #ffffff !important ;
    border: 1px solid #41abd6 !important;
    box-shadow: 0px 0px 2px #41abd6;
    transition: all ease-in-out 0.3s;
  }
`;

export const OptionsButton = styled.ul`
  min-width: 170px;
  padding: 0px;
  margin: -1px;
  font-size: 13px;
  text-align: left;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 2px;
  -webkit-box-shadow: 0 0px 2px #cccccc;
  box-shadow: 0px 0px 2px #cccccc;
  color: #898989;
  li a:hover,
  li a:focus {
    color: #ffffff;
    text-decoration: none;
    background-color: #41abd6;
  }
`;
