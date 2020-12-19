// ------------------------------ import libraries
import styled from "styled-components";

// ------------------------------------ COMPONENTS ------------------------------------//
export const OfferContainer = styled.div`
  width: auto;
  max-height: 800px;
  border-radius: 10px;
  border: 1px solid black;
  background: #ffffff;
`;

export const OfferHeader = styled.div`
  height: 200px;
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
  /* padding: 20px; */
  width: 55%;
  height: 80%;
`;

export const Info = styled.div`
  padding: 0px 3px 0 3px;
  width: 100%;
  height: 40px;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin: 0px 0px 10px 0px;

  div {
    height: 40px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
  }

  img {
    margin: 0px 10px 0px 0px;
    width: 40px;
    height: 40px;
    border: 1px solid grey;
  }
`;

export const Pa = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const Pb = styled.p`
  margin: 0;
  color: #83919e;
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
  button {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #ffffff;
    border: 1px transparent;
  }
`;

export const OfferContent = styled.section`
  height: 480px;
  margin: 0;
  padding: 8%;
  overflow-y: scroll;
`;
