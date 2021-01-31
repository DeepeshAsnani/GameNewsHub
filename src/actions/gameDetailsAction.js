import axios from "axios";
import { gameDetailsUrl, gameScreenShotsUrl } from "../api";

export const loadGameDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  const details = await axios.get(gameDetailsUrl(id));
  const screen = await axios.get(gameScreenShotsUrl(id));

  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      game: details.data,
      screenshots: screen.data,
    },
  });
};
