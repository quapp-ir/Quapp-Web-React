import React from 'react';



import NavbarSearch from './navbar-search';
import NavbawLowscreenDropdown from './navbar-lowscreen-dropdown'; 

import QuappSvg from '../../svg/quapp-svg';

import  './navbar.css';

const Navbar = (props)=>{
  return (
    <nav >
      <ul className='navbar'>
        <li className="login">ثبت نام</li>
        <li className="signup">ورود</li>
        <NavbarSearch optStyle="nav-item"></NavbarSearch>
        <li className='nav-item nav-hover'>درباره ما</li>
        <li className='nav-item nav-hover'>پست ها</li>
        <li className='nav-item nav-hover active'>صفحه نخست</li>
        <li className='nav-hover menu-icon' style={{padding:0}}><NavbawLowscreenDropdown></NavbawLowscreenDropdown></li>
        <li className=''><QuappSvg width="50px" height="50px"></QuappSvg></li>
      </ul>
    </nav>
  );
}

export default Navbar