import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
`;

export const RollDiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Button = styled.button`
  width: 15em;
  padding: 1.5em;
  border: 10px white;
  border-radius: 10px;
  color: white;
  background-color: black;
  margin-top: 3em;
  align-self: center;

  &:hover {
    cursor: pointer;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
`;

export const RollingButton = styled.button`
  border: 0px;
  border-radius: 10px;
  background-color: #00baff !important;
  opacity: 0.7;
  width: 15em;
  padding: 1.5em;
  color: white;
  margin-top: 3em;
  align-self: center;
`;
