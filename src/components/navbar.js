import React from 'react';

import NavbarSearch from './navbar-search';
import ListNavSVG from '../svg/list-nav-svg';

import  './navbar.css';

const Navbar = (props)=>{
  return (
    <nav>
      <ul className='navbar'>
        <li className="login">ثبت نام</li>
        <li className="signup">ورود</li>
        <NavbarSearch></NavbarSearch>
        <li className='nav-item'>درباره ما</li>
        <li className='nav-item'>پست ها</li>
        <li className='nav-item active'>صفحه نخست</li>
        <li className='nav-item'>Logo</li>
        <div className='menu-icon'><ListNavSVG width='40px' height='40px'></ListNavSVG></div>
      </ul>
    </nav>
  );
}

export default Navbar