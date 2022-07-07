import Component from '../components/Calculator';
import styles from './Calculator.module.css';

const Calculator = () => (
  <section className={styles.Calculator}>
    <h1>Lets do some math!</h1>
    <Component />
  </section>
);

export default Calculator;
