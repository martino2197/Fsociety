const initialState = {
  loading: false,
  displayModal: { sign: false, login: false, error: "hola" },
  userData: localStorage.getItem("VERIFY")
    ? JSON.parse(localStorage.getItem("VERIFY"))
    : {},
  selection: "favorites",
  experiencesDisplayed: [],
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING":
      return { ...state, loading: true };

    case "GET_USER_DATA":
      return {
        ...state,
        userData: payload,
      };

    case "SHOW_ERROR":
      return {
        ...state,
        displayModal: {
          ...state.displayModal,
          error: payload,
        },
      };

    default:
      return state;
  }
};
