import React, { Component } from 'react';
import CalcLogger from './calc_logger';
import CalcButton from './calc_button';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: 0,
      operation: null,
    };
    this.onExpessionChange = this.onExpessionChange.bind(this);
  }

  onExpessionChange(buttonText) {
    const newState = calculate(this.state, buttonText);
    this.setState(() => newState);
  }

  render() {
    const { next, operation, total } = this.state;
    return (
      <div className="calc-wrapper">
        <div className="calc">
          <CalcLogger
            next={next}
            operation={operation}
            total={total}
          />
          <div>
            <div className="calc-pad">
              <CalcButton padkey="AC" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="+/-" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="%" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="&#247;" changeExpression={this.onExpessionChange} classes=" func-btn" />
              <CalcButton padkey="7" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="8" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="9" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="x" changeExpression={this.onExpessionChange} classes=" func-btn" />
              <CalcButton padkey="4" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="5" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="6" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="-" changeExpression={this.onExpessionChange} classes=" func-btn" />
              <CalcButton padkey="1" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="2" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="3" changeExpression={this.onExpessionChange} />
              <CalcButton padkey="+" changeExpression={this.onExpessionChange} classes=" func-btn" />
              <CalcButton padkey="0" changeExpression={this.onExpessionChange} classes=" zero-btn" />
              <CalcButton padkey="." changeExpression={this.onExpessionChange} />
              <CalcButton padkey="=" changeExpression={this.onExpessionChange} classes=" func-btn" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
