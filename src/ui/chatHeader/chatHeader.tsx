import React from "react"
import {Link} from "react-router-dom"
//styles
import style from "./chatHeader.module.css"
//icons
import { IoMdNotificationsOutline } from 'react-icons/io';
//interfaces
import chatHeaderInterface from "./interface"
//types
import {RootState,AppDispatch} from "../../redux/store"
import {useSelector} from "react-redux"




const ChatHeader: React.FC<chatHeaderInterface> = (props) => {
  const signedUser = useSelector((state: RootState) => state.login);
  return (
    <div className={style.comHeader}>
      <p className={style.titleStyle}>{props.title}</p>
      <section className={style.comUserPics}>
        <IoMdNotificationsOutline
          className={style.comBellIcon}
        ></IoMdNotificationsOutline>
        &nbsp; &nbsp; &nbsp;
        <Link className={`${style.comPicsCon}`} to='/Profile'>
          <img className={`${style.comPicsCon}`}  src={signedUser.img} alt='' />
        </Link>
      </section>
    </div>
  );
};

export default ChatHeader;