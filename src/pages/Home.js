import styles from './Home.module.css';

const Home = () => (
  <section className={styles.Home}>
    <h1 className={styles.Heading}>Welcome to our page!</h1>
    <p className={styles.Paragraph}>
      {'The “Math Magicians“'}
      {' is a project created under the supervision of Microverse,'}
      {' an online program for software development. The project was created to offer certain features'}
      {' and applications to the end-users, like a Calculator and Quote browser.'}
    </p>
  </section>
);

export default Home;
