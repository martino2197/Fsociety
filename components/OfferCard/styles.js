// ------------------------------ import libraries
import styled from "styled-components";

// ------------------------------------ COMPONENTS ------------------------------------//
export const JobCard = styled.button`
  width: 95%;
  height: 100px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

export const JobImage = styled.img`
  width: 84px;
  height: 86px;
  margin-left: 30px;
`;

export const JobCardContainer = styled.div`
  padding-left: 20px;
  width: 100%;
  p {
    margin-bottom: 0;
    font-size: 12px;
  }
`;
