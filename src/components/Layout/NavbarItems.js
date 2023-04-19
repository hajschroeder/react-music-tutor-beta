import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
const NavbarItems  = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'About',
      path: '/about',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'Learning',
      path: '/learning',
      icon: <FaIcons.FaMusic />,
      cName: 'nav-text'
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    
  ];
  


export default NavbarItems;