import styled from 'styled-components';

const StakeElement = styled.div`
  width: 60px;
  height: 60px;
  border: 3px dashed black;
  background-color: #C5B358;
  box-shadow: 3px 3px 5px 1px #000000;
  margin-right: 10px;
  
  @media (min-width: 768px) {  
    width: 100px;
    height: 100px;
    margin-right: 50px;
    border: 5px dashed black;
  }
`;

export default StakeElement;
