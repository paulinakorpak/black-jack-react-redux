import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  PlayerElement, Cards, Info, Name, Points,
} from './styles';
import {
  drawCard, selectDealerCards, selectDealerPoints, selectPhase, selectUserCards, selectUserPoints,
} from '../../gameSlice';
import { PHASE_DEALER_TURN, PHASE_USER_TURN } from '../../phases';
import { PLAYER_DEALER, PLAYER_USER } from '../../players';
import Card from '../Card';
import { DEALER_HIT_LIMIT } from '../../values';

function Player({ player }) {
  const dispatch = useDispatch();
  const phase = useSelector(selectPhase);

  let cards = [];
  let points = 0;

  if (player === PLAYER_USER) {
    cards = useSelector(selectUserCards);
    points = useSelector(selectUserPoints);
  }
  if (player === PLAYER_DEALER) {
    cards = useSelector(selectDealerCards);
    points = useSelector(selectDealerPoints);
  }

  useEffect(() => {
    if (phase === PHASE_USER_TURN) {
      if (player === PLAYER_USER) {
        dispatch(drawCard(PLAYER_USER));
        dispatch(drawCard(PLAYER_USER));
      }

      if (player === PLAYER_DEALER) {
        dispatch(drawCard(PLAYER_DEALER));
      }
    }

    if (phase === PHASE_DEALER_TURN && player === PLAYER_DEALER) {
      if (points <= DEALER_HIT_LIMIT) {
        dispatch(drawCard(PLAYER_DEALER));
      }
    }
  }, [phase]);

  useEffect(() => {
    if (phase === PHASE_DEALER_TURN && player === PLAYER_DEALER) {
      if (points <= DEALER_HIT_LIMIT) {
        dispatch(drawCard(PLAYER_DEALER));
      }
    }
  }, [points]);

  return (
    <PlayerElement className={`${player} d-flex justify-content-center align-items-center position-fixed`}>
      <Cards className="d-flex align-items-center">
        {cards.map((card) => <Card key={card.name} name={card.name} />)}
      </Cards>
      <Info className="d-flex align-items-center justify-content-around m-2 position-fixed">
        <Name className="m-4 text-uppercase font-weight-bold text-secondary">{player}</Name>
        <Points className="rounded-circle d-flex justify-content-center align-items-center font-weight-bold text-secondary">
          {points}
        </Points>
      </Info>
    </PlayerElement>
  );
}

export default Player;

Player.propTypes = {
  player: PropTypes.string.isRequired,
};
