import React from "react";
//Styled Components And Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadGameDetails } from "../actions/gameDetailsAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Game({ name, released, image, id }) {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadGameDetails(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
}
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;
export default Game;
