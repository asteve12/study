import React from "react"
import {Link} from "react-router-dom"
//styles
import style from "./chatHeader.module.css"
//icons
import { IoMdNotificationsOutline } from 'react-icons/io';
//interfaces
import chatHeaderInterface from "./interface"



const ChatHeader: React.FC<chatHeaderInterface> = (props) => {
  return (
    <div className={style.comHeader}>
      <p className={style.titleStyle}>{props.title}</p>
      <section className={style.comUserPics}>
        <IoMdNotificationsOutline
          className={style.comBellIcon}
        ></IoMdNotificationsOutline>
        &nbsp; &nbsp; &nbsp;
        <Link className={`${style.comPicsCon}`} to='/Profile'></Link>
      </section>
    </div>
  );
};

export default ChatHeader;