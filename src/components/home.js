import React from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

import im from '../images/web-development.jpg';
import im2 from '../images/algorithm.png';

import style from './home.css';

const Home = (props)=>{
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  
  if (dd < 10) {
    dd = '0' + dd;
  }
  
  if (mm < 10) {
    mm = '0' + mm;
  }
  
  today = mm + '/' + dd + '/' + yyyy;

  const posts = [
    {
      id:0,
      creator:"arash amigh",
      createdAt:today,
      summary:"CSS3 introduces new units that are measured relative to the viewport, which is the window in this case. These are vh and vw, which measure viewport height and width, respectively. Here is a simple CSS only solution:",
      image:im,
      title:"How to master react",
    },
    {
      id:1,
      creator:"arash amigh",
      createdAt:today,
      summary:"CSS3 introduces new units that are measured relative to the viewport, which is the window in this case. These are vh and vw, which measure viewport height and width, respectively. Here is a simple CSS only solution:",
      image:im,
      title:"How to master react",
    }
  ]
  return (
    <div className='home' style={{height:"2000px"}}>
      <img src={im2} alt="loding" className={style.top_image}></img>
      <Navbar />
      <Footer></Footer>
    </div>
  );
}

export default Home;