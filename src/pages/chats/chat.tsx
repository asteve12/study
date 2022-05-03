import React,{useState} from "react";
//styles
import style from "./chats.module.css"
//component

import Sidebar from "../../components/Home/sidebar/sidebar"
import ChatCom from "../../components/chat/chat"
import {MobileChatComp} from "../../components/chat/chat"
import {useParams} from "react-router-dom"



 const ChatsHomePage:React.FC =(props)=>{
   const [displayChatPage,setChatPage] = useState(false)
   const { username } = useParams()
//@ts-ignore
   localStorage.setItem('receiver', username);
   

   const chatPageHandler = () =>{
     setChatPage(true)
   }

    return (
      <section className={style.ChatPageWrapper}>
        <div className={style.mbWrapper}>
          <Sidebar></Sidebar>
        </div>
        <ChatCom status={username ? true:false} handleChatPage={chatPageHandler}></ChatCom>
        <MobileChatComp handleChatPage={chatPageHandler}></MobileChatComp>
      </section>
    );
}



export default ChatsHomePage;