// ------------------------------ import libraries
import React, { useState } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleInput(e) {
    setSearch(
      e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase()
    );
  }
  function handleSearch() {
    router.push({
      pathname: "/Home",
      state: { search },
    });
    // searchExperiences(search);
  }
  return (
    <SearchBarContainer>
      <SearchBar>
        <form onSubmit={handleSearch}>
          <span></span>
          <input
            aria-label="Job"
            type="text"
            name="title"
            placeholder="Search Job"
            onChange={handleInput}
          />
        </form>
      </SearchBar>
      <SearchFilter>
        {/* <div>
          <button>Tipo De Vacante</button>
        </div>
        <div>
          <button>Fecha De Publicación</button>
        </div>
        <div>
          <button>Ubicación</button>
        </div> */}
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
