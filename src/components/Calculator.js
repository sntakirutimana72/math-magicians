import React, { useState } from 'react';
import CalcLogger from './calc_logger';
import CalcButton from './calc_button';
import calculate from '../logic/calculate';
import './Calculator.css';

const btnConfigs = [
  {
    name: 'AC',
  },
  {
    name: '+/-',
  },
  {
    name: '%',
  },
  {
    name: '÷',
    classes: 'func-btn',
  },
  {
    name: '7',
  },
  {
    name: '8',
  },
  {
    name: '9',
  },
  {
    name: 'x',
    classes: 'func-btn',
  },
  {
    name: '4',
  },
  {
    name: '5',
  },
  {
    name: '6',
  },
  {
    name: '-',
    classes: 'func-btn',
  },
  {
    name: '1',
  },
  {
    name: '2',
  },
  {
    name: '3',
  },
  {
    name: '+',
    classes: 'func-btn',
  },
  {
    name: '0',
    classes: 'zero-btn',
  },
  {
    name: '.',
  },
  {
    name: '=',
    classes: 'func-btn',
  },
];

const Calculator = () => {
  const [state, setState] = useState({});

  const onExpessionChange = (buttonText) => {
    const newState = calculate(state, buttonText);
    setState(() => newState);
  };

  const { next = 0, operation, total } = state;

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
            {btnConfigs.map((btn) => (
              btn.classes ? (
                <CalcButton
                  key={btn.name}
                  padkey={btn.name}
                  classes={btn.classes}
                  changeExpression={onExpessionChange}
                />
              ) : (
                <CalcButton key={btn.name} padkey={btn.name} changeExpression={onExpessionChange} />
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
