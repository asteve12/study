import React,{useState} from "react";
//styles
import style from "./chats.module.css"
//component

import Sidebar from "../../components/Home/sidebar/sidebar"
import ChatCom from "../../components/chat/chat"
import {MobileChatComp} from "../../components/chat/chat"



 const ChatsHomePage:React.FC =(props)=>{
   const [displayChatPage,setChatPage] = useState(false)

   const chatPageHandler = () =>{
     setChatPage(true)
   }

    return (
      <section className={style.ChatPageWrapper}>
        <div className={style.mbWrapper}>
          <Sidebar></Sidebar>
        </div>
        <ChatCom
          status={displayChatPage}
          handleChatPage={chatPageHandler}
        ></ChatCom>
        <MobileChatComp handleChatPage={chatPageHandler}></MobileChatComp>
      </section>
    );
}



export default ChatsHomePage;