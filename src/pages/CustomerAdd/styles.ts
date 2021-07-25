import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const Container = styled.div`
  background: #f5f5f5;
  width: 100%;
  min-height: calc(100vh - 150px);

  @media (max-width: 650px) {
    min-height: calc(100vh - 125px);
  }
`;
export const FormContent = styled.form`
  width: 400px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #d5d5d5;
  margin: 20px auto;
  padding: 25px 20px;
  border-radius: 8px;
  box-shadow: -4px 6px 5px rgba(0, 0, 0, 0.05);

  & h2 {
    margin-bottom: 10px;
  }

  & label {
    margin: 5px auto 0 5%;
    font-size: 16px;
  }

  & input {
    width: 90%;
    margin: 5px auto;
    padding: 0 5px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid;
    font-size: 16px;

    &:focus,
    &:active {
      outline: none;
      box-shadow: none;
      border-bottom: 3px solid #25b525;
      margin: 5px 0 3px 0;
    }
  }

  & button {
    color: white;
    background-color: #25b525;
    margin: 20px auto 0 auto;
    width: 50%;
    min-width: 100px;
    height: 35px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
      background-color: #059505;
    }
  }
`;

export const InputMask = styled(ReactInputMask)`
  width: 90%;
  margin: 5px auto;
  padding: 0 5px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid;
  font-size: 16px;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
    border-bottom: 3px solid #25b525;
    margin: 5px 0 3px 0;
  }
`;
