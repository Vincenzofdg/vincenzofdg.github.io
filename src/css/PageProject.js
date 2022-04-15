import styled from "styled-components";

const css = styled.div`
  display: flex;
  justify-content: left;
  height: 93%;

  .menu {
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 10%;
    
    h3 {
      background: #4B0082;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.2rem;
      height: 5%;
    }
    option {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bolder;
      font-size: 1.8rem;
      height: 7%;

      :hover { background: #1D1E2C; }
    }
  }

  .projects {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    padding: 48px 30px;
    width: 90%;
  }

  @media (max-width: 1140px) {
    .menu { width: 15% }
    .project { width: 85% }
  }

  @media (max-width: 850px) {
    .menu { width: 20% }
    .project { width: 80% }
  }

  @media (max-width: 745px) {
    .menu { display: none }
    .project { width: 100% }
  }
`

export default css;
