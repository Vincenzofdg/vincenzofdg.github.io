import styled from "styled-components";

const css = styled.main` 
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .up-container {
    height: 35%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .image { padding: 2%; }
    
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        height: 20%;
        font-weight: bolder;
        //font-size: 3rem;
      }

      p {
        height: 35%;
        line-height: 1.7;
        //font-size: 2.2rem;

        a {
          color: violet;
          font-weight: bold;
          text-decoration: none;
        }
      }
    }
  }

  .down-container {
    //background: green;
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
  // Responsividade
  @media (min-width: 2035px) {
    .text {
      h2 { font-size: 3rem; }
      p { font-size: 2.2rem; }
    }
  }
  @media (max-width: 2035px) {
    .image {
      img { width: 250px }
    }
    .text {
      padding: 1%;
      h2 { font-size: 2.6rem; }
      p { font-size: 2.1rem; }
    }
  }
  @media (max-width: 1952px) {
    .text {
      h2 { font-size: 2.4rem; }
      p { font-size: 1.9rem; }
    }
  }
  @media (max-width: 1792px) {
    .image {
      img { width: 230px }
    }
      h2 { font-size: 2.2rem; }
      p { font-size: 1.8rem; }
    }
  }
  @media (max-width: 1690px) {
    .image {
      img { width: 200px }
    }
    .text {
      h2 { font-size: 2rem; }
      p { font-size: 1.6rem; }
    }
  }
  @media (max-width: 1498px) {
    .image {
      img { width: 180px }
    }
    .text {
      h2 { font-size: 1.9rem; }
      p { font-size: 1.5rem; }
    }
  }
  @media (max-width: 1395px) {
    .image { display: none; }
    .text {
      h2 { font-size: 2rem; }
      p { font-size: 1.6rem; }
    }
  }
  @media (max-width: 625px) {
    .text {
      h2 { font-size: 1.8rem; }
      p { font-size: 1.4rem; }
    }
  }
  @media (max-width: 545px) {
    .text {
      h2 { font-size: 1.6rem; }
      p { font-size: 1.2rem; }
    }
  }
`;

export default css;
