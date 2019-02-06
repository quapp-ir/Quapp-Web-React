import React from 'react';

import PostOverview from './post-overview';

const PostOverviewList = (props)=>{
  const posts = props.posts.map((item)=>{
    return (
      <div key={item.id}>
        <PostOverview
          title={item.title}
          creator={item.creator}
          createdAt={item.createdAt}
          summary={item.summary}
          image={item.image}
          id={item.id}
        />
        <br></br>
        <br></br>
      </div>
    );
  })
  return(
    <div >
      {posts}
    </div>  
  );
}

export default PostOverviewList;