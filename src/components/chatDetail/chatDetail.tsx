import React from "react"
//styles
import style from "./chatDetail.module.css"
//svg
import sentLogo from "../../assets/chatdetail/chatdetail.svg"
import camera from "../../assets/chatdetail/camera.svg"
import recorder from "../../assets/chatdetail/record.svg"
//components
import DisplayMsg from "../displaymessage/displayMsg"



const ChatDetailCom:React.FC = (props)=>{
    return (
      <section className={style.chatDetailPage}>
        <div className={style.chatDetailPageHeader}>
          <section className={style.picsCon}>
            <div className={style.profilePic}></div>
            <div className={style.userName}>
              <h3>Kaitlyn</h3>
              <p>Last seen at 10.54PM</p>
            </div>
          </section>
          <section className={style.unfollowBtn}>
            <button>Unfollow</button>
          </section>
        </div>
        <div className={style.textContainer}>
          <DisplayMsg identity='receiver'></DisplayMsg>
          <DisplayMsg identity='sender'></DisplayMsg>
          <p className={style.todayText}>TODAY</p>
          <DisplayMsg identity='receiver'></DisplayMsg>
          <DisplayMsg identity='sender'></DisplayMsg>

          {/* <DisplayMsg identity='chatter'></DisplayMsg>
          <DisplayMsg identity='sender'></DisplayMsg>
          <DisplayMsg identity='chatter'></DisplayMsg>
          <DisplayMsg identity='sender'></DisplayMsg>
          <DisplayMsg identity='chatter'></DisplayMsg> */}
        </div>

        <div className={style.inputMessageCont}>
          <section className={style.inputMsgCont}>
            <div className={style.inputCont}>
              <input type='text' placeholder='Type a message'></input>
              <section className={style.recorder}>
                <button>
                  <img src={camera} alt='' />
                </button>
                <button>
                  <img src={recorder} alt='' />
                </button>
              </section>
            </div>
            <button className={style.sendMsgBtn}>
              <img src={sentLogo} alt='' />
            </button>
          </section>
        </div>
      </section>
    );
}

export default ChatDetailCom;