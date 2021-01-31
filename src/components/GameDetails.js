import React from "react";
//Styled Components And Animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function GameDetails() {
  const history = useHistory();
  const { game, screenshots, isLoading } = useSelector((state) => state.detail);
  const togglehandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={togglehandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <PlatForm>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </PlatForm>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt="image" />
            </Media>

            <Description>
              <h3>Description:</h3>
              <p>{game.description_raw}</p>
            </Description>
            <h3>ScreenShots:</h3>
            <Gallery>
              {screenshots.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt="game" />
              ))}
            </Gallery>
            <h3>Video</h3>
            <Video>
              <video controls>
                <source src={game.clip.clips.full} />
              </video>
            </Video>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  padding: 2rem 5rem;
  border-radius: 1rem;
  background: white;
  position: absolute;

  left: 10%;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const PlatForm = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Media = styled(motion.div)`
  margin-top: 4rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 3rem 0rem;
`;
const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;
const Video = styled(motion.div)`
  video {
    width: 100%;
  }
`;
export default GameDetails;
