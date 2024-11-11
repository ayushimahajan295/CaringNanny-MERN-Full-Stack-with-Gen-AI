import React, { useState } from 'react';
import profileIcon from '../assets/frontend_assets/profile_icon.png';
import cartIcon from '../assets/frontend_assets/cart_icon.png';
import menuIcon from '../assets/frontend_assets/menu_icon.png';
import dropdownIcon from '../assets/frontend_assets/dropdown_icon.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-6 mb-20 mx-2 flex items-center justify-between w-full">
      <div className="flex items-center">
        <Link to="/" className="font-bold text-xl text-gray-800">Caring Nanny</Link>
      </div>
      
      {/* Desktop Links */}
      <ul className="hidden md:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/babysitter" className="flex flex-col items-center gap-1">
          <p>BABYSITTER</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
        </NavLink>
      </ul>

      {/* Profile and Cart Icons */}
      <div className="hidden md:flex items-center gap-6">
        <div className="relative">
          <img
            onClick={handleDropdownToggle}
            className="w-5 cursor-pointer"
            src={profileIcon}
            alt="Profile"
          />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
              <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Up</Link>
              <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login</Link>
              <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Profile</Link>
              <div onClick={logout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Sign Out</div>
              <a href="http://localhost:5174" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign In as Admin</a>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={cartIcon} className="w-5 min-w-5" alt="Cart" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-gray-800">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-90 transition-all duration-300 flex items-center justify-center ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        style={{ zIndex: 1000 }}
      >
        <ul className="flex flex-col items-center gap-6 text-xl text-white">
          <NavLink to="/" onClick={toggleMenu}>
            HOME
          </NavLink>
          <NavLink to="/babysitter" onClick={toggleMenu}>
            BABYSITTER
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu}>
            ABOUT
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            CONTACT
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
