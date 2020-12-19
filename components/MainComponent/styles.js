// ------------------------------ import libraries
import styled from "styled-components";

// ------------------------------------ COMPONENTS ------------------------------------//
export const MainContainer = styled.div`
  /* width:  */
  height: 640px;
  background-color: #f5f5fb;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  margin: 50px auto 150px;
  padding: 25px;
  font-family: "Inter", sans-serif;
`;

export const SectionLeft = styled.section`
  width: 360px;
  height: 640px;
  overflow-y: scroll;
  /* margin: 30px; */
  margin-right: 25px;
`;
export const SectionRight = styled.section`
  max-width: 640px;
  height: 640px;
  /* margin: 30px; */
  /* padding: 50px; */
`;
