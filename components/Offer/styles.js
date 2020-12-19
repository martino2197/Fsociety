// ------------------------------ import libraries
import styled from "styled-components";

// ------------------------------------ COMPONENTS ------------------------------------//
export const OfferContainer = styled.div`
  width: auto;
  height: 800px;
  border-radius: 10px;
  border: 1px solid black;
  background: #ffffff;
`;

export const OfferHeader = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid grey;
  font-family: "Inter", sans-serif;
`;

export const OfferHeaderImage = styled.div`
  margin: 20px;
  width: 20%;
  height: 60%;
  border: 1px solid black;
`;

export const OfferHeaderInfo = styled.div`
  margin: 20px;
  width: 55%;
  height: 60%;
`;

export const Info = styled.div`
  padding: 0px 3px 0 3px;
  width: 100%;
  font-size: 15px;
  display: flex;
  align-items: center;

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
  }

  img {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border: 1px solid grey;
  }
`;

export const Pa = styled.div`
  margin: 0;
  font-weight: bold;
`;

export const Pb = styled.div`
  margin: 0;
  font-weight: bold;
`;

export const OfferHeaderButton = styled.div`
  margin-top: 30px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
`;

export const OfferContent = styled.div`
  margin: 10%;
`;
