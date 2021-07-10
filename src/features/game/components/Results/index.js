import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Wrapper, Message } from './styles';
import {
  RESULT_DEALER_WIN, RESULT_GAME_OVER, RESULT_PUSH, RESULT_USER_WIN,
} from '../../results';
import { endGame, nextRound } from '../../gameSlice';

const resultTypes = {
  [RESULT_USER_WIN]: {
    message: 'You win!',
  },
  [RESULT_DEALER_WIN]: {
    message: 'Dealer win!',
  },
  [RESULT_PUSH]: {
    message: 'Push!',
  },
  [RESULT_GAME_OVER]: {
    message: 'Game over!',
  },
};

function Results({ type }) {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(nextRound());

    if (type === RESULT_GAME_OVER) {
      dispatch(endGame());
    }
  }, 2000);

  return (
    <Wrapper className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <Message
        className="d-flex w-50 justify-content-center align-items-center text-uppercase font-weight-bold"
      >
        {resultTypes[type].message}
      </Message>
    </Wrapper>
  );
}

export default Results;

Results.propTypes = {
  type: PropTypes.string.isRequired,
};
