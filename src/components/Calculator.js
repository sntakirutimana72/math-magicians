import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

class CalcLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: '', expression: 0 };
  }

  render() {
    const { expression, result } = this.state;

    return (
      <div className="calc-logger">
        <div>{expression}</div>
        <div>{result}</div>
      </div>
    );
  }
}

const CalcButton = ({ padkey, className }) => (
  <button type="button" className={`calc-btn${className}`}>{padkey}</button>
);

CalcButton.propTypes = {
  padkey: PropTypes.string.isRequired,
  className: PropTypes.string,
};
CalcButton.defaultProps = { className: '' };

const Calculator = () => (
  <div className="calc-wrapper">
    <div className="calc">
      <CalcLogger />
      <div>
        <div className="calc-pad">
          <CalcButton padkey="AC" />
          <CalcButton padkey="+/-" />
          <CalcButton padkey="%" />
          <CalcButton padkey="&#247;" className=" func-btn" />
          <CalcButton padkey="7" />
          <CalcButton padkey="8" />
          <CalcButton padkey="9" />
          <CalcButton padkey="X" className=" func-btn" />
          <CalcButton padkey="4" />
          <CalcButton padkey="5" />
          <CalcButton padkey="6" />
          <CalcButton padkey="-" className=" func-btn" />
          <CalcButton padkey="1" />
          <CalcButton padkey="2" />
          <CalcButton padkey="3" />
          <CalcButton padkey="+" className=" func-btn" />
          <CalcButton padkey="0" className=" zero-btn" />
          <CalcButton padkey="." />
          <CalcButton padkey="=" className=" func-btn" />
        </div>
      </div>
    </div>
  </div>
);

export default Calculator;
