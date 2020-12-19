// ------------------------------ import libraries
import React from "react";

// ------------------------------ import styles and images
import { OfferCard } from "../OfferCard";
import { Offer } from "../Offer";
import { MainContainer, SectionLeft, SectionRight } from "./styles";
// import { Rate } from "../Rate";

// ------------------------------------ COMPONENT ------------------------------------//

export const MainComponent = (props) => {
  return (
    <MainContainer>
      <SectionLeft>
        {props.offers.map((props) => (
          <OfferCard offer={props} />
        ))}
      </SectionLeft>
      <SectionRight>
        <Offer openOffer={props.offers[10]} />
      </SectionRight>
    </MainContainer>
  );
};
