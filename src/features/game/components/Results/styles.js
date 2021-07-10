import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';

export const Wrapper = styled.div`
  z-index: 1;
  background-color: rgba(1,1,1,0.6);
`;

export const Message = styled(Alert)`
  background-color: #C5B358;
  color: black;
  border: 5px double black;
`;
