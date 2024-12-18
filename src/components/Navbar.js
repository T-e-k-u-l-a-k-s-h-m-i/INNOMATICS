// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav >
      <Link to="/INNOMATICS/dashboard" >Dashboard</Link>
      <Link to="/INNOMATICS/register">Register Student</Link>
      <Link to="/INNOMATICS/students">Student List</Link>
    </nav>
  );
};

export default Navbar;
