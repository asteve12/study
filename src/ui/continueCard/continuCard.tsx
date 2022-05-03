import React,{useState,useEffect} from "react";
//styles 
import style from "./continueCard.module.css"
//icons
import { BiTimer } from 'react-icons/bi';
//interfaces
import continueInterface from "./interface"




const ContinueCard: React.FC<continueInterface> = (props) => {
  //@ts-ignore
  const [videoPercentage,setVidPercentage] =useState()
    //@ts-ignore
  const [progresBarLength,setProgBarLength] = useState()

//outsource thses function
  const caclculateWatchPercentage = ()=>{
    const videoLength = props.videoLength;
    const watchedLength = props.watchedLength;
    const percentage = (watchedLength / videoLength) * 100;
    //@ts-ignore
    setVidPercentage(percentage);
    const progressBarLength = (248.53 * percentage) / 100;
    //@ts-ignore
    setProgBarLength(progressBarLength);
  }

  useEffect(()=>{
    caclculateWatchPercentage()

  },[])
  return (
    <section className={style.continueCard}>
      <div className={style.continueCardDetail}>
        <p className={style.cardDetailHeader}>Mathematics</p>

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
            <b>{parseInt(`${videoPercentage}`)}%</b>
          </span>
        </section>

        <section className={style.progressIndicator}>
          <div
            className={style.currentProgress}
            style={{ width: progresBarLength }}
          ></div>
        </section>
      </div>
    </section>
  );
};


export default ContinueCard;;