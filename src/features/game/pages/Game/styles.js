import styled from 'styled-components';

const InnerWrapper = styled.div`
  @media (orientation: portrait) {
    top: 45%;
  }
  
  @media (orientation: landscape) {
    top: 38%;
  }
  
  @media (min-width: 768px) {  
    top: 45%;
  }
  
`;
export default InnerWrapper;
