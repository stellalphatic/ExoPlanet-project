import React from 'react';

function Header() {
  return (
    <header>
      <h1>Exoplanet Explorer</h1>
      <nav >
        <ul>
          <li className="HeaderItem"><a  href="#">Home</a></li>
          <li className="HeaderItem"><a href="#">Our Work</a></li>
          <li className="HeaderItem"><a href="#">Explore Exoplanets</a></li>
          <li className="HeaderItem"><a href="#">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;