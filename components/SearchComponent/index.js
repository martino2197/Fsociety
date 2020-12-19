// ------------------------------ import libraries
import React from "react";

// ------------------------------ import styles and images
import { SearchBarContainer, SearchBar, SearchFilter } from "./styles";
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
      </SearchFilter>
    </SearchBarContainer>
  );
};
