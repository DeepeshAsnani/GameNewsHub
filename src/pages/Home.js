import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameActions";
//Styled Components And Animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";

import { useLocation } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const { popularGames, upcomingGames, newGames, searched } = useSelector(
    (state) => state.game
  );
  return (
    <>
      <GameList>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {pathId && <GameDetails pathId={pathId} />}
          </AnimatePresence>

          {/* ========== SearchedGames ============*/}
          {searched.length ? (
            <div>
              <h2>Searched Games </h2>
              <Games>
                {searched.map((game) => (
                  <Game
                    name={game.name}
                    released={game.released}
                    image={game.background_image}
                    id={game.id}
                    key={game.id}
                  />
                ))}
              </Games>
            </div>
          ) : (
            ""
          )}

          {/* ========== UpcomingGames ============*/}
          <h2>Upcoming Games </h2>
          <Games>
            {upcomingGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
                key={game.id}
              />
            ))}
          </Games>
          {/* ========== PopularGames ============*/}
          <h2>Popular Games </h2>
          <Games>
            {popularGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
                key={game.id}
              />
            ))}
          </Games>
          {/* ========== NewGames ============*/}
          <h2>New Games </h2>
          <Games>
            {newGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
                key={game.id}
              />
            ))}
          </Games>
        </AnimateSharedLayout>
      </GameList>
    </>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 2.5rem;
  h2 {
    padding: 2.5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
