// ------------------------------ import libraries
import React from "react";

// ------------------------------ import styles and images
import {
  SearchBarContainer,
  SearchBar,
  SearchFilter,
  ButtonSelector,
  OptionsButton,
} from "./styles";
// import { Rate } from "../Rate";

// ------------------------------------ COMPONENT ------------------------------------//

export const SearchComponent = () => {
  return (
    <SearchBarContainer>
      <SearchBar>
        <div>
          <span></span>
          <input type="text" placeholder="Search" />
        </div>
      </SearchBar>
      <SearchFilter>
        <div>
          <button>Tipo De Vacante</button>
        </div>
        <div>
          <button>Fecha De Publicación</button>
        </div>
        <div>
          <button>Ubicación</button>
        </div>
        {/* <div className="dropdown">
          <ButtonSelector type="button" data-toggle="dropdown">
            Tipo
            <span></span>
          </ButtonSelector>
          <OptionsButton>
            <li>
              <a href="#">Opción 1</a>
            </li>
            <li>
              <a href="#">Opción 2</a>
            </li>
            <li>
              <a href="#">Opción 3</a>
            </li>
          </OptionsButton>
        </div> */}
      </SearchFilter>
    </SearchBarContainer>
  );
};
