import React from 'react';
import Bank from '../../components/Bank';
import Stake from '../../components/Stake';
import InnerWrapper from './styles';

function Game() {
  return (
    <div className="d-flex flex-column w-100 align-items-center">
      <InnerWrapper className="d-flex align-self-center position-fixed w-100 justify-content-center">
        <Stake />
      </InnerWrapper>

      <Bank />
    </div>
  );
}

export default Game;
