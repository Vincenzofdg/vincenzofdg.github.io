import styled from "styled-components";

// Purple => Indigo

const css = styled.div`
  background: #4B0082;
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
              color: #8A2BE2;
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

export default css;
