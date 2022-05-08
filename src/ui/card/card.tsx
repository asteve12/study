import React from "react";
//styles
import style from "./card.module.css"
//bgImage
import BgImg from "../../assets/home/cardImage.svg"
//component
import {BiTimer} from "react-icons/bi"
//interface
import CardInterface from "./inerface"

const CourseCard: React.FC<CardInterface> = (props) => {
  return (
    <section className={style.cardWrapper}>
      <div className={style.cardContent}>
        <h1>{props.courseTitle}</h1>
        <p>Chapter 1: Introduction</p>

        <section className={style.timeContainer}>
          <BiTimer></BiTimer>&nbsp;&nbsp;
          <span>5h 21m</span>
        </section>

        <section className={style.courseTutor}>
          <div className={style.imageWrapper}>
            <img className={style.tutorName} src='' alt='' />
          </div>
          &nbsp;
          <p>Brooklyn Williamson</p>
        </section>
      </div>
    </section>
  );
};

export default CourseCard;