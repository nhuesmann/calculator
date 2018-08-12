import React from 'react';
import styled from 'styled-components';

const ButtonNode = styled.button`
  width: ${({ doubleWide }) => doubleWide ? '150px' : '70px'};
  height: 70px;
  border: none;
  border-radius: ${({ doubleWide }) => doubleWide ? '50px' : '50%'};
  background-color: #555;
  text-decoration: none;
  outline: none;
  margin: 5px;
  font-size: 32px;
  color: white;
  cursor: pointer;
  box-shadow: 0 3px #d9d9d9;
  user-select: none;

  &:hover {
    background-color: #333;
  }

  &:active {
    box-shadow: 0 1px #666;
    transform: translateY(4px);
    background-color: #333;
  }
`;

const Button = props => (
  <ButtonNode
    type="button"
    doubleWide={props.doubleWide}
    onClick={props.onClick}
  >
    {props.children}
  </ButtonNode>
);

export default Button;