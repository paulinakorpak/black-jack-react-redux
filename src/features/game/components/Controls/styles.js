import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const ControlsElement = styled.div`
  @media (orientation: portrait) {
      flex-direction: column;
  }
  
  @media (orientation: landscape) {
     flex-direction: row;
  }
  
  @media (min-width: 768px) {  
    flex-direction: column;
  }
`;

export const Control = styled(Button)`
  width: 60px;
  height: 30px;
  font-size: 12px;
  
  @media (min-width: 768px) {  
    width: 100px;
    height: 40px;
    font-size: 20px;
  }
`;
