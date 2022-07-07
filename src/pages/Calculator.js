import Component from "../components/Calculator";
import { CalculatorBlock } from './Calculator.css';

const Calculator = () => (
  <section style={CalculatorBlock}>
    <h1>Lets do some math!</h1>
    <Component />
  </section>
);

export default Calculator;
