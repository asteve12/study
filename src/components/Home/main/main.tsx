import React from "react"
//styles
import style from "./main.module.css"
//icons
import point from "../../../assets/home/point.svg"

const homeMainPage:React.FC = (props)=>{
    return (
      <div className={style.homeMainPage}>
        <div className={style.homeMainPageWrapper}>
          <section className={style.welcomeMessage}>
            <p>
              <b>Welcome David!</b>
            </p>
            <div className={style.circle}></div>
            <img src={point} alt='' />
            <p className={style.pointGained}>+1600 Points</p>
          </section>
        </div>
      </div>
    );
}

export default homeMainPage;