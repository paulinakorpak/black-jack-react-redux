import styled from 'styled-components';

const Title = styled.h1`
  color: var(--secondary);
  font-size: 40px;
  font-weight: 300; 
  letter-spacing: 1px; 
  padding: 0 0 40px; 
  
  @media (min-width: 768px) {  
    font-size: 70px;
  }
`;

export default Title;
