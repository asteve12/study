import React from 'react';
//styles
import style from './resource.module.css';
//icons
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import {IoIosMore} from "react-icons/io"
//interface
import chatInterface from './interface';

const ResourceBox: React.FC<chatInterface> = (props) => {
  return (
    <section className={style.chatBoxCont} onClick={props.handleResChange}>
      <div className={style.messageBox}>
        <section className={style.picsCont}></section>
        <section className={style.userNameBox}>
          <p className={style.userName}>
            Art-the-fvck.jpg
          </p>
          <p className={style.message}>
            1.8 MB
          </p>
        </section>
      </div>
      <div className={style.timeBox}>
        <p className={style.timeText}><IoIosMore className={style.moreBtn}></IoIosMore></p>
       
      </div>
    </section>
  );
};

export default ResourceBox;


export const MobileResourceBox: React.FC<chatInterface> = (props) => {
  return (
    <section className={style.mbChatBoxCont} onClick={props.handleResChange}>
      <div className={style.messageBox}>
        <section className={style.mbPicsCont}></section>
        <section className={style.userNameBox}>
          <p className={style.userName}>Art-the-fvck.jpg</p>
          <p className={style.message}>1.8 MB</p>
        </section>
      </div>
      <div className={style.timeBox}>
        <p className={style.timeText}>
          <IoIosMore className={style.moreBtn}></IoIosMore>
        </p>
      </div>
    </section>
  );
};
