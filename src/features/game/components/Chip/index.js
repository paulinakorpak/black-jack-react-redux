import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ChipElement from './styles';
import { raiseStake, selectAccount } from '../../gameSlice';

function Chip({ value, color }) {
  const dispatch = useDispatch();
  const account = useSelector(selectAccount);

  const handleClick = () => {
    if (account >= value) {
      dispatch(raiseStake(value));
    }
  };

  return (
    <ChipElement
      onClick={handleClick}
      type="button"
      style={{ backgroundColor: color }}
      className="rounded-circle d-flex justify-content-center align-items-center font-weight-bold m-2 text-secondary"
    >
      {value}
    </ChipElement>
  );
}

export default Chip;

Chip.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
