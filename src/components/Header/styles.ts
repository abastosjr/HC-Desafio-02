import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background: #ddd;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.05);
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
  z-index: 1000;

  @media (max-width: 650px) {
    height: 50px;
    padding: 0 2%;
  }

  & img {
    height: 50px;

    @media (max-width: 650px) {
      height: 25px;
    }
  }

  & div {
    background: #35c535;
    text-align: center;
    width: fit-content;
    padding: 4px 8px;
    border-radius: 16px;
    position: absolute;
  }

  & p {
    @media (max-width: 650px) {
      display: none;
    }
  }
`;

export const LinkStyled = styled(Link)`
  display: block;
  width: min-content;
  text-align: center;
  color: #000000;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;
