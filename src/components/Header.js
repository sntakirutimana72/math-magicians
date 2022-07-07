import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.Header}>
    <Link to="/" className={styles.Title}>Math Magicians</Link>
    <nav>
      <ul className={styles.NavUl}>
        <li><Link to="/" className={styles.NavLink}>Home</Link></li>
        <li><Link to="/calculator" className={styles.NavLink}>Calculator</Link></li>
        <li><Link to="/quote" className={styles.NavLink}>Quote</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
