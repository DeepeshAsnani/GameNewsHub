import React from "react";
// Styled Components
import styled from "styled-components";
import { motion } from "framer-motion";
//Import logo
import logo from "../img/logo.svg";
function Nav() {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h4>UAF | HOKAGE Gaming </h4>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
}
const StyledNav = styled(motion.nav)`
  text-align: center;
  padding: 1rem 3rem;
  input {
    width: 40%;
    padding: 0.3rem;
    font-size: 1rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    margin-top: 1rem;
  }
  button {
    font-size: 1rem;
    background-color: #ff7676;
    padding: 0.3rem 2rem;
    border: none;
    margin-left: 1rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      border: 1px solid #ff7676;
      background-color: white;
      color: #ff7676;
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
export default Nav;
