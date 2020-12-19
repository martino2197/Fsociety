// ------------------------------ import libraries
import React from "react";

// ------------------------------ import styles and images
import { OfferCard } from "../OfferCard";
import { Offer } from "../Offer";
import { MainContainer, SectionLeft, SectionRight } from "./styles";
// import { Rate } from "../Rate";

// ------------------------------------ COMPONENT ------------------------------------//

export const MainComponent = () => {
  return (
    <MainContainer>
      <SectionLeft>
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </SectionLeft>
      <SectionRight>
        <Offer />
      </SectionRight>
    </MainContainer>
  );
};
