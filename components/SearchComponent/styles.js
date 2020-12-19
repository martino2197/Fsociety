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

  div {
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
