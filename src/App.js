import React from 'react';
import RollDice from '../src/components/RollDice/RollDice';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default class App extends React.Component {
  sides = ['one', 'two', 'three', 'four', 'five', 'six'];
  render() {
    return (
      <>
        <RollDice sides={this.sides} />
      </>
    );
  }
}
