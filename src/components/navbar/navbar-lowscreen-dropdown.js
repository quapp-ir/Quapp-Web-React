import React from 'react';
import NavbarSearch from './navbar-search'

import ListNavSVG from '../../svg/list-nav-svg';

import './navbar-lowscreen-dropdown.css';

const NavbarLowscreenDropdown = (props)=>{
  return (
    <div className="dropdown" style={{padding:"20px"}}>
      <ListNavSVG width='50px' height='50px'  />
      <div className="dropdown-content">
        <div className='dropdown-content-item'>درباره ما</div>
        <div className='dropdown-content-item'>پست ها</div>
        <div className='dropdown-content-item'>صفحه نخست</div>
        {/* <div className="dropdown-content-item"> */}
          <NavbarSearch></NavbarSearch>
        {/* </div> */}
      </div>
    </div>
  );
}

export default NavbarLowscreenDropdown;