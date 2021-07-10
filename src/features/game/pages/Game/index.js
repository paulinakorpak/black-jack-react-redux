import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bank from '../../components/Bank';
import Stake from '../../components/Stake';
import InnerWrapper from './styles';
import Controls from '../../components/Controls';
import Player from '../../components/Player';
import {
  selectAccount,
  selectDealerPoints, selectPhase, selectResult, selectUserPoints, setResult,
} from '../../gameSlice';
import {
  PHASE_BET, PHASE_DEALER_TURN, PHASE_RESULTS, PHASE_USER_TURN,
} from '../../phases';
import { PLAYER_DEALER, PLAYER_USER } from '../../players';
import { BLACK_JACK_VALUE, DEALER_HIT_LIMIT } from '../../values';
import Results from '../../components/Results';
import {
  RESULT_DEALER_WIN, RESULT_GAME_OVER, RESULT_PUSH, RESULT_USER_WIN,
} from '../../results';

function Game() {
  const dispatch = useDispatch();

  const phase = useSelector(selectPhase);
  const userPoints = useSelector(selectUserPoints);
  const dealerPoints = useSelector(selectDealerPoints);
  const account = useSelector(selectAccount);
  const result = useSelector(selectResult);

  useEffect(() => {
    let resultType = '';

    if (phase === PHASE_USER_TURN) {
      if (userPoints > BLACK_JACK_VALUE) {
        resultType = RESULT_DEALER_WIN;
      }
    }

    if (phase === PHASE_DEALER_TURN && dealerPoints > DEALER_HIT_LIMIT) {
      if (dealerPoints > BLACK_JACK_VALUE) {
        resultType = RESULT_USER_WIN;
      } else if (userPoints === dealerPoints) {
        resultType = RESULT_PUSH;
      } else if (userPoints > dealerPoints) {
        resultType = RESULT_USER_WIN;
      } else if (userPoints < dealerPoints) {
        resultType = RESULT_DEALER_WIN;
      }
    }

    if (resultType === RESULT_DEALER_WIN && account === 0) {
      resultType = RESULT_GAME_OVER;
    }

    if (resultType !== '') {
      setTimeout(() => {
        dispatch(setResult(resultType));
      }, 1000);
    }
  }, [userPoints, dealerPoints]);

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

      {
        phase === PHASE_RESULTS && (
          <Results type={result} />
        )
      }
    </div>
  );
}

export default Game;
