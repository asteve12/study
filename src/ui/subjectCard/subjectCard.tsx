import React from "react";
//styles
import style from "./subjectCard.module.css"
//svg 
import ManipulateSvg from "../../components/manipulateSvg/manipulateSvg"
import  otherSmbol from "../../assets/home/othersymbol.svg"
import MathSymbol  from "../../assets/home/mathsymbol.svg";
import circleDot from "../../assets/home/circledot.svg"
//interfaces.
import myInterface from "./interface"
import {useParams} from "react-router-dom"



const SubjectCard: React.FC<myInterface> = (props) => {
  

  return (
    <section className={style.subjectCard} style={{backgroundColor:props.colors}}>
      <div className={style.LogoCont}>
        <img src={props.symbol} alt='' />
      </div>
      <div className={style.placeSvgProperly}>
        <ManipulateSvg color={`${props.svgColor}`}></ManipulateSvg>
        <button className={style.moreBtn}>
          <img src={circleDot} alt='' />
        </button>
      </div>
      <div className={style.Subject}>{props.name}</div>
    </section>
  );
};

export default SubjectCard;