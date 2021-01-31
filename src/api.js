//Base Url
const base_url = "https://api.rawg.io/api/";

//Get Current Month

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Get Current Date

const getCurrentDate = () => {
  const date = new Date().getDate();

  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};
// Get Current year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDate = getCurrentDate();

const currentFullDate = `${currentYear}-${currentMonth}-${currentDate}`;
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDate}`;
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDate}`;

//Popular Game Url
const popularGame = `games?dates=${lastYearDate},${currentFullDate}&ordering=-rating&page_size=10`;
const upcomingGame = `games?dates=${currentFullDate},${nextYearDate}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYearDate},${currentFullDate}&ordering=-released&page_size=10`;
export const popularGameUrl = () => `${base_url}${popularGame}`;
export const upcomingGameUrl = () => `${base_url}${upcomingGame}`;
export const newGamesUrl = () => `${base_url}${newGames}`;
// get deatails of specific game
export const gameDetailsUrl =(game_id)=> `${base_url}games/${game_id}`;
//get screenShot for game
export const gameScreenShotsUrl =(game_id)=> `${base_url}games/${game_id}/screenshots`;
//Searched games
export const searchGameUrl = (game_name)=> `${base_url}games?search=${game_name}&page_size=10`;