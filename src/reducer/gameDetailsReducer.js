const InitState = {
  game: {},
  screenshots: {},
  isLoading: true,
};

const gameDetailsReducer = (state = InitState, action) => {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
export default gameDetailsReducer;
