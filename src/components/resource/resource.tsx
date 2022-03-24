import React from 'react';
//style
import style from './resource.module.css';
//icons

import { MdOutlineAdd } from 'react-icons/md';
//component
import ResourceBox, { MobileResourceBox } from '../../ui/resource/resource';
// import ChatDetail from '../chatDetail/chatDetail';
import ResourceDetail from "../resoureceDetail/resourceDetail"
import { Link } from 'react-router-dom';
import ChatHeader from '../../ui/chatHeader/chatHeader';
import {MobileSidebar} from "../../components/Home/sidebar/sidebar"
//icons
import searchIcon from '../../assets/resource/search.svg';
//interface
import resourceInterface from './interface';

const ChatComp: React.FC<resourceInterface> = (props) => {
  return (
    <section className={style.ResourceMainComp}>
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
      <section className={style.resourceHeaderWrapper}>
        <ChatHeader title='Chats'></ChatHeader>
      </section>

      <div className={style.combody}>
        <div className={style.resourceCont}>
          <section className={style.chatContHeader}>
            <div className={style.resourceText}>
              <p className={style.resourceHeader}>Resources</p>
              <p>Class notes, PDFs, videos. All for you.</p>
            </div>
            <button className={style.chatAddBtnCon}>
              <img src={searchIcon} alt='' />
            </button>
          </section>
          <br></br>
          <br></br>
          <div className={style.resourceContainer}>
            <ResourceBox handleResChange={props.handleResChange}></ResourceBox>
            <br></br>
            <ResourceBox handleResChange={props.handleResChange}></ResourceBox>
            <br></br>
            <ResourceBox handleResChange={props.handleResChange}></ResourceBox>
            <br></br>
            <ResourceBox handleResChange={props.handleResChange}></ResourceBox>
            <br></br>
            {/* <ChatBox></ChatBox>
              <br></br>
              <ChatBox></ChatBox>
              <br></br> */}
          </div>
          {/*responsive resource box*/}
          <div className={style.mbResourceContainer}>
            <MobileResourceBox
              handleResChange={props.handleResChange}
            ></MobileResourceBox>
            <br></br>
            <MobileResourceBox
              handleResChange={props.handleResChange}
            ></MobileResourceBox>
            <br></br>
            <MobileResourceBox
              handleResChange={props.handleResChange}
            ></MobileResourceBox>
            <br></br>
            <MobileResourceBox
              handleResChange={props.handleResChange}
            ></MobileResourceBox>
            <br></br>
            <MobileResourceBox
              handleResChange={props.handleResChange}
            ></MobileResourceBox>
            <br></br>
            <MobileResourceBox
              handleResChange={props.handleResChange}
            ></MobileResourceBox>
            <br></br>
            <MobileResourceBox
              handleResChange={props.handleResChange}
            ></MobileResourceBox>
            <br></br>
            <MobileResourceBox
              handleResChange={props.handleResChange}
            ></MobileResourceBox>
          </div>
          {/*end of responsive resource box*/}
        </div>
        <div className={style.resourceDetailPage}>
          {props.status ? (
            <ResourceDetail></ResourceDetail>
          ) : (
            <div className={style.selectFile}>
              <p className={style.selected}>Please select a file</p>
              <p className={style.toDisplay}>Nothing to display</p>
            </div>
          )}
        </div>
      </div>
      <MobileSidebar></MobileSidebar>
    </section>
  );
};

export default ChatComp;
