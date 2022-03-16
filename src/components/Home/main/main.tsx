import React from "react"
//styles
import style from "./main.module.css"
//icons
import point from "../../../assets/home/point.svg"
import CourseCard from "../../../ui/card/card"
import otherSmbol from '../../../assets/home/othersymbol.svg';
import MathSymbol from '../../../assets/home/mathsymbol.svg';
import circleDot from '../../../assets/home/circledot.svg';
//component
import ScheduleCard from "../../../ui/Schedule/schedule"
import SubjectCard from "../../../ui/subjectCard/subjectCard"
import ContinueCard from "../../../ui/continueCard/continuCard";



const subjects = [
  {
    colors: '#FF7648;',
    name: 'Mathematics',
    symbol: MathSymbol,
    svgColor: '#FFC278',
  },
  {
    colors: ' #45629B',
    name: 'Mathematics',
    symbol: otherSmbol,
    svgColor: '#182A88',
  },
  {
    colors: ' #8D5EF2',
    name: 'Mathematics',
    symbol: otherSmbol,
    svgColor: '#1F3A6D',
  },
  {
    colors: '#8F98FF',
    name: 'Mathematics',
    symbol: otherSmbol,
    svgColor: '#1F3A6D',
  },
  {
    colors: '#4ED442;',
    name: 'Mathematics',
    symbol: otherSmbol,
    svgColor: '#1F3A6D',
  },
];




const homeMainPage:React.FC = (props)=>{
    return (
      <div className={style.homeMainPage}>
        <div className={style.homeMainPageWrapper}>
          <section className={style.welcomeMessage}>
            <p className={style.welcomeText}>
              <b>Welcome David!</b>
            </p>
            &nbsp; &nbsp;
            <div className={style.circle}></div>
            &nbsp; &nbsp;
            <img src={point} alt='' />
            &nbsp;
            <p className={style.pointGained}>+1600 Points</p>
          </section>

          <section className={style.upcomingWrapper}>
            <br></br>
            <br></br>

            <div className={style.upcomingWrapperHeader}>
              <div className={style.circleRed}></div>
              &nbsp;&nbsp;
              <p className={style.upcomingText}>
                <b>Upcoming Live</b>
              </p>
            </div>
            <br />
            <div className={style.courseCardCont}>
              <CourseCard
                courseTitle='Mathematics'
                topic='introduction'
                timeElapse={5}
                img=''
                tutorName='james brown'
              ></CourseCard>
              <CourseCard
                courseTitle='Mathematics'
                topic='introduction'
                timeElapse={5}
                img=''
                tutorName='james brown'
              ></CourseCard>
              <CourseCard
                courseTitle='Mathematics'
                topic='introduction'
                timeElapse={5}
                img=''
                tutorName='james brown'
              ></CourseCard>
              <CourseCard
                courseTitle='Mathematics'
                topic='introduction'
                timeElapse={5}
                img=''
                tutorName='james brown'
              ></CourseCard>
            </div>
            <br></br>
            <div className={style.scheduleContainer}>
              <p className={style.scheduleText}>
                <b>Your Schedule</b>
              </p>
              <p className={style.nextLesson}>Next Lessons</p>
              <br></br>
              <div className={style.scheduleCardWrapper}>
                <ScheduleCard></ScheduleCard>
                <ScheduleCard></ScheduleCard>
                <ScheduleCard></ScheduleCard>
              </div>
            </div>
            <br></br>
            <div className={style.SubjectCont}>
              <h1>Subjects</h1>
              <p>Based on your study choice</p>'
              <div className={style.subjectCardContainer}>
                {subjects.map((eachItems) => {
                  return (
                    <SubjectCard
                      colors={eachItems.colors}
                      name={eachItems.name}
                      svgColor={eachItems.svgColor}
                      symbol={eachItems.symbol}
                    ></SubjectCard>
                  );
                })}
              </div>
            </div>
            <br />
            <div className={style.ContinueCard}>
              <h1>Continue where you left off</h1>
              <p>Let's get you back in</p>
              <br></br>
              <div className={style.continuCardWrap}>
                <ContinueCard
                  course='Mathematics'
                  chapter='Introduction'
                ></ContinueCard>
                <ContinueCard
                  course='Mathematics'
                  chapter='Introduction'
                ></ContinueCard>
                <ContinueCard
                  course='Mathematics'
                  chapter='Introduction'
                ></ContinueCard>
                <ContinueCard
                  course='Mathematics'
                  chapter='Introduction'
                ></ContinueCard>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}

export default homeMainPage;