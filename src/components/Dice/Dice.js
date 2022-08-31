import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

const Dice = props => {
  return (
    <div>
      <FontAwesomeIcon
        icon={['fas', `fa-dice-${props.face}`]}
        className={`Dice ${props.rolling && 'Dice-rolling'}`}
      />
    </div>
  );
};

export default Dice;
