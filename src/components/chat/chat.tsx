import React,{useState,useEffect} from "react";
//style 
import style from "./chat.module.css"
//icons

import { MdOutlineAdd } from 'react-icons/md';
//component
import ChatBox, { MbChatBox } from '../../ui/Chat/chat';
import ChatDetail from "../chatDetail/chatDetail"

import ChatHeader from "../../ui/chatHeader/chatHeader"
import {MobileSidebar} from "../../components/Home/sidebar/sidebar"
//icons
import chatIcon from "../../assets/chat/chatIcon.svg"
//interface
import chatInterface, { mbChatProps } from './interface';
import AddUser from "../../components/chatDetail/dialog/dialog"
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom";




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


const ChatComp: React.FC<chatInterface> = (props) => {
  //@ts-ignore
  const loginUser = useSelector((state)=>state.login)

  const[recentChat,setRecentChats] = useState([]) 
  const [unreadMsg,setUnreadCount]= useState({})
  const [latestChat,setLatestChat] = useState({})
  

  const goTo = useNavigate()

  const goToChatDetail= (destination:string)=>{
    goTo(`/Chats/${destination}`);

  } 
 const unReadMessage = (endUser:string)=>{

  const currentUser = loginUser.username;
  let chatPartner = endUser;
  const arrayOfChattter = [currentUser, chatPartner];
  const arrayOfSortedChatter = arrayOfChattter.sort();
  const interestedMsgKey = `${arrayOfSortedChatter[0]}-${arrayOfSortedChatter[1]}`;

  const db = getDatabase();
  const starCountRef = ref(db, 'message/' );
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log('unreadMsg', data);
    const arrayOfMsgKey = Object.keys(data)
    for (let eachMsgKey of arrayOfMsgKey ){
      if(interestedMsgKey === eachMsgKey ){
        const currMsg = data[interestedMsgKey];
        const arrayOfcurrMsgKeys = Object.keys(currMsg);
        let unreadMsg = 0;
        for(let eachKeys of arrayOfcurrMsgKeys){
          if (
            currMsg[eachKeys].read === false &&
            currMsg[eachKeys].sender !== currentUser
          ) {
            unreadMsg += 1;
          }

        }
        //@ts-ignore
        setUnreadCount((prevState) => {  return {
          ...prevState,
          [endUser]: unreadMsg }
        })
      ;
      }
    }
    
   
  });



 }


  const getLatestChat = (endUser: string) => {
    const currentUser = loginUser.username;
    let chatPartner = endUser;
    const arrayOfChattter = [currentUser, chatPartner];
    const arrayOfSortedChatter = arrayOfChattter.sort();
    const interestedMsgKey = `${arrayOfSortedChatter[0]}-${arrayOfSortedChatter[1]}`;

    const db = getDatabase();
    const starCountRef = ref(db, 'message/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log('unreadMsg', data);
      const arrayOfMsgKey = Object.keys(data).sort();
      for (let eachMsgKey of arrayOfMsgKey) {
        if (interestedMsgKey === eachMsgKey) {
          const currMsg = data[interestedMsgKey];
          const arrayOfcurrMsgKeys = Object.keys(currMsg);
          const sortedArray = arrayOfcurrMsgKeys.sort();
          const reverseKeys = sortedArray.reverse() 

          for(let msgKey of reverseKeys){
            if (loginUser.username === currMsg[msgKey].sender) {
              //@ts-ignore
              setLatestChat((prevState) => {
                return {
                  ...prevState,
                  [interestedMsgKey]: {
                    time: msgKey,
                    message: currMsg[msgKey].message,
                    read: currMsg[msgKey].read,
                    receiver: endUser,
                  },
                };
              });
              //@ts-ignore
              console.log('latestChat', currMsg[msgKey].sender);

              return;
            }
          }
          // const latesMsg = sortedArray[sortedArray.length];
          // const ourMsg = currMsg[latesMsg];
          // 
          
        }
      }
    });
  };

 



    const updateRecentChat = () => {
      if (recentChat.length >= 0) {
        setRecentChats([]);
      }

      const starCountRef = ref(db, 'recentsChats/');
      onValue(
        starCountRef,
        (snapshot) => {
          const data = snapshot.val();
          // updateStarCount(postElement, data);
           if (recentChat.length >= 0) {
             setRecentChats([]);
           }

          console.log('upppppp', data);
            
            console.log('myrecentchats', data);
        const recentChatKeys = Object.keys(data);
        for (let eachKeys of recentChatKeys){
          if(loginUser.username === eachKeys ){
            let userObj = data[eachKeys];
            let currentUser = Object.keys(userObj);
          
            for (let eachUserKeys of currentUser){
              unReadMessage(userObj[eachUserKeys].receiver);
              getLatestChat(userObj[eachUserKeys].receiver);

              // if (recentChat.length >= 0) {
              //   setRecentChats([]);
              // }
              //@ts-ignore
              setRecentChats((prevState) =>{ 
                
                
                return [
                ...prevState,
                userObj[eachUserKeys],
              ]});
            }
            
            return;
          }
        } 
        console.log('alluser', recentChat);
          console.log('myrecentchats', data);
          // formatMessage()
        },
        (snapshot) => console.log('snapshot', snapshot)
      );
    };

  useEffect(()=>{
    updateRecentChat()

  },[])


