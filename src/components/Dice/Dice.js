import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import styled from 'styled-components';

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
