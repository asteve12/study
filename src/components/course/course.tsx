import React,{useState,useRef,useEffect} from "react"
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
import commentHandler from "../../firebaseConfig/comment/writeComment"
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import BaseUrl from "../../axios"
//icons
import svgIcons from "../../assets/chatdetail/chatdetail.svg"
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
//firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
// import commentHandler from "../../firebaseConfig/comment/writeComment"

const firebaseConfig = {
  apiKey: 'AIzaSyDT-zrQbWvHt15SiNKCcDofxl1ubVj9mLE',
  authDomain: 'yourstudypath-ysp.firebaseapp.com',
  databaseURL: 'https://yourstudypath-ysp-default-rtdb.firebaseio.com',
  projectId: 'yourstudypath-ysp',
  storageBucket: 'yourstudypath-ysp.appspot.com',
  messagingSenderId: '899670359755',
  appId: '1:899670359755:web:53d7178f926074ec6c654e',
  measurementId: 'G-RZKLL82KYC',
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);




const CourseComp:React.FC =()=>{
  const [activeBtn, setActiveBtn] = useState({ attendees: true, chat: false });
  const mkDivVisible = useRef<any>();
  const reduceDivMrg = useRef<any>();
  const hideMreBtn = useRef<any>();
  const [comment, setComment] = useState('');
  const [errorMsg, setErrorMsg] = useState<boolean | undefined>();
  const [unableToSend, setUnableToSend] = useState('');
  const { courseIframe } = useParams()
  const [currVid,setCurrVid] = useState()
  console.log('mycourseIframe', courseIframe);
  //@ts-ignore
  const [arrayOfComment, setArrayOfComment] = useState([]);

  //@ts-ignoreclassName={style.errorTxtCont}
  const loginUser = useSelector((state) => state.login);

  const handleBtnClick = (e: React.MouseEvent) => {
    const selectedItems = e.target as HTMLElement;

    if (selectedItems.id === 'attendees') {
      setActiveBtn({ attendees: true, chat: false });
    }
    if (selectedItems.id === 'chat') {
      setActiveBtn({ attendees: false, chat: true });
    }
  };

  const moreBtnHandler = () => {
    reduceDivMrg.current.style.marginBottom = '0px';
    mkDivVisible.current.style.display = 'block';
    hideMreBtn.current.style.display = 'none';
  };
  const lessBtnHandler = () => {
    reduceDivMrg.current.style.marginBottom = '100px';
    mkDivVisible.current.style.display = 'none';
    hideMreBtn.current.style.display = 'block';
  };

  const validateComment = () => {
    if (comment.length <= 0) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
    }
  };

  const sendComment = async () => {
    validateComment();
    setComment("")
    let commentFeedBck = await commentHandler({
      img: loginUser.img,
      name: loginUser.username,
      comment: comment,
    });

    // if (commentFeedBck !== true) {
    //   setUnableToSend('unable to send message');
    // }
  };

  const updateRecentChat = () => {
    const starCountRef = ref(db, 'comment/');
    onValue(
      starCountRef,
      (snapshot) => {
        const data = snapshot.val();
        let arrayOfComment = []
        if (data) {
          const commentKeys = Object.keys(data);
          for (let eachKeys of commentKeys) {
            arrayOfComment.push(data[eachKeys]);
          }
          //@ts-ignore
          setArrayOfComment(arrayOfComment);
        }
        console.log('updateChats', data);
      },
      (snapshot) => console.log('snapshot', snapshot)
    );
  };

   useEffect(() => {
     const userTk = localStorage.getItem('accessToken');
     BaseUrl.get('/api/courses/list-live-class/', {
       headers: {
         //@ts-ignore
         Authorization: `Bearer ${userTk}`,
       },
     })
       .then((response) => {
     const returnedData = response.data
     let videoToStream;
     if(returnedData){
     
   
       
        for (let eachVideo of returnedData) {
          
       if (eachVideo.exam.toString() === courseIframe?.toString()) {
      
         setCurrVid(eachVideo.embed_code)
         break;
       }
     } 
     }  
    
     
       })
       .catch((error) => {
         console.log('getCourseLiveVideoError', error);
       });
   }, []);

  useEffect(() => {
    updateRecentChat();
  
  
  

  }, []);

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
          {/* <ReactPlayer url={`currVid`} /> */}
          {/* <img src={currVid} alt='' /> */}
          {
            // var parser = new DomParser
          }
          {/* @ts-ignore */}
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${currVid}`}
            title='YouTube video player'
            //@ts-ignore
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          {/* {[currVid]} */}
          {/* @ts-ignore */}
          {/* <video src= width='100%' height='100%' controls ></video> */}
        </div>
        {/* <section className={style.bottomDetails}>
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
                <input;
                  type='text'
                  className={style.inputMesaage}
                  placeholder='Type your text here'
                />
              </div>
              <div className={style.sentBox}>
                <img src={svgIcons} alt='' />
              </div>
            </section>
          </section> */}
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
          {/* <button
              className={
                activeBtn.attendees ? style.activeButton : style.attendees
              }
              id='attendees'
              onClick={handleBtnClick}
         ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;eachVideoeachVideo   >
              Attendees
            </button> */}
          <button
            className={style.chat}
            // onClick={handleBtnClick}
            id='chat'
          >
            Chat
          </button>
        </section>
        <section className={style.commentBox}>
          {arrayOfComment
            ? arrayOfComment.map((eachComment) => {
                return (
                  <section className={style.userCard}>
                    {/*@ts-ignore */}
                    <img src={eachComment.img} className={style.imgCont}></img>
                    <div className={style.commentCont}>
                      {/*@ts-ignore */}
                      <p className={style.nameCont}>{eachComment.name}</p>
                      {/*@ts-ignore */}
                      <p>{eachComment.comment}</p>
                    </div>
                  </section>
                );
              })
            : null}
        </section>

        <section className={style.chatWrapper}>
          <div className={style.commentInputBox}>
            <input
              type='text'
              value={comment}
              className={style.commentInput}
              //@ts-ignore
              onChange={(e) => {
                setComment(e.target.value);
                validateComment();
              }}
              //@ts-ignore
            />
            <button onClick={sendComment} className={style.sendBtn}>
              send
            </button>
            <div className={style.errorTxtCont}>
              {errorMsg ? 'required' : null}
            </div>
            <div className={style.errorTxtCont}>
              {unableToSend ? unableToSend : null}
            </div>
          </div>
        </section>
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
      
      const selectedItems = e.target as HTMLElement;
      if (selectedItems.id === 'attendees') {
        setActiveBtn({ attendees: true, chat: false });
      }
      if (selectedItems.id === 'chat') {
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