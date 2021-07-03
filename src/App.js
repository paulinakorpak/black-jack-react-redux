import React from 'react';
import Wrapper from './styles';
import Welcome from './features/game/pages/Welcome';

function App() {
  return (
    <Wrapper className="d-flex vh-100 w-100">
      <Welcome />
    </Wrapper>
  );
}

export default App;
