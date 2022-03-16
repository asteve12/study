import React from "react";
//styles 
import style from "./continueCard.module.css"
//icons
import { BiTimer } from 'react-icons/bi';
//interfaces
import continueInterface from "./interface"




const ContinueCard: React.FC<continueInterface> = (props) => {
  return (
    <section className={style.continueCard}>
      <div className={style.continueCardDetail}>
        <h1>Mathematics</h1>

        <p>Chapter 1: Introduction</p>
        <div className={style.timerCont}>
          <div>
            <BiTimer className={style.timer}></BiTimer>
          </div>
          &nbsp;
          <p>5h 21m</p>
        </div>

        <div className={style.aboutCont}>
          <div className={style.picsCont}></div>
          &nbsp;
          <p>Brooklyn Williamson</p>
        </div>

        <section className={style.progress}>
          <p>Progress</p>
          <span>
            <b>30%</b>
          </span>
        </section>

        <section className={style.progressIndicator}>
          <div className={style.currentProgress}></div>
        </section>
      </div>
    </section>
  );
};


export default ContinueCard;;