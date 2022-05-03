import React,{useEffect,useState,useRef} from "react"
//styles
import style from "./chatDetail.module.css"
//svg
import sentLogo from "../../assets/chatdetail/chatdetail.svg"
import camera from "../../assets/chatdetail/camera.svg"
import recorder from "../../assets/chatdetail/record.svg"
//components
import DisplayMsg from "../displaymessage/displayMsg"
import { IoChevronBackSharp } from 'react-icons/io5';
// import AddUser from
//interface
import showChatInterface from "./interface"
import writeUserData from "../../firebaseConfig/chats/chat"
import { initializeApp } from 'firebase/app';
import { getDatabase, ref,onValue } from 'firebase/database';
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import updateReadStatus from "../../firebaseConfig/chats/validateRead"
import {IoCheckmarkDoneOutline} from "react-icons/io5"
// import {app} from "../../firebaseConfig/chats/getChats"
// import db from "../../firebaseConfig/chats/getChats"
// const db = getDatabase(app);

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






const ChatDetailCom: React.FC<showChatInterface> = (props) => {
  const [userMessage,setUsermSg] = useState()
  const [orderedChat,setOrderedChat] = useState()
  const chatContainer = useRef()
  const currentUser = localStorage.getItem("sender")
  const receiver = localStorage.getItem("receiver")
  const [inputMessage,setInputMessage] = useState("")
  //@ts-ignore
  const loginUser = useSelector((state)=>  state.login)

  const {username} = useParams()



const updateValue = ()=>{
  const starCountRef = ref(db, 'message/');
   onValue(
    starCountRef,
    (snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
    
      setUsermSg(data);
        console.log('jjjjj', data);
        // formatMessage()
    },
    (snapshot) => console.log('snapshot', snapshot)
  );

   const theElement = chatContainer.current;
   //@ts-ignore
   theElement.scrollTop = theElement.scrollHeight;

}

//@ts-ignore
  const sendMsg = ()=>{
    if (inputMessage === ""){
      return ;
    }
     const arrayOfUser = [loginUser.username, receiver];
      const sortedUser = arrayOfUser.sort();
    writeUserData(
      inputMessage,
      `${sortedUser[0]}-${sortedUser[1]}`,
      loginUser.username
    );
      updateValue();
 
    // updateValue()
    //@ts-ignore
     const theElement = chatContainer.current
     //@ts-ignore
     theElement.scrollTop = theElement.scrollHeight;
     setInputMessage("")

 
  
  }
  useEffect(() => {
    updateValue();
    // formatMessage()
    //@ts-ignore
    // chatContainer.current.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'end',
    //   inline: 'nearest',
    // });
    const theElement = chatContainer.current;
    //@ts-ignore
    theElement.scrollTop = theElement.scrollHeight;
  }, [username]);
  useEffect(() => {

    if (userMessage) {
      formatMessage();

    
      //@ts-ignore
    }
  
  }, [userMessage]);

  useEffect(()=>{
        const theElement = chatContainer.current;
        //@ts-ignore
        theElement.scrollTop = theElement.scrollHeight;

  })

const formatMessage = ()=>{
  const arrayOfUser = [loginUser.username, receiver];
  const sortedUser = arrayOfUser.sort()
   const objectKey = `${sortedUser[0]}-${sortedUser[1]}`;
     console.log('objectKeyssss', objectKey);
     //@ts-ignore
     const usersChat = userMessage[objectKey];
  
 

  if (!usersChat) {
    //@ts-ignore
      setOrderedChat();
    return ;
  }
    
      //@ts-ignore
      const currentMsg = userMessage[sortedUser];
      console.log('arew', usersChat);
      if (usersChat) {
        const keysOfMsg = Object.keys(usersChat);
        for (let eachObj of keysOfMsg) {
          if (usersChat[eachObj].sender === username) updateReadStatus(objectKey, true, eachObj);
        }
      
    }

  const userChatKeys = Object.keys(usersChat);
  const orderArray = userChatKeys.sort();
  const reverseArray = orderArray.reverse()
  const chats = []
  for (let chatItems of reverseArray) {
    chats.push({ timestamp: usersChat, chat: usersChat[chatItems]});
  }
//@ts-ignore
if (chats.length > 0 ) setOrderedChat(chats.reverse());
else{
  //@ts-ignore
  setOrderedChat();
}
   const theElement = chatContainer.current;
   //@ts-ignore
   theElement.scrollTop = theElement.scrollHeight;


}



// useEffect(() => {
//   updateValue();
  
// });
   





  return (
    <section
      className={style.chatDetailPage}
      //@ts-ignore
    >
      <div className={style.chatDetailPageHeader}>
        <section className={style.picsCon}>
          <button className={style.bckBtn} onClick={props.showChatHandler}>
            <IoChevronBackSharp></IoChevronBackSharp>
          </button>
          <img src={loginUser.img} className={style.profilePic}></img>
          <div className={style.userName}>
            <h3>{username}</h3>
            <p>Last seen at 10.54PM</p>
          </div>
        </section>
        <section className={style.unfollowBtn}>
          <button>Unfollow</button>
        </section>
      </div>
      <div
        className={style.textContainer}
        //@ts-ignore
        ref={chatContainer}
      >
        {
          //@ts-ignore
          orderedChat
            ? //@ts-ignore
              orderedChat.map((eachItems) => {
                console.log('eeachItems', eachItems);
                console.log(
                  'loginuser',
                  eachItems.chat.sender === loginUser.username
                );
                return (
                  <>
                    <DisplayMsg
                      identity={
                        eachItems.chat.sender === loginUser.username
                          ? 'receiver'
                          : 'sender'
                      }
                      chats={eachItems.chat.message}
                    ></DisplayMsg>
                    {eachItems.chat.read === true ? (
                      //A
                      <span
                        style={
                          eachItems.chat.sender === loginUser.username
                            ? {
                                width: '100%',
                                justifyContent: 'right',
                                display: 'flex',
                              }
                            : {}
                        }
                      >
                        <span style={{ color: '#3641B7' }}>
                          <IoCheckmarkDoneOutline></IoCheckmarkDoneOutline>
                        </span>
                      </span>
                    ) : (
                      <div
                        style={
                          eachItems.chat.sender === loginUser.username
                            ? {
                                width: '100%',
                                justifyContent: 'right',
                                display: 'flex',
                              }
                            : {}
                        }
                      >
                        <span style={{ color: 'grey' }}>
                          <IoCheckmarkDoneOutline></IoCheckmarkDoneOutline>
                        </span>
                      </div>
                    )}
                  </>
                );
              })
            : null
        }

        {/* <DisplayMsg identity='sender'></DisplayMsg>
        <p className={style.todayText}>TODAY</p>
        <DisplayMsg identity='receiver'></DisplayMsg>
        <DisplayMsg identity='sender'></DisplayMsg>
        <DisplayMsg identity='receiver'></DisplayMsg>
        <DisplayMsg identity='sender'></DisplayMsg>
        <p className={style.todayText}>TODAY</p>
        <DisplayMsg identity='receiver'></DisplayMsg>
        <DisplayMsg identity='sender'></DisplayMsg>
        <DisplayMsg identity='receiver'></DisplayMsg>
        <DisplayMsg identity='sender'></DisplayMsg>
        <p className={style.todayText}>TODAY</p>
        <DisplayMsg identity='receiver'></DisplayMsg>
        <DisplayMsg identity='sender'></DisplayMsg>
        <DisplayMsg identity='receiver'></DisplayMsg>
        <DisplayMsg identity='sender'></DisplayMsg>
        <p className={style.todayText}>TODAY</p>
        <DisplayMsg identity='receiver'></DisplayMsg>
        <DisplayMsg identity='sender'></DisplayMsg> */}
      </div>

      <div className={style.inputMessageCont}>
        <section className={style.inputMsgCont}>
          <div className={style.inputCont}>
            <input
              value={inputMessage}
              type='text'
              placeholder='Type a message'
              onChange={(e) => setInputMessage(e.target.value)}
            ></input>
            <section className={style.recorder}>
              <button>
                <img src={camera} alt='' />
              </button>
              <button>
                <img src={recorder} alt='' />
              </button>
            </section>
          </div>
          <button className={style.sendMsgBtn} onClick={sendMsg}>
            <img src={sentLogo} alt='' />
          </button>
        </section>
      </div>
    </section>
  );
};

export default ChatDetailCom;