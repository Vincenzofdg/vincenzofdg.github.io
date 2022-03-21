import styled from "styled-components";

const css = styled.div`
  height: 93vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;

  .upper-container {
    height: 60vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
  }

  .lower-container {
      width: 100%;
      img { width: 700px; }
    }

  @media (max-width: 700px) {
    .lower-container {
      img { width: 600px; }
    }
  }
  @media (max-width: 550px) {
    .upper-container {
      font-size: 1.3rem;
    }

    #avatar {
      img { width: 220px; }
    }

    .lower-container {
      img { width: 500px; }
    }
  }
  @media (max-width: 500px) {
    .upper-container {
      font-size: 1.1rem;
    }

    .lower-container {
      img { width: 400px; }
    }
  }
`;

export default css;
