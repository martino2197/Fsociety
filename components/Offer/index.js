// ------------------------------ import libraries
import React from "react";

// ------------------------------ import styles and images
import {
  OfferContainer,
  OfferHeader,
  OfferContent,
  OfferHeaderImage,
  OfferHeaderInfo,
  Info,
  Pa,
  Pb,
  OfferHeaderButton,
} from "./styles";
// import { Rate } from "../Rate";

// ------------------------------------ COMPONENT ------------------------------------//

export const Offer = (props) => {
  return (
    <OfferContainer>
      <OfferHeader>
        <OfferHeaderImage>
          <img src="" alt="" />
        </OfferHeaderImage>
        <OfferHeaderInfo>
          <Info>
            <img src="" alt="" />
            <div>
              <Pa>{props.openOffer.title}</Pa>
              <Pb>{props.openOffer.category}</Pb>
            </div>
          </Info>
          <Info>
            <img src="" alt="" />
            <div>
              <Pa>{props.openOffer.company}</Pa>
              <Pb>{props.openOffer.date}</Pb>
            </div>
          </Info>
          <Info>
            <img src="" alt="" />
            <div>
              <Pa>{props.openOffer.country}</Pa>
              <Pb>{props.openOffer.location}</Pb>
            </div>
          </Info>
        </OfferHeaderInfo>
        <OfferHeaderButton>
          <button>*</button>
        </OfferHeaderButton>
      </OfferHeader>
      <OfferContent>
        <p>{props.openOffer.description}</p>
        <p>
          About GBM We are a wealth & asset management and private banking
          organization with 35 years of experience, innovative digital
          investment, and saving products. Our mission is to enable meaningful
          lives through smart finance solutions. Take a look at our main
          service: GBM+ “We are reinventing how people create and grow their
          wealth, by changing the way people save, invest, and manage their
          investments.” About the Team We are a young community with innovate
          ideas and solutions. A team of creatives, collectives, owners, and
          dreamers, and of course, we know how to have fun! We believe the best
          idea wins and are always looking to bring it to life. Job Description:
          As a front-end developer, you must have a strong affinity for design,
          detail, quality, and possess high technical skills to represent a
          bridge between UI designers and back-end developers.
        </p>
      </OfferContent>
    </OfferContainer>
  );
};
