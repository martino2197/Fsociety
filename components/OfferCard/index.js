// ------------------------------ import libraries
import React from "react";

// ------------------------------ import styles and images
import { JobCard, JobImage, JobCardContainer } from "./styles";
// import { Rate } from "../Rate";

// ------------------------------------ COMPONENT ------------------------------------//

export const OfferCard = () => {
  return (
    <JobCard>
      <JobImage />
      <JobCardContainer>
        <p class="container__title">Job</p>
        <p class="container__city a">City</p>
        <p class="container__date a">Date</p>
      </JobCardContainer>
    </JobCard>
  );
};
