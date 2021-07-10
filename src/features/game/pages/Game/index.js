import React from 'react';
import { useSelector } from 'react-redux';
import Bank from '../../components/Bank';
import Stake from '../../components/Stake';
import InnerWrapper from './styles';
import Controls from '../../components/Controls';
import Player from '../../components/Player';
import { selectPhase } from '../../gameSlice';
import { PHASE_BET } from '../../phases';
import { PLAYER_DEALER, PLAYER_USER } from '../../players';

function Game() {
  const phase = useSelector(selectPhase);

  return (
    <div className="d-flex flex-column w-100 align-items-center">
      <InnerWrapper className="d-flex align-self-center position-fixed w-100 justify-content-center">
        <Stake />
        <Controls />
      </InnerWrapper>

      {
        phase !== PHASE_BET && (
          <>
            <Player player={PLAYER_DEALER} />
            <Player player={PLAYER_USER} />
          </>
        )
      }

      <Bank />
    </div>
  );
}

export default Game;
