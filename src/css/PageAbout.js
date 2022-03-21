import styled from "styled-components";

const css = styled.main`
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .upper-container {
    height: 25vh;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h2 {
      font-weight: bolder;
      font-size: 3rem;
    }

    a {
      font-weight: bold;
      text-decoration: none;
    }
  }

  .lower-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 18%;
      height: 40vh;
      border-radius: 200px;
      padding: 15px;
    }

    div {
      height: 45vh;
      width: 45%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      ul {
        background-color: #ffffff;
        width: 40%;
        height: inherit;

        box-shadow: 10px 5px 5px black;
        
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p {
          font-size: 2.4rem;
          text-align: center;
        }

        li {
          font-size: 2rem;
          list-style-type: none;
          text-align: center;
          height: 10%;
        }
      }
    }
  }
`;

export default css;
