import React from 'react';


import _ from 'lodash';
import NavbarSearch from './navbar-search';
import NavbarLowscreenMenu from './navbar-lowscreen-menu';

import QuappSvg from '../../svg/quapp-svg';
import ListNavSVG from '../../svg/list-nav-svg'

import style from './navbar.css';

class Navbar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isOpen : false,
      navBarFixed:false
    }
  }

  componentDidMount= ()=> {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount= ()=> {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll =  () =>{
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    let scroll = {
       x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
       y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    };
    if(this.state.navBarFixed){
      if(scroll.y < 200){ 
        this.setState((prevState)=>{
          return {navBarFixed:false}
        })
      }
    }else{
      if(scroll.y > 200)
      this.setState((prevState)=>{
        return {navBarFixed:true}
      })
    }
    
  }

  render(){
    return(
      <div>

        <div className={style.full_nav_container +" "+(this.state.navBarFixed?style.navbar_fix:"")}>
          <div className={style.navbar} >
            <div className={style.left_group}>
              <div className={style.left_group_item +" "+ style.login}>login</div>
              <div className={style.left_group_item +" "+style.signup}>register</div>
            </div>
            <div className={style.center_left_group}>
              <div className={style.icon}><QuappSvg width="50px" height="50px"></QuappSvg>uapp.ir</div>
            </div>
            <div className={style.center_right_group}>
              <div className={style.center_right_group_item+" "+style.center_right_group_active}>
                home
              </div>
              <div className={style.center_right_group_item+" "+style.dropdown}>
                articles
                <div className={style.dropdown_content}>
                  <div className={style.triangle_up}></div>
                  <ul className={style.dropdown_content_list}>
                    <li>React.js</li>
                    <li>Algorithms</li>
                    <li>Hack and security</li>
                    <li>Backend and node.js</li>
                    <li>item 5</li>
                  </ul>
                </div>
              </div>
              <div className={style.center_right_group_item+" "+style.dropdown}>
                courses
                <div className={style.dropdown_content}>
                  <div className={style.triangle_up}></div>
                  <ul className={style.dropdown_content_list}>
                    <li>React.js</li>
                    <li>Algorithms</li>
                    <li>Hack and security</li>
                    <li>Backend and node.js</li>
                    <li>item 5</li>
                  </ul>
                </div>  
              </div>
              <div className={style.center_right_group_item}>contact</div>
              <div className={style.center_right_group_item}>about</div>
            </div>
            <div className={style.right_group}>
              <NavbarSearch ></NavbarSearch>
            </div>
            <div className={style.low_screen_button}>
              <div className={style.icon} onClick={()=>{this.setState((prevState)=>{return {isOpen:!prevState.isOpen}})}}>
                <ListNavSVG  />
              </div>
            </div>
          </div>
          <div className={style.low_screen_menu}>
            {this.state.isOpen?<NavbarLowscreenMenu />:""}
          </div>
        </div>
        <div className={this.state.navBarFixed?style.temp:""}></div>
      </div>
    );
  }
}

export default Navbar