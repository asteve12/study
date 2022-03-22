import React,{useState} from "react";
//styles
import style from "./chats.module.css"
//component

import Sidebar from "../../components/Home/sidebar/sidebar"
import ChatCom from "../../components/chat/chat"



 const ChatsHomePage:React.FC =(props)=>{
   const [displayChatPage,setChatPage] = useState(false)

   const chatPageHandler = () =>{
     setChatPage(true)
   }

    return (
      <section className={style.ChatPageWrapper}>
        <Sidebar></Sidebar>
        <ChatCom
          status={displayChatPage}
          handleChatPage={chatPageHandler}
        ></ChatCom>
      </section>
    );
}



export default ChatsHomePage;