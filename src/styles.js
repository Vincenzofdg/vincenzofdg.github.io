import styled from "styled-components";

export const Body = styled.div`

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

  // Responsividade
  /* @media (max-width: 1700px) {
    color: pink;
  } */
`;

export const Navegation = styled.div`

  background-color:  #7510f7;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 7vh;
  width: 100%;
  margin: auto;

  a {
    height: inherit;
    width: 5vw;

    img {
      width: 80px;
      height: inherit;
      padding: 7px;
    }
  }

  ul {
    display: flex;
    li {
      list-style: none;

      a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        font-size: 1.8rem; 
        padding: 2.4rem;
        transition: all 250ms linear 0s;

        :hover {
          background: rgba(28, 28, 28, 0.45);
        }
      }
    }
  }
`;

export const Load = styled.div`

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
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

export const Language = styled.footer`

  position: absolute;
  bottom: 0;
  right: 0;

  width: 15%;
  height: 1.5vw;
  display: flex;
  justify-content: space-between;

  h4 {
    background: rgba(117, 16, 247, 0.4);
    
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    h4 {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      :hover {
        background: rgba(117, 16, 247, 0.7);
      }
    }
  }
`;