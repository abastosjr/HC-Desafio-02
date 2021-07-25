import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;
  min-height: calc(100vh - 150px);

  @media (max-width: 650px) {
    min-height: calc(100vh - 125px);
  }

  & section {
    width: 70%;
    margin: 20px auto;

    display: grid;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  & button {
    color: white;
    background-color: #ee2222;
    margin: 10px auto;
    width: 200px;
    height: 35px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    transition: 0.2s;

    &:hover {
      background-color: #bb1111;
    }
  }
`;
