import React,{useState,useRef} from "react"
//styles
import style from "./course.module.css"
//component
import { IoChevronBackSharp } from 'react-icons/io5';
import eyesIcon from "../../assets/course/eyes.svg"
import VideoDiscussion from "../../ui/video/videoDiscussion"
import ChatMessage from "../../ui/video/videoDiscussion"
import Attended from "../../ui/Attendees/attenndeed"
import ReactPlayer from 'react-player';
import {Link} from "react-router-dom"
//icons
import svgIcons from "../../assets/chatdetail/chatdetail.svg"
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';





const CourseComp:React.FC =()=>{

const [activeBtn, setActiveBtn] = useState({ attendees: true, chat:false });
const mkDivVisible = useRef<any>()
const reduceDivMrg = useRef<any>();
const hideMreBtn = useRef<any>();

  const handleBtnClick = (e:React.MouseEvent)=>{
    //@ts-ignore
    const selectedItems = e.target.id
  if( selectedItems === "attendees")
  {
    setActiveBtn({ attendees: true, chat: false });
  }
  if (selectedItems === 'chat') {
    setActiveBtn({ attendees: false, chat: true });
  }}
  


    const moreBtnHandler=()=>{
      reduceDivMrg.current.style.marginBottom = "0px"
      mkDivVisible.current.style.display = "block"
        hideMreBtn.current.style.display = 'none';
    
      

    }
    const lessBtnHandler = ()=>{
        reduceDivMrg.current.style.marginBottom = '100px';
       mkDivVisible.current.style.display = 'none';
         hideMreBtn.current.style.display = 'block';

    }
  

    return (
      <section className={style.CourseComp}>
        <div className={style.videoCont}>
          <section className={style.iconContainer}>
            <Link to='/homePage' className={style.mvBckBtn}>
              <IoChevronBackSharp></IoChevronBackSharp>
            </Link>
            <div className={style.iconItems}>
              <img src={eyesIcon} alt='' />
              &nbsp;
              <p className={style.views}>142</p>
            </div>
          </section>

          <div className={style.videoItem}>
          
            <ReactPlayer width="100%" height="100%"  url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </div>
       <section className={style.bottomDetails}>
            <div className={style.lgActiveUser}>
              <VideoDiscussion type='videoOverlay'></VideoDiscussion>
              <br></br>
              <VideoDiscussion type='videoOverlay'></VideoDiscussion>
            </div>
            <br></br>
            <section className={style.ChatBox}>
              <button
                className={style.showMore}
                onClick={moreBtnHandler}
                ref={hideMreBtn}
              >
                <MdOutlineExpandLess></MdOutlineExpandLess>
              </button>
              <div className={style.ProfileBox}></div>
              <div className={style.inputBox}>
                <input
                  type='text'
                  className={style.inputMesaage}
                  placeholder='Type your text here'
                />
              </div>
              <div className={style.sentBox}>
                <img src={svgIcons} alt='' />
              </div>
            </section>
          </section>
          {/*Mobile responsive section*/}
          <section className={style.mbChatWrapper}>
            <div className={style.mbChatBoxWrapper} ref={reduceDivMrg}>
              <VideoDiscussion type='videoOverlay'></VideoDiscussion>
              <br></br>
              <VideoDiscussion type='videoOverlay'></VideoDiscussion>
            </div>

            <div className={style.mbChatCont} ref={mkDivVisible}>
              <button className={style.showMore} onClick={lessBtnHandler}>
                  <MdOutlineExpandMore></MdOutlineExpandMore>
              </button>
              <div className={style.mbAttended}>
                <MobileChatCont></MobileChatCont>
              </div>
              <div className={style.mbEmptyBox}></div>
            </div>
          </section>
        </div>
        <div className={style.chatsCont}>
          <section className={style.btnCont}>
            <button
              className={
                activeBtn.attendees ? style.activeButton : style.attendees
              }
              id='attendees'
              onClick={handleBtnClick}
            >
              Attendees
            </button>
            <button
              className={activeBtn.chat ? style.activeButton : style.chat}
              onClick={handleBtnClick}
              id='chat'
            >
              Chat
            </button>
          </section>
          {activeBtn.chat ? (
            <section className={style.chatWrapper}>
              <p className={style.totalMessage}>2032 Messages</p>
              <ChatMessage type='chatContainer'></ChatMessage>
              <br></br>
              <ChatMessage type='chatContainer'></ChatMessage>
              <br></br>
              <ChatMessage type='chatContainer'></ChatMessage>
              <br></br>
              <ChatMessage type='chatContainer'></ChatMessage>
              <br></br>
              <ChatMessage type='chatContainer'></ChatMessage>
              <br></br>
              <ChatMessage type='chatContainer'></ChatMessage>
            </section>
          ) : null}

          {activeBtn.attendees ? (
            <section className={style.chatWrapper}>
              <p className={style.totalMessage}>167 Attendees</p>
              <Attended type='sendRequest'></Attended>
              <br></br>
              <Attended type='call'></Attended>
              <br></br>
              <Attended type='sendRequest'></Attended>
              <br></br>
              <Attended type='call'></Attended>
              <br></br>
              <Attended type='sendRequest'></Attended>
              <br></br>
              <Attended type='call'></Attended>
              <br></br>
              <Attended type='sendRequest'></Attended>
              <br></br>
              <Attended type='call'></Attended>
            </section>
          ) : null}
        </div>
      </section>
    );
}


export default CourseComp;


const MobileChatCont = ()=>{
    const [activeBtn, setActiveBtn] = useState({
      attendees: true,
      chat: false,
    });
    const handleBtnClick = (e: React.MouseEvent) => {
      //@ts-ignore
      const selectedItems = e.target.id;
      if (selectedItems === 'attendees') {
        setActiveBtn({ attendees: true, chat: false });
      }
      if (selectedItems === 'chat') {
        setActiveBtn({ attendees: false, chat: true });
      }
    };
  return (
    <>
      <div className={style.mbChatsCont}>
        <section className={style.btnCont}>
          <button
            className={
              activeBtn.attendees ? style.activeButton : style.attendees
            }
            id='attendees'
            onClick={handleBtnClick}
          >
            Attendees
          </button>
          <button
            className={activeBtn.chat ? style.activeButton : style.chat}
            onClick={handleBtnClick}
            id='chat'
          >
            Chat
          </button>
        </section>
        {activeBtn.chat ? (
          <section className={style.chatWrapper}>
            <p className={style.totalMessage}>2032 Messages</p>
            <ChatMessage type='chatContainer'></ChatMessage>
            <br></br>
            <ChatMessage type='chatContainer'></ChatMessage>
            <br></br>
            <ChatMessage type='chatContainer'></ChatMessage>
            <br></br>
            <ChatMessage type='chatContainer'></ChatMessage>
            <br></br>
            <ChatMessage type='chatContainer'></ChatMessage>
            <br></br>
            <ChatMessage type='chatContainer'></ChatMessage>
          </section>
        ) : null}

        {activeBtn.attendees ? (
          <section className={style.chatWrapper}>
            <p className={style.totalMessage}>167 Attendees</p>
            <Attended type='sendRequest'></Attended>
            <br></br>
            <Attended type='call'></Attended>
            <br></br>
            <Attended type='sendRequest'></Attended>
            <br></br>
            <Attended type='call'></Attended>
            <br></br>
            <Attended type='sendRequest'></Attended>
            <br></br>
            <Attended type='call'></Attended>
            <br></br>
            <Attended type='sendRequest'></Attended>
            <br></br>
            <Attended type='call'></Attended>
          </section>
        ) : null}
      </div>
    </>
  );
}