import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import gameDetailsReducer from "./gameDetailsReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  detail:gameDetailsReducer,

});

export default rootReducer;
