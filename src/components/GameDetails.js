import React from "react";
//Styled Components And Animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImg } from "../utils";

function GameDetails({ pathId }) {
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
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
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
              <motion.img
                layoutId={`image ${pathId}`}
                src={
                  game.background_image
                    ? smallImg(game.background_image, 1280)
                    : ""
                }
                alt="image"
                className="coverpic"
              />
            </Media>

            <Description>
              <h3>Description:</h3>
              <p>{game.description_raw}</p>
            </Description>
            <h3>ScreenShots:</h3>
            <Gallery>
              {screenshots.results.map((screen) => (
                <motion.img
                  src={screen.image ? smallImg(screen.image, 1280) : ""}
                  key={screen.id}
                  alt="game"
                  className="screenShotsPic"
                />
              ))}
            </Gallery>
            <h3>Video</h3>
            {game.clip ? (
              <Video>
                <video controls>
                  <source src={game.clip.clips.full} />
                </video>
              </Video>
            ) : (
              <h5>Sorry No Video Available for this game</h5>
            )}
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
  z-index: 5;
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
  z-index: 10;
  left: 10%;
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
  .coverpic {
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
  .screenShotsPic {
    width: 100%;
  }
`;
const Video = styled(motion.div)`
  video {
    width: 100%;
  }
`;
export default GameDetails;
