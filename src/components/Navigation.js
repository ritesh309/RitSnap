import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>

        <li><NavLink to="/beach">Beaches</NavLink></li>
        <li><NavLink to="/world">World</NavLink></li>
        <li><NavLink to="/india">India</NavLink></li>
        <li><NavLink to="/bird">Birds</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
        <li><NavLink to="/fruit">Fruit</NavLink></li>
        <li><NavLink to="/avenger">Avenger</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
