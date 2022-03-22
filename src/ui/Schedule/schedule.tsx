import React from "react";
//styles
import style from "./schedule.module.css"
//icons
import circleIcon from "../../assets/home/circledot.svg"



const ScheduleCard:React.FC = (props)=>{
    return (
      <section className={style.ScheduleCard}>
        <div className={style.scheduleTimeDetail}>
          <p className={style.courseStartTime}>11:35</p>
          <p className={style.courseEndTime}>13:05</p>
        </div>
        <div className={style.scheduleCardDetail}>
          <section className={style.scheduleCont}>
            <div className={style.scheduleContHead}>
              <p>Mathematics</p>
              <button >
                <img src={circleIcon} alt='' />
              </button>
            </div>
<p className={style.intro}>Chapter 1: Introduction</p>
            <section className={style.tutoPicsContent}>
              <div className={style.tutorPics}></div>&nbsp;
              <p>Brooklyn Williamson</p>
            </section>
          </section>
        </div>
      </section>
    );
}

export default ScheduleCard;