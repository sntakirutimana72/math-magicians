import { Link } from 'react-router-dom';

const Navbar = () => (
  <Header>
    <Link exact path="/">Math Magicians</Link>
    <ul>
      <li><Link path="/">Home</Link></li>
      <li><Link path="/calculator">Calculator</Link></li>
      <li><Link path="/quote">Quote</Link></li>
    </ul>
  </Header>
);

export default Navbar;
