import styled from 'styled-components';

export const PlayerElement = styled.div`
  @media (orientation: portrait) {
    width: 100%;
    flex-direction: row;
  }
  
   @media (orientation: landscape) {
    bottom: 30%;
    width: 100%;
    height: 1%;
    flex-direction: column;
  }
  
  @media (min-width: 768px)  {
    width: 5%;
    bottom: 20%;
  }
  
  &.dealer {
    @media (orientation: portrait) {
      top: 15%;
    }
    
    @media (orientation: landscape) {
      top: 20%;
    }
    
    @media (min-width: 768px)  {
      top: 20%;
    } 
  }
  
  &.user {
    @media (orientation: portrait) {
      bottom: 15%;
    }
    
    @media (orientation: landscape) {
      bottom: 30%;
    }
    
    @media (min-width: 768px)  {
      bottom: 20%;
    } 
  }
`;

export const Cards = styled.div`
  width: 90%;
  
  @media (min-width: 768px) {
    width: 10%;
  }
`;

export const Info = styled.div`
  right: 0%;
  flex-direction: column;
  ;
  @media (min-width: 768px) {
    right: 10%;
    flex-direction: row;
  }
`;

export const Name = styled.p`
  font-size: 10px;
  text-transform:capitalize;
  
  @media (min-width: 768px){
    font-size: 20px;
  }
`;

export const Points = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(1,1,1,0.2);
  
  @media (min-width: 768px) {  
    width: 50px;
    height: 50px;
  }
`;
