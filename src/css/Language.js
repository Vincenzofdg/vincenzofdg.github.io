import styled from "styled-components";

const css = styled.footer`
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

export default css;