// if (recentChat.length <=0 ){
//   alert()
//    return  <div>fetching data</div>;
// } 
  return (
    <section className={style.ChatMainComp}>
      {/* <div className={style.comHeader}>
          <p>Chats</p>
          <section className={style.comUserPics}>
            <IoMdNotificationsOutline
              className={style.comBellIcon}
            ></IoMdNotificationsOutline>
            &nbsp; &nbsp; &nbsp;
            <Link className={`${style.comPicsCon}`}  to='/Profile'>

            </Link>
          </section>
        </div> */}
      <div className={style.chatHeaderWrapper}>
        <ChatHeader title='Chats'></ChatHeader>
      </div>

      <div className={style.combody}>
        <div className={style.chatCont}>
          <section className={style.chatContHeader}>
            <div className={style.chatText}>
              <p className={style.recentText}>Recent Chats</p>
              <p>Speak with tutors privately</p>
            </div>
            {/* <button className={style.chatAddBtnCon}>
              <MdOutlineAdd className={style.chatAddBtn}></MdOutlineAdd>
            </button> */}
            <AddUser></AddUser>
          </section>
          <br></br>
          <br></br>
          <div className={style.chatContainer}>
            {recentChat.map((eachChats) => {
              //@ts-ignore

              // let rece
              //@ts-ignore
              let id = eachChats.receiver;
              let logUser = loginUser.username;
              const arrayOfUser = [id, logUser];
              const sortedArray = arrayOfUser.sort();
              const intKey = `${sortedArray[0]}-${sortedArray[1]}`;

              //@ts-ignore
              console.log('ubreeeeady', unreadMsg[id]);
              //@ts-ignore
              // if (id) console.log('unreadCOunt', unreadMsg[id]);
              return (
                <div
                  style={{ cursor: 'pointer' }}
                  //@ts-ignore
                  onClick={() => goToChatDetail(eachChats.receiver)}
                >
                  <ChatBox
                    handleChatPage={props.handleChatPage}
                    //@ts-ignore
                    username={eachChats.receiver}
                    //@ts-ignore
                    latestMsg={latestChat[intKey]}
                    img=''
                    //@ts-ignore
                    unread={unreadMsg[eachChats.receiver]}
                    //@ts-ignore
                    receiver={id}
                    // sender={unreadMsg[id].sender}
                  ></ChatBox>
                  <br></br>
                </div>
              );
            })}

            {/* <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox>
            <br></br>
            <ChatBox handleChatPage={props.handleChatPage}></ChatBox> */}
            {/* <ChatBox></ChatBox>
              <br></br>
              <ChatBox></ChatBox>
              <br></br> */}
          </div>
        </div>
        <div className={style.chatDetailPage}>
          {props.status ? (
            <ChatDetail></ChatDetail>
          ) : (
            <img src={chatIcon} alt='' />
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatComp;;



export const MobileChatComp: React.FC<mbChatProps> = (props) => {
  const [showChat,setShowChat] = useState(false)

  const showChatHandler = (e:React.MouseEvent)=>{
    setShowChat(!showChat);

  }
  return (
    <section className={style.mbChatPage}>
      {!showChat ? (
        <div className={style.mbchatCont}>
          <section className={style.chatContHeader}>
            <div className={style.mbchatText}>
              <h1>Recent Chats</h1>
              <p>Speak with tutors privately</p>
            </div>
            <button className={style.chatAddBtnCon}>
              <MdOutlineAdd className={style.chatAddBtn}></MdOutlineAdd>
            </button>
          </section>
          <br></br>
          <br></br>
          <div className={style.mbchatContainer}>
            {/* <div onClick={showChatHandler}>
              <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            </div>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox>
            <br></br>
            <MbChatBox handleChatPage={props.handleChatPage}></MbChatBox> */}
          </div>
          <MobileSidebar></MobileSidebar>
        </div>
      ) : (
        <ChatDetail showChatHandler={showChatHandler}></ChatDetail>
      )}
    </section>
  );
};