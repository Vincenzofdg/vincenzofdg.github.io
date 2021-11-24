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

  #wallpaper {
      width: 100%;
      
      img { width: 700px; }
    }

  @media (max-width: 700px) {

    #wallpaper {
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

    #wallpaper {
      img { width: 500px; }
    }
  }
  @media (max-width: 500px) {
    .upper-container {
      font-size: 1.1rem;
    }

    #wallpaper {
      img { width: 400px; }
    }
  }
`;

export const Navegation = styled.div`

  background-color: #7510f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7vh;
  width: 100%;

  .menu-toggle {
    display: none;
  }

  span {
    height: inherit;
    margin-left: 10%;
    display: flex;
    justify-content: right;

    img {
      width: 80px;
      height: inherit;
      padding: 7px;

      :hover {
        transform: scale(1.05);
      }
    }
  }

  nav {
    margin-right: 10%;

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


  // Responsividade
  @media (max-width: 2050px) {
    span { margin-left: 3%; }
    nav { margin-right: 2%; }
  }

  @media (max-width: 600px) {
    span { margin-left: 2%; }
    nav { display: none; }
    
    .menu-toggle {
      display: block;
      margin-right: 3%;
      width: 40px;
      height: 30px;

      .one {
        background-color: #fff;
        height: 5px;
        width: 100%;
        margin: 6px auto;
      }
      .two {
        background-color: #fff;
        height: 5px;
        width: 100%;
        margin: 6px auto;
      }
      .three {
        background-color: #fff;
        height: 5px;
        width: 100%;
        margin: 6px auto;
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

  // Responsividade
  @media (max-width: 2050px) {
    width: 18%;
  }
  @media (max-width: 1700px) {
    width: 20%;
  }
  @media (max-width: 1555px) {
    width: 22%;
  }
  @media (max-width: 1250px) {
    font-size: 1.3rem;
  }
  @media (max-width: 1150px) {
    h4 { display: none; }
    div { display: none; }
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