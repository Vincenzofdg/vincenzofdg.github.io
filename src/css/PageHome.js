import styled from "styled-components";

const css = styled.div`
  background-color: #1D1E2C;
  height: 95%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  div {
    height: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;

    .up-container {
      height: 50%;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
  
    .down-container {
      height: 45%;
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: center;
      img {
        background: #4B0082;
        border-radius: 50%;
        width: 200px;
      }
    }
  }

  @media (max-width: 550px) {
    .up-container { font-size: 1.3rem; }
    .down-container { img { width: 220px; } }
  }

  @media (max-width: 500px) {
    .up-container { font-size: 1.1rem; }
    .down-container { img { width: 180px; } }
  }
`;

export default css;
