export const MAX_DISPLAY_VALUE = 999999999;

export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const EQUALS = 'EQUALS';
export const DECIMAL = 'DECIMAL';
export const CLEAR = 'CLEAR';
export const SIGN = 'SIGN';
export const PERCENT = 'PERCENT';
export const NUMBER = 'NUMBER';

export const buttons = [
  { symbol: 'C', name: CLEAR },
  { symbol: '±', name: SIGN },
  { symbol: '%', name: PERCENT },
  { symbol: '÷', name: DIVIDE },
  { symbol: 7, name: NUMBER },
  { symbol: 8, name: NUMBER },
  { symbol: 9, name: NUMBER },
  { symbol: '×', name: MULTIPLY },
  { symbol: 4, name: NUMBER },
  { symbol: 5, name: NUMBER },
  { symbol: 6, name: NUMBER },
  { symbol: '−', name: SUBTRACT },
  { symbol: 1, name: NUMBER },
  { symbol: 2, name: NUMBER },
  { symbol: 3, name: NUMBER },
  { symbol: '+', name: ADD },
  { symbol: 0, name: NUMBER },
  { symbol: '.', name: DECIMAL },
  { symbol: '=', name: EQUALS },
];

export const getButtonKey = button =>
  button.name !== NUMBER ? button.name : button.symbol;

export const determineClickFunction = (button, props) => {
  switch (button.name) {
    case NUMBER:
      return () => props.onNumberClick(button.symbol);

    default:
      return () => { console.log(button.name) }
  }
}