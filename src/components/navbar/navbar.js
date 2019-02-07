import React from 'react';



import NavbarSearch from './navbar-search';
import NavbawLowscreenDropdown from './navbar-lowscreen-dropdown'; 

import QuappSvg from '../../svg/quapp-svg';

import style from './navbar.css';

const Navbar = (props)=>{
  return(
      <div className={style.navbar}>
        <div className={style.left_group}>
          <div className={style.left_group_item +" "+ style.login}>login</div>
          <div className={style.left_group_item +" "+style.signup}>sign up</div>
        </div>
        <div className={style.center_left_group}>
          <div className={style.icon}><QuappSvg width="50px" height="50px"></QuappSvg>uapp.ir</div>
        </div>
        <div className={style.center_right_group}>
          <div className={style.center_right_group_item+" "+style.center_right_group_active}>home</div>
          <div className={style.center_right_group_item}>articles</div>
          <div className={style.center_right_group_item}>courses</div>
          <div className={style.center_right_group_item}>contact</div>
          <div className={style.center_right_group_item}>about</div>
        </div>
        <div className={style.right_group}>
          <NavbarSearch ></NavbarSearch>
          {/* salam */}
        </div>
        {/* <li className='nav-hover menu-icon' style={{padding:0}}><NavbawLowscreenDropdown></NavbawLowscreenDropdown></li> */}
      </div>
  );
}

export default Navbar