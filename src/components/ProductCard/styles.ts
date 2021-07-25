import styled from "styled-components";

export const ProductContent = styled.div`
  height: 300px;
  width: 250px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;

  background: #fff;
  border-radius: 12px;
  padding: 20px 10px;
  border: 1px solid #ddd;

  @media (max-width: 650px) {
    width: 100%;
  }

  & img {
    width: 150px;
    height: auto;
  }

  & button {
    color: white;
    background-color: #25b525;
    margin: 0 auto;
    width: 80%;
    min-width: 100px;
    height: 35px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    transition: 0.2s;

    &:hover {
      background-color: #059505;
    }
  }
`;
