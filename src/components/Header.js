import Navbar from './Navbar';
import Logo from '../images/AMEX_Logo.png';
import Title from '../images/Swag_UI.png';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img style={{ width: 70, height: 70 }} src={Logo} alt="AMEX Logo" />
          <img style={{ width: 250, height: 70, paddingLeft: 30 }} src={Title} alt="AMEX Logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
