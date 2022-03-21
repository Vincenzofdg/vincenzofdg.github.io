import styled from "styled-components";

const css = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    animation: is-rotating 1s infinite;
    border: 6px solid white;
    border-radius: 50%;
    border-top-color: #7510f7;
    width: 50px;
    height: 50px;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default css;
