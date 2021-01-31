const initState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],

  searched: [],
};
export const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popularGames: action.payload.popular,
        newGames: action.payload.newGames,
        upcomingGames: action.payload.upcoming,
      };

    case "FETCH_SEARCH":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "FETCH_CLEAR":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};
