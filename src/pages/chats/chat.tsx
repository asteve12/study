import React from "react";
//styles
import style from "./chats.module.css"
//component

import Sidebar from "../../components/Home/sidebar/sidebar"



 const ChatsHomePage:React.FC =(props)=>{
    return (
      <section className={style.ChatPageWrapper}>
        <Sidebar></Sidebar>
      </section>
    );
}



export default ChatsHomePage;