import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header"> 
      <Link to="/" className="header-link">IronBeers</Link> 
    </header>
  );
};

export default Header;
