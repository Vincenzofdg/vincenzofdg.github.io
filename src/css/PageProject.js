import styled from "styled-components";

const css = styled.div`
  background-color: blue;
  display: flex;
  justify-content: left;
  height: 93%;

  .menu {
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 10%;
    
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: gray;
      font-weight: bolder;
      height: 8%;
    }
    option {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: red;
      height: 7%;

      :hover { transform: scale(1.05) }
    }
  }

  .projects {
    background-color: pink;
    width: 85%;
  }
`

export default css;


  // main {
  //   display: flex;
  //   justify-content: space-evenly;
  //   flex-flow: row wrap;
  //   padding: 48px 30px;
  // }
