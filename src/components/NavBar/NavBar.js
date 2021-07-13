import React from 'react';
import { NavLink } from 'react-router-dom';
import routerPath from '@/libraries/routerPath';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <NavLink exact to={routerPath.ROOT} activeClassName='active'>
        Home
      </NavLink>
    </div>
  );
};

export default NavBar;
