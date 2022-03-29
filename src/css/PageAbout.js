import styled from "styled-components";

const css = styled.main` 
  height: 87%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .up-container {
    height: 35%;
    width: 100%;
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
        text-align: center;
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
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: space-between;

    .left {
      background-color: pink;
      width: 30%;
    }

    .right {
      background-color: #2a2d43;
      box-shadow: inset 0 0 1em #2a2d43, 0 0 1em black;
      border-bottom: solid 8px #7929C4;
      width: 40%;
      display: flex;
      justify-content: space-evenly;
      align-items: end;
      
      .skill {
        display: flex;
        flex-direction: column;
        justify-content: end;
        
        p {
          text-align: center;
          font-weight: bold;
          width: 100%;
          height: 5%;
        }
        
        .block {
          background-color: #7929C4;
          width: 75px;
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
    .down-container { .right { width: 50%; } }
    .text {
      h2 { font-size: 2.4rem; }
      p { font-size: 1.9rem; }
    }
  }
  @media (max-width: 1792px) {
    .down-container { .right { width: 55%; } }
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
    .down-container { .right { width: 57%; } }
    .image {
      img { width: 180px }
    }
    .text {
      h2 { font-size: 1.9rem; }
      p { font-size: 1.5rem; }
    }
  }
  @media (max-width: 1395px) {
    .down-container { .right { width: 58%; } }
    .text {
      h2 { font-size: 1.8rem; }
      p { font-size: 1.4rem; }
    }
  }
  @media (max-width: 1315px) {
    .image {
      img { width: 150px }
    }
    .text {
      h2 { font-size: 1.7rem; }
      p { font-size: 1.3rem; }
    }
  }
  @media (max-width: 1205px) {
    .image {
      img { width: 130px }
    }
    .text {
      h2 { font-size: 1.6rem; }
      p { font-size: 1.2rem; }
    }
  }
  @media (max-width: 1115px) {
    .down-container { .right { display: none } }
    .image {
      img { width: 130px }
    }
    .text {
      h2 { font-size: 1.5rem; }
      p { font-size: 1.1rem; }
    }
  }
  @media (max-width: 1020px) {
    .image { display: none; }
    .text {
      h2 { font-size: 1.4rem; }
      p { font-size: 1rem; }
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
