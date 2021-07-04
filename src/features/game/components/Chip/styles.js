import styled from 'styled-components';

const ChipElement = styled.div`
  width: 40px;
  height: 40px;
  border: 3px dashed black;
  box-shadow: 2px 2px 4px 1px #000000;
  
  @media (min-width: 768px) {  
    width: 60px;
    height: 60px;
  }
`;

export default ChipElement;
