import React from 'react';

// import './navbar-search.css'
import SearchIconSVG from '../../svg/search-icon-svg.js';

import style from './navbar-search.css';

class NavbarSearch extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      searchInputValue : ""
    }
  }
  render(){
    return (
      <div className={style.search_box}>
        <input type='text' value={this.state.searchInputValue} onChange={(e)=>this.setState({searchInputValue:e.target.value})} className={style.search_input} placeholder='search'/>
        <button className={style.search_button} >
          <SearchIconSVG ></SearchIconSVG>
        </button>
      </div>
    );
  }
}

export default NavbarSearch;