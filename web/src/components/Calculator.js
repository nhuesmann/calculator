import React from 'react'
import styled from 'styled-components';

import DisplayBar from './DisplayBar';
import ButtonGrid from './ButtonGrid';

const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Calculator = props => (
  <Container>
    <DisplayBar displayValue={props.displayValue} />
    <ButtonGrid onNumberClick={props.onNumberClick} />
  </Container>
);

export default Calculator;

/*
<InputContainer>
      <Numbers onNumberClick={props.onNumberClick} />
      <Operators onOperatorClick={props.onOperatorClick} />
    </InputContainer>
*/