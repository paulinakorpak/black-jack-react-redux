import styled from 'styled-components';

const CardElement = styled.img`
  background-color: white;
  width: 70px;
  height: 105px;
  border-radius: 2px;
  border: 0.5px solid black;
  
  animation-duration: 0.5s;
  animation-name: slidein;
  
  @keyframes slidein {
    from {
      margin-left: 100%;
    }
    to {
      margin-left:0 %;
    }
  }
  
   @media (min-width: 768px) {  
    width: 100px;
    height: 150px;
    margin-left: -50px;
  }
`;

export default CardElement;
