import styled from "styled-components";

export const ProductContent = styled.div`
  height: 110px;
  width: 55%;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "image name"
    "image price"
    "image description"
    "image description";

  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 5px auto;

  background: #fff;
  border-radius: 12px;
  padding: 10px 10px;
  border: 1px solid #ddd;

  @media (max-width: 650px) {
    width: 100%;
  }

  & img {
    height: 100px;
    width: auto;
    grid-area: image;
    margin: auto;
  }

  & h4 {
    grid-area: name;
  }
  & h5 {
    grid-area: price;
  }
  & span {
    font-size: 12px;
    grid-area: description;
  }
`;
