import React,{useState} from "react";
//style 
import style from "./chat.module.css"
//icons

import { MdOutlineAdd } from 'react-icons/md';
//component
import ChatBox, { MbChatBox } from '../../ui/Chat/chat';
import ChatDetail from "../chatDetail/chatDetail"
import {Link} from "react-router-dom"
import ChatHeader from "../../ui/chatHeader/chatHeader"
import {MobileSidebar} from "../../components/Home/sidebar/sidebar"
//icons
import chatIcon from "../../assets/chat/chatIcon.svg"
//interface
import chatInterface, { mbChatProps } from './interface';




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
      <div className={style.chatHeaderWrapper}>
        <ChatHeader title='Chats'></ChatHeader>
      </div>

      <div className={style.combody}>
        <div className={style.chatCont}>
          <section className={style.chatContHeader}>
            <div className={style.chatText}>
              <p className={style.recentText}>Recent Chats</p>
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
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
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



export const MobileChatComp: React.FC<mbChatProps> = (props) => {
  const [showChat,setShowChat] = useState(false)

  const showChatHandler = (e:React.MouseEvent)=>{
    setShowChat(!showChat);

  }
  return (
    <section className={style.mbChatPage}>
      {!showChat ? (
        <div className={style.mbchatCont}>
          <section className={style.chatContHeader}>
            <div className={style.mbchatText}>
              <h1>Recent Chats</h1>
              <p>Speak with tutors privately</p>
            </div>
            <button className={style.chatAddBtnCon}>
              <MdOutlineAdd className={style.chatAddBtn}></MdOutlineAdd>
            </button>
          </section>
          <br></br>
          <br></br>
          <div className={style.mbchatContainer}>
            <div onClick={showChatHandler}>
              <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            </div>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
          </div>
          <MobileSidebar></MobileSidebar>
        </div>
      ) : (
        <ChatDetail showChatHandler={showChatHandler}></ChatDetail>
      )}
    </section>
  );
};