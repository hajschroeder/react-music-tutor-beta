import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NavbarItems from './NavbarItems';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Header from './Header';

function Navbar() {
  const [navbarState, setNavbarState] = useState(false);

  const showNavbar = () => setNavbarState(!navbarState);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showNavbar} />
          </Link>
          <Header />
        </div>
        <nav className={navbarState ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showNavbar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavbarItems.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
