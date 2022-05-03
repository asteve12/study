import React from "react"
//styles 
import style from "./displayMsg.module.css"
//interface\
import displayInter from "./interface"




const displayMsg: React.FC<displayInter> = (props) => {
  return (
    <section className={style.mainText}>
      
        <p className={props.identity === "sender" ? style.textCont:style.receiverStyle}>
          {props.chats}
        </p>
      
    </section>
  );
};
export default displayMsg;