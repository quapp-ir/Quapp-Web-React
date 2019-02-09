import React from 'react';

import style from './footer.css';

import TelegramSVG from '../../svg/telegram-svg';
import TwitterSvg from '../../svg/twitter-svg';
import InstagramPNG from '../../images/instagram.png';

const Footer = (props)=>{
  return (
    <div className={style.footer}>
      <div className={style.top_section}>
        <div className={style.col}>
          <h4><b>About us</b></h4>
          <ul>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        <div className={style.col}>
          <h4><b>Articles</b></h4>
          <ul>
            <li>React.js</li>
            <li>Algorithms</li>
            <li>Hack and security</li>
            <li>Backend and node.js</li>
          </ul>
        </div>
        <div className={style.col}>
          <h4><b>Courses</b></h4>
          <ul>
            <li>React.js</li>
            <li>Algorithms</li>
            <li>Hack and security</li>
            <li>Backend and node.js</li>
          </ul>
        </div>
        <div className={style.col}>
          <h4><b>Subscrbe</b></h4>
        </div>
      </div>
      <div className={style.middle_line}></div>
      <div className={style.col}>
        <div className={style.row}>
          <div className={style.social_icon}>
            <TwitterSvg className={style.social_icon} />
          </div>
          <img className={style.social_icon} src={InstagramPNG} style={{width:"24px",height:"24px"}} alt="" />
          <div className={style.social_icon}>
            <TelegramSVG />
          </div>
        </div>
        <div className={style.row}>
          Copyright © 2019 Quapp.ir All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;