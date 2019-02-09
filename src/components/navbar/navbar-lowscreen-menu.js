import React from 'react';
import NavbarSearch from './navbar-search'


import style from './navbar-lowscreen-menu.css';

const NavbarLowscreenMenu =(props)=>{
  return (
      <div className={style.container}>
        <div className={style.menu}>
          <div className={style.flex_row}>
            <div className={style.col}>
              <div className={style.item +" " +style.active}>home</div>
              <div className={style.item}>contact</div>
              <div className={style.item}>about</div>
            </div>
            <div className={style.col}>
              <div className={style.item}>articels</div>              
            </div>
            <div className={style.col}>
              <div className={style.item}>courses</div>              
            </div>
            <div className={style.col}>
              <div className={style.login}>login</div>
              <div className={style.signup}>register</div>
            </div>
          </div>
          <div className={style.flex_row}>
            <div className={style.col}>
              <NavbarSearch></NavbarSearch>
            </div>
          </div>
        </div>
        <div className={style.down_triangle}></div>
      </div>
  );
}

export default NavbarLowscreenMenu;