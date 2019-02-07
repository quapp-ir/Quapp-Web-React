import React from 'react';
import Navbar from './navbar/navbar';
import PostOverviewList from './post/post-overview-list';
import PostFull from './post/post-full';

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
    <div className='home'>
      <Navbar />
      <div style={{position:"absolute",left:'25vw',width:"50vw"}}>
        {/* <PostOverviewList 
          posts={posts}
        /> */}
        <PostFull 
          id={posts[0].id}
          creator={posts[0].creator}
          createdAt={posts[0].createdAt}
          text={posts[0].summary}
          image={posts[0].image}
          title={posts[0].title}
        />
         <PostFull 
          id={posts[0].id}
          creator={posts[0].creator}
          createdAt={posts[0].createdAt}
          text={posts[0].summary}
          image={posts[0].image}
          title={posts[0].title}
        />
         <PostFull 
          id={posts[0].id}
          creator={posts[0].creator}
          createdAt={posts[0].createdAt}
          text={posts[0].summary}
          image={posts[0].image}
          title={posts[0].title}
        />
      </div>
    </div>
  );
}

export default Home;