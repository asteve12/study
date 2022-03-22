import React from 'react';
//styles
import style from "./videoDiscussion.module.css"
//icons
import LoveIcon from "../../assets/course/love.svg"
import LoveIconfull from '../../assets/course/lovefull.svg';
import chatInterface from "./videointerface"



const VideoDiscussion:React.FC<chatInterface> = (props)=>{

   if(props.type === "videoOverlay"){
        return (
      <section className={style.videoDiscus}>
        <div className={style.profileDetailCont}>
          <section className={style.userPics}></section>
          &nbsp;
          <section className={style.nameCont}>
            <p>Kaiya </p>
            <p>So amazing!!!</p>
          </section>
        </div>
        <div>
          <section className={style.IconCont}>
            <img src={LoveIcon} alt='' />
          </section>
        </div>
      </section>
    );
   

   }
    if (props.type === 'chatContainer') {
      return (
        <section className={style.videoDiscus}>
          <div className={style.profileDetailCont}>
            <section className={style.userPics}></section>
            &nbsp;
            <section className={style.nameContChat}>
              <p className={style.userName}>Kaiya </p>
              <p className={style.userMessage}>So amazing!!!</p>
            </section>
          </div>
          <div>
            <section className={style.IconContChat}>
              <img src={LoveIconfull} alt='' />
            </section>
          </div>
        </section>
      );
    }

    return <section></section>;
  
 
}

export default VideoDiscussion;