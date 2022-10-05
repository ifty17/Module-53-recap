import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css"

const Header = () => {
    return (
      <div className="header">
        <nav>
          <NavLink className={({isActive}) => isActive ? 'active' : undefined} to="/home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/friends">Friends</NavLink>
          <NavLink to='/post'>Posts</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <h3>Common header</h3>
      </div>
    );
};

export default Header;