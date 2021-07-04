import React from 'react';
import PropTypes from 'prop-types';
import ChipElement from './styles';

function Chip({ value, color }) {
  return (
    <ChipElement
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
