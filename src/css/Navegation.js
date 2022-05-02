import styled from "styled-components";

const css = styled.div`
  background: #4B0082;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7%;

  .marker {
    margin-left: 100px;
    width: 20%;
    height: 40%;
    display: flex;
    justify-content: center;

    .nome {
      width: 100%;
      :hover { transform: scale(1.05) }
    }
    display: flex;

    .logo { display: none; }
  }

  .menu-section {
    margin-right: 10%;
    
    .menu-toggle { display: none; }

    nav {
      ul {
        display: flex;
        li {
          list-style: none;
          a {
            display: flex;
            align-items: center;
            justify-content: center;
          
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            font-size: 1.8rem; 
            padding: 2.4rem;
            transition: all 250ms linear 0s;
    
            :hover {
              background: rgba(28, 28, 28, 0.45);
              color: #8A2BE2;
            }
          }
        }
      }
    }
  }

  // Responsividade
  @media (max-width: 1420px) { 
    .marker { 
      width: 25%;
      height: 70%;
    } }
  @media (max-width: 900px) { .marker { width: 30%; } }
  @media (max-width: 890px) { .marker { width: 35%; } }
  @media (max-width: 745px) { 
    .marker {
      width: 10%;
      .nome { display: none; }
      .logo {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 600px) {
    nav { display: none; }
    
    .marker {
      margin-left: 50px;
      width: 20%;
      height: 90%;
    }

    .menu-section {
      .menu-toggle {
        display: block;
        width: 40px;
        height: 30px;
        margin-top: 10px;
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
      background-color: #1D1E2C;
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

export default css;
