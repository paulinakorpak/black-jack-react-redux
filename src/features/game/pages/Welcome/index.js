import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import Title from './styles';
import { startGame } from '../../gameSlice';

function Welcome() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startGame());
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <Title className="text-uppercase">Black Jack</Title>
      <Button
        onClick={handleClick}
        size="lg"
        variant="outline-secondary"
        className="text-uppercase"
      >
        play
      </Button>
    </div>
  );
}

export default Welcome;
