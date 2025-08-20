import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <h1>ServiceCo</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Header;
