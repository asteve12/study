import React from "react";
//styles
import style from "./chat.module.css"
//icons
import {IoCheckmarkDoneOutline} from "react-icons/io5"
//interface
import chatInterface from "./interface"
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"




const ChatBox: React.FC<chatInterface> = (props) => {
  const { username } = useParams()
  //@ts-ignore
  const loginUser = useSelector((state)=> state.login )

  

  if (!props.latestMsg) {
    return <></>
  }

  console.log('msg receiver', loginUser.username);
    console.log('sent ', props.receiver);


  

  return (
    <section className={style.chatBoxCont} onClick={props.handleChatPage}>
      <div className={style.messageBox}>
        <img src={loginUser.img} className={style.picsCont}></img>
        <section className={style.userNameBox}>
          <p className={style.userName}>
            <b>{props.username}</b>
          </p>
          <p className={style.message}>
            {props.latestMsg.read ? (
              <span>
                <IoCheckmarkDoneOutline></IoCheckmarkDoneOutline>
              </span>
            ) : (
              <span style={{ color: 'grey' }}>
                <IoCheckmarkDoneOutline></IoCheckmarkDoneOutline>
              </span>
            )}
            &nbsp; {props.latestMsg.message}
          </p>
        </section>
      </div>
      <div className={style.timeBox}>
        {props.latestMsg.time ? (
          <p className={style.timeText}>
            {new Date(parseInt(props.latestMsg.time)).getHours().toString()}:
            {new Date(parseInt(props.latestMsg.time)).getMinutes().toString()}
          </p>
        ) : null}

      
            {!props.unread || props.unread === 0 ? null : (
              <p className={style.messageCount}>{props.unread}</p>
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
        {/* @ts-ignore */}
        {/* <img src={loginUser.img} className={style.picsCont}></img> */}
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