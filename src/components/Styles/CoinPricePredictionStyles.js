import styled from "styled-components";

export const CoinPricePredictionStyles = styled.div`
  display:flex;
  justify-content:center;
  
  flex-direction:column;
  width:95%;
  
  h3{
    color:${props=>props.colors[1]};
    text-align:center;
  }
  .predictions{
    display:flex;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    
  }
  
`