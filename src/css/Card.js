import styled from "styled-components";

const css = styled.div`
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
  margin: 2% 0;

  h3 {
    height: 12%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    width: 100%;
    height: 65%;
  }

  div {
    width: 100%;
    height: 18%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 35px;
      height: 35px;
    }
  }
`

export default css;

/*
const css = styled.div`
  background-color: white;
  border: 4px solid rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;
  margin: 10px;
  overflow: hidden;
  width: 250px;

  h3 {
    height: 12%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    width: 100%;
    height: 65%;
  }

  div {
    width: 100%;
    height: 18%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 35px;
      height: 35px;
    }
  }
`
*/