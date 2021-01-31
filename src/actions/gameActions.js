import axios from "axios";
import {
  popularGameUrl,
  upcomingGameUrl,
  newGamesUrl,
  searchGameUrl,
} from "../api";

export const loadGames = () => async (dispatch) => {
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
export const fetchSearch = (game_name) => async (dispatch) => {
  const searched = await axios.get(searchGameUrl(game_name));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      searched: searched.data.results,
    },
  });
};
