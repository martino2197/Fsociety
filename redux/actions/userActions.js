import { getUserPosts } from "../utils/PostUser";
import { getFavoritePosts } from "../utils/getFavoritePosts";

const URL = "https://cozyplace.herokuapp.com/api/";

export const getUserData = (id, token) => async (dispatch) => {
  try {
    const response = await fetch(`${URL}user/favorites/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    localStorage.setItem("VERIFY", JSON.stringify({ ...data.data, token }));
    dispatch({
      type: "GET_USER_DATA",
      payload: { ...data.data, token },
    });
  } catch (error) {
    console.log("Fetch Error", error);
  }
};
