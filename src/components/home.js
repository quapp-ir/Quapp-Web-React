import React from 'react';
import Navbar from './navbar/navbar';
import PostOverview from './post-overview';

import im from '../images/web-development.jpg';

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
  return (
    <div className='home'>
      <Navbar />
      <div style={{width:'30vw'}}>
        <PostOverview 
          creator="arash amigh"
          createdAt={today}
          summary="CSS3 introduces new units that are measured relative to the viewport, which is the window in this case. These are vh and vw, which measure viewport height and width, respectively. Here is a simple CSS only solution:"
          image={im}
        />
        <br></br>
        <PostOverview />
      </div>
    </div>
  );
}

export default Home;