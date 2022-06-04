import { Link } from 'react-scroll';

import { imgs } from '../../consts';
import './Navbar.scss';

const linkItems = ['home', 'about', 'menu', 'contact'];

type Props = {};

export default function Navbar({}: Props) {
  const renderedList = linkItems.map((linkItem, index) => {
    return (
      <li key={index} className="navbar-link">
        <Link
          activeClass="navbar-link-active"
          to={linkItem}
          spy={true}
          smooth={true}
          duration={800}
        >
          {linkItem}
        </Link>
      </li>
    );
  });

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={imgs.logo} alt="logo" />
      </div>

      <ul className="navbar-links">{renderedList}</ul>

      <div className="navbar-order">
        <a href="#login" className="navbar-order-link">
          Log In / Register
        </a>
        <div className="divider" />
        <a href="/" className="navbar-order-link">
          Order Now
        </a>
      </div>
    </nav>
  );
}
