// ------------------------------ import libraries
import React from "react";

// ------------------------------ import styles and images
import { JobCard, JobImage, JobCardContainer } from "./styles";
// import { Rate } from "../Rate";

// ------------------------------------ COMPONENT ------------------------------------//

export const OfferCard = (props) => {
  return (
    <JobCard onClick={() => console.log("hola")}>
      <JobImage />
      <JobCardContainer>
        <p class="container__title">{props.offer.title}</p>
        <p class="container__city a">{props.offer.country}</p>
        <p class="container__date a">{props.offer.date}</p>
      </JobCardContainer>
    </JobCard>
  );
};
