import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: auto;
  color: white;
  background-color: rgb(37, 37, 37);
  text-align: center;
  justify-content: center;
  height: 75px;

  & p {
    font-size: 12px;
    padding: 10px 0;
  }

  & a {
    text-decoration: none;
    margin: 4px;
  }

  & img {
    width: 20px;
    transition: 0.2s;

    &:hover {
      transform: scale(1.3);
    }
  }
`;
