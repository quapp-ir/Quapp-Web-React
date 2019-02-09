import React from 'react';

import style from './post-full.css';

const PostFull = (props)=>{
  return (
    <div className={style.post_full}>
      <br></br>
      <div className={style.title}>
      	<h1>{props.title}</h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <img src={props.post.image} className={style.image} alt="loading..."/>
      <br></br>
      <div className={style.text}>
      	<p>{props.post.text}</p>
      </div>
      <div className={style.footer}>
      	<div><small>created by <small>{props.post.creator}</small> at<small> {props.post.createdAt}</small></small></div>
      </div>
    </div>
  );
}

export default PostFull;