import React from "react";
//styles
import style from "./chat.module.css"
//icons
import {IoCheckmarkDoneOutline} from "react-icons/io5"
//interface
import chatInterface from "./interface"
import {useParams} from "react-router-dom"




const ChatBox: React.FC<chatInterface> = (props) => {
  const { username } = useParams()
  return (
    <section className={style.chatBoxCont} onClick={props.handleChatPage}>
      <div className={style.messageBox}>
        <section className={style.picsCont}></section>
        <section className={style.userNameBox}>
          <p className={style.userName}>
            <b>{props.username}</b>
          </p>
          <p className={style.message}>
            <span style={props.latestMsg.read === true ? {color:""}:{} }>
              <IoCheckmarkDoneOutline></IoCheckmarkDoneOutline>
            </span>
            &nbsp; {props.latestMsg.message}
          </p>
        </section>
      </div>
      <div className={style.timeBox}>
        <p className={style.timeText}>{props.latestMsg.time}</p>
        {username === props.username ? (
          <></>
        ) : (
          <>
            {!props.unread || props.unread === 0 ? null : (
              <p className={style.messageCount}>{props.unread}</p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ChatBox;


export const MbChatBox: React.FC<chatInterface> = (props) => {
  return (
    <section className={style.mbchatBoxCont} onClick={props.handleChatPage}>
      <div className={style.messageBox}>
        <section className={style.picsCont}></section>
        <section className={style.userNameBox}>
          <p className={style.userName}>
            <b>Kaitlyn</b>
          </p>
          <p className={style.message}>
            <span>
              <IoCheckmarkDoneOutline></IoCheckmarkDoneOutline>
            </span>
            &nbsp; Have a good one!
          </p>
        </section>
      </div>
      <div className={style.timeBox}>
        <p className={style.timeText}>3:02 PM</p>
        <p className={style.messageCount}>2</p>
      </div>
    </section>
  );
};