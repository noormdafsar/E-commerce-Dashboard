import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className='flex space-x-14 bg-sky-300 text-light p-5 mb-2 font-serif'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Product</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/sign-up">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/My-Profile">My profile </Link></li>
      </ul>
    </div>
  )
}

export default Nav;
