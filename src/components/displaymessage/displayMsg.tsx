import React from "react"
//styles 
import style from "./displayMsg.module.css"
//interface\
import displayInter from "./interface"




const displayMsg: React.FC<displayInter> = (props) => {
  
if(props.img){
   return (
     <section className={style.mainText} style={{ flexDirection: 'column' }}>
       <div
         className={
           props.identity === 'sender' ? style.textCont : style.receiverStyle
         }
       >
         <section className={style.imgWrapper}>
           <img src={props.img} alt='' />
         </section>

         <p>{props.chats}</p>
       </div>
     </section>
   );
}
else if(props.Audio){
    return (
      <section className={style.mainText}>
        <figure>
          <figcaption>Listen to the T-Rex:</figcaption>
          <audio controls src='/media/cc0-audio/t-rex-roar.mp3'>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </section>
    );

}
else if (props.video){
    return (
      <section className={style.mainText}>
        <video controls width="250">

    <source src="/media/cc0-videos/flower.webm"
            type="video/webm"/>

    <source src={props.video}
            type="video/mp4"/>

    Sorry, your browser doesn't support embedded videos.
</video>

        <p
          className={
            props.identity === 'sender' ? style.textCont : style.receiverStyle
          }
        >
          {props.chats}
        </p>
      </section>
    );
}

  
  return (
    <section className={style.mainText}>
      
        <p className={props.identity === "sender" ? style.textCont:style.receiverStyle}>
          {props.chats}
        </p>
      
    </section>
  );
};
export default displayMsg;