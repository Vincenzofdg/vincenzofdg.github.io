import styled from "styled-components";

const css = styled.div`
  background-color: #2c2f45;
  border: 4px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 290px;
  margin: 10px;
  overflow: hidden;
  width: 260px;

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
      width: 40px;
      height: 35px;

      :hover { transform: scale(1.05) }
    }
  }
`

export default css;