import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardElement from './styles';

function Card({ name }) {
  const [marginTop, setMarginTop] = useState(0);
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    setMarginTop(Math.floor(Math.random() * (60)) - 30);
    setDeg(Math.floor(Math.random() * (40)) - 20);
  }, []);

  return (
    <CardElement
      alt={name}
      src={`assets/cards/${name}.svg`}
      style={{ marginTop: `${marginTop}px`, transform: `rotate(${deg}deg)` }}
    />
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
};
