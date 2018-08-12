import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  height: 70px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Text = styled.p`
  color: white;
  font-size: 46px;
`

const DisplayBar = ({ displayValue }) => (
  <Container>
    <Text>{displayValue}</Text>
  </Container>
);

export default DisplayBar;