import React from "react";
//style 
import style from "./chat.module.css"
//icons

import { MdOutlineAdd } from 'react-icons/md';
//component
import ChatBox from "../../ui/Chat/chat"
import ChatDetail from "../chatDetail/chatDetail"
import {Link} from "react-router-dom"
import ChatHeader from "../../ui/chatHeader/chatHeader"
//icons
import chatIcon from "../../assets/chat/chatIcon.svg"
//interface
import chatInterface from "./interface"



const ChatComp: React.FC<chatInterface> = (props) => {
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
              <h1>Recent Chats</h1>
              <p>Speak with tutors privately</p>
            </div>
            <button className={style.chatAddBtnCon}>
              <MdOutlineAdd className={style.chatAddBtn}></MdOutlineAdd>
            </button>
          </section>
          <br></br>
          <br></br>
          <div className={style.chatContainer}>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage} ></ChatBox>
            <br></br>
            {/* <ChatBox></ChatBox>
              <br></br>
              <ChatBox></ChatBox>
              <br></br> */}
          </div>
        </div>
        <div className={style.chatDetailPage}>
          {props.status ? (
            <ChatDetail></ChatDetail>
          ) : (
            <img src={chatIcon} alt='' />
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatComp;;