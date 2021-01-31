import React from "react";
//Styled Components And Animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImg } from "../utils";

//Import all the images
import playstation from "../img/playstation.svg";
import xbox from "../img/xbox.svg";
import apple from "../img/apple.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import gamepad from "../img/gamepad.svg";

//Import Start Svg
import starFull from "../img/star-full.png";
import starEmpty from "../img/star-empty.png";

function GameDetails({ pathId }) {
  const history = useHistory();
  const { game, screenshots, isLoading } = useSelector((state) => state.detail);
  //Event handler
  const togglehandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const logoDetails = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt="star"></img>);
      } else {
        stars.push(<img src={starEmpty} alt="star"></img>);
      }
    }
    return stars;
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
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <PlatForm>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={logoDetails(data.platform.name)}
                    />
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
  img {
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const PlatForm = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    padding-left: 1rem;
  }
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
