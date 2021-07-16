import React from 'react';
import { NavLink } from 'react-router-dom';
import routerPath from '@/libraries/routerPath';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='left-items'>
        <NavLink exact to={routerPath.ROOT} activeClassName='active'>
          Pokédex
        </NavLink>
      </div>
      <div className='right-items'></div>
    </div>
  );
};

export default NavBar;
