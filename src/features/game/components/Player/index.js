import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  PlayerElement, Cards, Info, Name, Points,
} from './styles';
import {
  drawCard, selectDealerCards, selectPhase, selectUserCards,
} from '../../gameSlice';
import { PHASE_USER_TURN } from '../../phases';
import { PLAYER_DEALER, PLAYER_USER } from '../../players';
import Card from '../Card';

const cardsSelectors = {
  [PLAYER_USER]: selectUserCards,
  [PLAYER_DEALER]: selectDealerCards,
};

function Player({ player }) {
  const dispatch = useDispatch();
  const phase = useSelector(selectPhase);

  const cards = useSelector(cardsSelectors[player]);

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
  }, [phase]);

  return (
    <PlayerElement className={`${player} d-flex justify-content-center align-items-center position-fixed`}>
      <Cards className="d-flex align-items-center">
        {cards.map((card) => <Card key={card.name} name={card.name} />)}
      </Cards>
      <Info className="d-flex align-items-center justify-content-around m-2 position-fixed">
        <Name className="m-4 text-uppercase font-weight-bold text-secondary">{player}</Name>
        <Points className="rounded-circle d-flex justify-content-center align-items-center font-weight-bold text-secondary">
          10
        </Points>
      </Info>
    </PlayerElement>
  );
}

export default Player;

Player.propTypes = {
  player: PropTypes.string.isRequired,
};
