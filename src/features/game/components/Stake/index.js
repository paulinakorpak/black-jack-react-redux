import React from 'react';
import { useSelector } from 'react-redux';
import StakeElement from './styles';
import { selectStake } from '../../gameSlice';

function Stake() {
  const stake = useSelector(selectStake);

  return (
    <StakeElement
      className="rounded-circle d-flex align-self-center justify-content-center align-items-center text-secondary font-weight-bold"
    >
      {stake}
    </StakeElement>
  );
}

export default Stake;
