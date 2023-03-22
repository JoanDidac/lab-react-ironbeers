import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container"> {/* Add class here */}
      <h1>Welcome to <strong>IronBeers!</strong></h1>
      <ul className="home-links"> {/* Add class here */}
        <li><Link to="/beers">All Beers</Link></li>
        <li><Link to="/random-beer">Random Beer</Link></li>
        <li><Link to="/new-beer">New Beer</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
