import React, { Component } from 'react'

import CalculatorComponent from '../components/Calculator';

import { MAX_DISPLAY_VALUE } from '../utils';

class Calculator extends Component {
  state = {
    storedValue: 0,
    displayValueInteger: 0,
    displayValueFormatted: '0',
    queuedOperation: null,
  }

  formatDisplayValue = number =>
    Number(`${number}`).toLocaleString('en', { useGrouping: true });

  handleNumberClick = number => {
    const updatedValue = 10 * this.state.displayValueInteger + number;

    if (updatedValue > MAX_DISPLAY_VALUE) return;

    this.setState({
      displayValueInteger: updatedValue,
      displayValueFormatted: this.formatDisplayValue(updatedValue),
    });
  }

  render() {
    return (
      <CalculatorComponent
        displayValue={this.state.displayValueFormatted}
        onNumberClick={this.handleNumberClick}
      />
    );
  }
}

export default Calculator;