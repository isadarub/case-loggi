import React from 'react';
import Dice from '../Dice/Dice';
import {
  Title,
  RollDiceContainer,
  Button,
  MainContent,
  RollingButton,
} from './styled';

export default class RollDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: 'one',
      rolling: false,
    };
    // this.roll = this.roll.bind(this);
  }
  roll = () => {
    const { sides } = this.props;
    this.setState({
      dice: sides[Math.floor(Math.random() * sides.length)],
      rolling: true,
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 600);
  };

  render() {
    const { dice, rolling } = this.state;

    return (
      <MainContent>
        <Title>RollDice game</Title>
        <RollDiceContainer>
          <Dice face={dice} rolling={rolling} />
        </RollDiceContainer>

        {this.state.rolling ? (
          <RollingButton>Rolling...</RollingButton>
        ) : (
          <Button disabled={this.state.rolling} onClick={this.roll}>
            Click to roll
          </Button>
        )}
      </MainContent>
    );
  }
}
