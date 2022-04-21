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
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import NavItemArray from "./itemsObj"



const bestTeacher: React.FC<bestTeacherInt> = (props) => {
  return (
    <section className={style.bestTeacher}>
      <Carousel
        autoPlay={true}
        showThumbs={false}
         interval={5000}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        className={style.carouselWrapper}
      >
        {NavItemArray.map((eachItems) => {
          return (
            <>
              <div className={style.BestTeacherImgWrapper}>
                <img
                  src={eachItems.img}
                  className={style.bestTeacherBgImg}
                  alt=''
                />
              </div>

              <div className={style.bestTeacherBottom}>
                <p className={style.theBestTeacherHeader}>{eachItems.header}</p>
                <p className={style.theBestTeacherBtText}>
                  {eachItems.bodyText}
                </p>
              </div>
            </>
          );
        })}
      </Carousel>
    </section>
  );
};

export default bestTeacher;