import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Control, ControlsElement } from './styles';
import {
  deal, drawCard, selectPhase, selectStake, stand,
} from '../../gameSlice';
import { PHASE_BET, PHASE_USER_TURN } from '../../phases';
import { PLAYER_USER } from '../../players';

function Controls() {
  const dispatch = useDispatch();

  const stake = useSelector(selectStake);
  const phase = useSelector(selectPhase);

  const handleDeal = () => {
    if (stake > 0) {
      dispatch(deal());
    }
  };

  const handleHit = () => {
    if (phase === PHASE_USER_TURN) {
      dispatch(drawCard(PLAYER_USER));
    }
  };

  const handleStand = () => {
    dispatch(stand());
  };

  const controlsDisabled = phase !== PHASE_USER_TURN;

  return (
    <ControlsElement className="d-flex align-items-center justify-content-center">
      {
        phase === PHASE_BET && (
          <Control
            onClick={handleDeal}
            type="button"
            variant="secondary"
            className="m-1 text-info"
          >
            Deal
          </Control>
        )
      }

      {
        phase !== PHASE_BET && (
          <>
            <Control
              onClick={handleHit}
              disabled={controlsDisabled}
              type="button"
              variant="secondary"
              className="m-1 text-info"
            >
              Hit
            </Control>
            <Control
              onClick={handleStand}
              disabled={controlsDisabled}
              type="button"
              variant="secondary"
              className="m-1 text-info"
            >
              Stand
            </Control>
          </>
        )
      }

    </ControlsElement>
  );
}

export default Controls;
