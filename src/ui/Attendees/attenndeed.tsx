import React from "react";
//styles
import style  from "./Attendes.module.css"
//interface 
import attendInterface from "./interface"
//icons
import CallIcons from "../../assets/course/call.svg"
import messageIcons from "../../assets/course/message.svg"



const Attended: React.FC<attendInterface> = (props) => {
    if(props.type === "sendRequest"){
        return (
          <section className={style.attendedWrapper}>
            <div className={style.profileCont}>
              <section className={style.picsCont}>L</section>&nbsp;&nbsp;
              <p>Lydia</p>
            </div>
            <div>
              <button className={style.followRequest}>
                Send follow request
              </button>
            </div>
          </section>
        )}
         if(props.type === "call"){
        return (
          <section className={style.attendedWrapper}>
            <div className={style.profileCont}>
              <section className={style.picsCont}>L</section>&nbsp;&nbsp;
              <p>Lydia</p>
            </div>
            <div className={style.callCont}>
              <button className={style.callIcons}>
                <img src={CallIcons} alt='' />
              </button>
              <button className={style.messageIcons}>
                <img src={messageIcons} alt='' />
              </button>
            </div>
          </section>
        );
    }

    return(
        <div></div>
    )
  
}; 

export default Attended;;