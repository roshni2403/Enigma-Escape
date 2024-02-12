import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">TravelBooker</Link>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/hotels">Hotels</Link></li>
          <li><Link to="/flights">Flights</Link></li>
          <li><Link to="/contact">Contact</Link></li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
