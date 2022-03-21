import styled from "styled-components";

const css = styled.div`
  height: 4vh;
  background: #7510f7;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 55vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    div {
      display: flex;
      width: 250px;
      justify-content: center;
      align-items: center;
  
      .select {
        position: relative;
        display: flex;
        width: 120px;
        height: 30px;
        background: #5c6664;
        overflow: hidden;
        border-radius: .25em;
        
        select {
          -webkit-appearance:none;
          -moz-appearance:none;
          -ms-appearance:none;
          appearance:none;
          outline:0;
          box-shadow:none;
          border:0!important;
          background: #5c6664;
          background-image: none;
          flex: 1;
          padding: 0 .5em;
          color:#fff;
          cursor:pointer;
          font-size: 1em;
          font-family: 'Open Sans', sans-serif;
          // text-align: center;
        }
      }
    }
  }
`

export default css;
