import styled from "styled-components";

const css = styled.div`
  display: grid;
  place-items: center;
  height: 93vh;

  div {
    width: 70vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    

    .forms {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 80%;

      .column { 
        background: #4B0082;
        height: 100%;
        width: 15px;
      }

      .center {
        height: 100%;
        width: 60%;
      }
    }

    .contacts {
      height: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      
      h2 {
        display: flex
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 40%;
      }

      .icons { 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 60%;
        width: 25%;

        img {
          width: 75px;
          height: 75px;
    
          :hover { transform: scale(1.05) }
        }

        @media (max-width: 1930px) {
          width: 30%;
          img { width: 70px; height: 70px; }
        }

        @media (max-width: 1450px) {
          width: 35%;
          img { width: 65px; height: 65px; }
        }

        @media (max-width: 1130px) {
          width: 40%;
          img { width: 60px; height: 60px; }
        }

        @media (max-width: 890px) {
          width: 45%;
          img { width: 55px; height: 55px; }
        }

        @media (max-width: 740px) { width: 50%; }
        @media (max-width: 670px) { width: 55%; }
        @media (max-width: 600px) { width: 70%; }
        @media (max-width: 500px) { width: 75%; }
        @media (max-width: 450px) { width: 80%; }
      }
    }
  }
`

export default css;
