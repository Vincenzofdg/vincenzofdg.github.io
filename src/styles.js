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

export const Navegation = styled.div`

  background-color: #7510f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7vh;

  .menu-section {
    margin-right: 10%;
    
    .menu-toggle {
      display: none;
    }

    nav {
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
    }
  }

  span {
    height: inherit;
    margin-left: 10%;
    display: flex;
    justify-content: right;

    img {
      width: 80px;
      height: 100%;
      padding: 6px;

      :hover {
        transform: scale(1.05);
      }
    }
  }



  // Responsividade
  @media (max-width: 2050px) {
    span { margin-left: 3%; }
    nav { margin-right: 2%; }
  }

  @media (max-width: 600px) {
    span { margin-left: 2%; }
    nav { display: none; }
    
    .menu-section {
      .menu-toggle {
        display: block;
        width: 40px;
        height: 30px;
        margin-right: 20px;
  
        .one, .two, .three {
          background-color: #fff;
          height: 5px;
          width: 100%;
          margin: 6px auto;

          transition-duration: 0.3s;
        }
      }
    }

    .on {
      background-color: #7510f7;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 10;

      nav {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 50vh;

          li { 
            font-weight: bolder; 

            a {
              font-size: 2.6rem;
              transition-duration: 0.5s;
            }
          }
        }
      }

      .menu-toggle {
        position: absolute;
        margin-right: 65px;
        margin-top: 18px;
        right: 0;
        top: 15;

        .one { transform: rotate(45deg) translate(7px, 6px) }
        .two { opacity: 0 }
        .three { transform: rotate(-45deg) translate(9.5px, -10px) }
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
  background: rgba(117, 16, 247, 0.4);
  position: absolute;
  bottom: 0;
  right: 0;
  
  margin-bottom: 15px;
  margin-right: 10px;

  width: 5%;
  height: 4vh;
  display: flex;
  justify-content: space-evenly;

  border: 2px solid rgba(117, 16, 247, 0.7);
  border-radius: 30px 30px;

  h4 {    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // Responsividade
  @media (max-width: 2050px) {
    width: 8%;
  }
  @media (max-width: 1370px) {
    width: 9%;
  }
  @media (max-width: 1070px) {
    width: 11%;
  }
  @media (max-width: 910px) {
    margin-bottom: 10vh;
    width: 13%;
  }
  @media (max-width: 720px) {
    width: 14%;
  }
  @media (max-width: 655px) {
    margin-bottom: 20vh;
    width: 17%;
  }
  @media (max-width: 600px) {
    width: 18%;
  }
  @media (max-width: 500px) {
    width: 21%;
  }
  @media (max-width: 410px) {
    width: 22%;
  }
`;

export const Description = styled.main`

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