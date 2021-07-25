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
    /* display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start; */

    display: grid;
    grid-template-columns: repeat(3, auto);

    @media (max-width: 1250px) and (min-width: 850px) {
      grid-template-columns: repeat(2, auto);
    }

    @media (max-width: 850px) {
      grid-template-columns: auto;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
