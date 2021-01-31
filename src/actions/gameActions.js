import axios from "axios";
import { popularGameUrl, upcomingGameUrl, newGamesUrl } from "../api";

export const loadGames = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  const popularGames = await axios.get(popularGameUrl());
  const upcomingGames = await axios.get(upcomingGameUrl());
  const newGames = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGames.data.results,
      upcoming: upcomingGames.data.results,
      newGames: newGames.data.results,
    },
  });
};
