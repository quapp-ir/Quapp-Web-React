import React from 'react';



import style from './post-overview.css';

const PostOverview = (props)=>{
    return (
      <div className={style.post_overview}>
        <img src={props.image} className={style.image}></img>
        
        <div className={style.header}>
          <h1>{props.title}</h1>
        </div>
        <div className={style.detail}>
          <div><small>created by <small>{props.creator}</small> at<small> {props.createdAt}</small></small></div>
        </div>
        <div className={style.text}>
          <br></br>
          <p>{props.summary}</p>
        </div>
        <button className={style.read_more}>Read more</button>
      </div>
    );
}

export default PostOverview;