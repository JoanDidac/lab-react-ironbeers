import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-icon"></Link>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/beers" className="nav-link">Beers</Link></li>
        <li><Link to="/random-beer" className="nav-link">Random Beer</Link></li>
        <li><Link to="/new-beer" className="nav-link">New Beer</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
