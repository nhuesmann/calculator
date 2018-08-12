import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import { buttons, getButtonKey, determineClickFunction } from '../utils';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ButtonGrid = props => (
  <Container>
    {buttons.map(button => {
      const key = getButtonKey(button);
      const clickFunction = determineClickFunction(button, props);

      return (
        <Button
          key={key}
          doubleWide={key === 0}
          onClick={clickFunction}
        >
          {button.symbol}
        </Button>
      );
    })}
  </Container>
);

export default ButtonGrid;