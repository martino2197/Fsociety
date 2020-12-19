// ------------------------------ import libraries
import styled from "styled-components";

// ------------------------------------ COMPONENTS ------------------------------------//
export const JobCard = styled.div`
  width: 420px;
  height: 150px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

export const JobImage = styled.img`
  width: 84px;
  height: 86px;
  margin-left: 30px;
`;

export const JobCardContainer = styled.div`
  padding-left: 20px;
  width: 60%;
  p {
    margin-bottom: 0;
    font-size: 12px;
  }
`;
