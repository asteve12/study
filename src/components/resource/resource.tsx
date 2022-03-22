import React from 'react';
//style
import style from './resource.module.css';
//icons

import { MdOutlineAdd } from 'react-icons/md';
//component
import ResourceBox from '../../ui/resource/resource';
// import ChatDetail from '../chatDetail/chatDetail';
import ResourceDetail from "../resoureceDetail/resourceDetail"
import { Link } from 'react-router-dom';
import ChatHeader from '../../ui/chatHeader/chatHeader';
//icons
import searchIcon from '../../assets/resource/search.svg';
//interface
import resourceInterface from './interface';

const ChatComp: React.FC<resourceInterface> = (props) => {
  return (
    <section className={style.ChatMainComp}>
      {/* <div className={style.comHeader}>
          <p>Chats</p>
          <section className={style.comUserPics}>
            <IoMdNotificationsOutline
              className={style.comBellIcon}
            ></IoMdNotificationsOutline>
            &nbsp; &nbsp; &nbsp;
            <Link className={`${style.comPicsCon}`}  to='/Profile'>

            </Link>
          </section>
        </div> */}
      <ChatHeader title='Chats'></ChatHeader>

      <div className={style.combody}>
        <div className={style.chatCont}>
          <section className={style.chatContHeader}>
            <div className={style.chatText}>
              <h1>Resources</h1>
              <p>Class notes, PDFs, videos. All for you.</p>
            </div>
            <button className={style.chatAddBtnCon}>
              <img src={searchIcon} alt='' />
            </button>
          </section>
          <br></br>
          <br></br>
          <div className={style.chatContainer}>
            <ResourceBox handleResChange={props.handleResChange}></ResourceBox>
            <br></br>
            <ResourceBox handleResChange={props.handleResChange}></ResourceBox>
            <br></br>
            <ResourceBox handleResChange={props.handleResChange}></ResourceBox>
            <br></br>
            <ResourceBox handleResChange={props.handleResChange}></ResourceBox>
            <br></br>
            {/* <ChatBox></ChatBox>
              <br></br>
              <ChatBox></ChatBox>
              <br></br> */}
          </div>
        </div>
        <div className={style.chatDetailPage}>
          {props.status ? (
            <ResourceDetail></ResourceDetail>
          ) : (
            <div className={style.selectFile}>
              <p className={style.selected}>Please select a file</p>
              <p className={style.toDisplay}>Nothing to display</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatComp;
