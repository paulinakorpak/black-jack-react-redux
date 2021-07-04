import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Control, ControlsElement } from './styles';
import { deal, selectPhase, selectStake } from '../../gameSlice';
import { PHASE_BET } from '../../phases';

function Controls() {
  const dispatch = useDispatch();

  const stake = useSelector(selectStake);
  const phase = useSelector(selectPhase);

  const handleDeal = () => {
    if (stake > 0) {
      dispatch(deal());
    }
  };

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
              type="button"
              variant="secondary"
              className="m-1 text-info"
            >
              Hit
            </Control>
            <Control
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
