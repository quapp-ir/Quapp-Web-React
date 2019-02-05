import React from 'react';

import './navbar-search.css'
import SearchIconSVG from '../svg/search-icon-svg.js';

class NavbarSearch extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      searchInputValue : ""
    }
  }
  render(){
    return (
      <li className='search-box'>
        <input type='text' value={this.state.searchInputValue} onChange={(e)=>this.setState({searchInputValue:e.target.value})} className='search-input' placeholder='search'/>
        <button className="search-button" >
          <SearchIconSVG width='50px' height='50px'></SearchIconSVG>
        </button>
      </li>
    );
  }
}

export default NavbarSearch;