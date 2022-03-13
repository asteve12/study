import React from "react"
//styles
import style from "./bestTeacher.module.css"
//svg
import BlueBg from "../../assets/onbaordPage/blueBg.svg"
import { symbolName } from "typescript";
//indicator
import Indicator from "../indicator/indicator"
//interface
import bestTeacherInt from "./interface"


const bestTeacher: React.FC<bestTeacherInt> = (props) => {
  return (
    <section className={style.bestTeacher}>
      <div className={style.BestTeacherImgWrapper}>
        <img src={BlueBg} className={style.bestTeacherBgImg} alt='' />
      </div>

      <div className={style.bestTeacherBottom}>
        <h4 className={style.theBestTeacherHeader}>The Best Teachers </h4>
        <p className={style.theBestTeacherBtText}>
          Online classes taught by dedicated teachers with decades of experience
          helping students succeed.
        </p>
        {
          props.isIndicatorOn.map((eachBtn,index)=>{
            return(
              <Indicator status={eachBtn.btnStatus}  handleIndicator={props.handleIndicator} indexed={index} ></Indicator>
            )
          })

          })
        

        
       
      </div>
    </section>
  );
};

export default bestTeacher;