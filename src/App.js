import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from './styles';
import { selectPage } from './features/game/gameSlice';
import { PAGE_WELCOME, PAGE_GAME } from './features/game/pages';
import Welcome from './features/game/pages/Welcome';
import Game from './features/game/pages/Game';

function App() {
  const page = useSelector(selectPage);

  return (
    <Wrapper className="d-flex vh-100 w-100">
      { page === PAGE_WELCOME && <Welcome /> }
      { page === PAGE_GAME && <Game /> }
    </Wrapper>
  );
}

export default App;
