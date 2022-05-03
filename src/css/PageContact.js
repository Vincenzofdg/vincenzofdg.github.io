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
      }
    }

    @media (max-width: 1930px) {
      background: red;
      .icons {
        width: 30%;
      }
    }
  }
`

export default css;
