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
import {MobileSidebar} from "../sidebar/sidebar"
import SimpleBar from 'simplebar-react';
import {Link} from "react-router-dom"
import 'simplebar/dist/simplebar.min.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1090 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1090, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const subresponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1090 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1090, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const responsiveSchedule =  {
  desktop: {
    breakpoint: { max: 3000, min: 1090 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1090, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};



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
  {
    colors: '#4ED442;',
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
  {
    colors: '#4ED442;',
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
//   function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } =
//     React.useContext(VisibilityContext);

//   return (
//     <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       Left
//     </Arrow>
//   );
// }
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
            <div className={style.upcomingWrapperHeader}>
              <div className={style.circleRed}></div>
              &nbsp;&nbsp;
              <p className={style.upcomingText}>
                <b>Upcoming Live</b>
              </p>
            </div>
            <br />
            {/* <div >
              <ScrollMenu
                LeftArrow={<div>leftArrow</div>}
                RightArrow={<div>rightArrow</div>}
              >
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
              </ScrollMenu>
            </div> */}
            <div style={{ width: '100%' }}>
              <Carousel
                responsive={responsive}
                containerClass='carousel-container'
                itemClass='carousel-item'
                infinite={false}
                autoPlay={false}
              >
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>

                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
                <Link to='/courses'>
                  <CourseCard
                    courseTitle='Mathematics'
                    topic='introduction'
                    timeElapse={5}
                    img=''
                    tutorName='james brown'
                  ></CourseCard>
                </Link>
              </Carousel>
            </div>
            <br></br>
            <div className={style.scheduleContainer}>
              <p className={style.scheduleText}>
                <b>Your Schedule</b>
              </p>
              <p className={style.nextLesson}>Next Lessons</p>
              <br></br>
              <div style={{ width: '100%' }}>
                <Carousel
                  responsive={responsiveSchedule}
                  autoPlay={false}
                  infinite={false}
                  containerClass='schedule-carousel-container'
                  itemClass='schedule-carousel-item'
                >
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                  <section className={style.scheduleCard}>
                    <ScheduleCard></ScheduleCard>
                  </section>
                </Carousel>

                {/* <ScheduleCard></ScheduleCard>
                <ScheduleCard></ScheduleCard> */}
              </div>
            </div>
            <br></br>
            <div className={style.SubjectCont}>
              <p className={style.subjectText}>Subjects</p>
              <p>Based on your study choice</p>'
              {/* <div className={style.subjectCardContainer}>
                <Carousel responsive={responsive}>
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
                </Carousel>
              </div> */}
              <div style={{ width: '100%' }}>
                <Carousel
                  responsive={subresponsive}
                  autoPlay={false}
                  infinite={false}
                  containerClass='subject-carousel-container'
                  itemClass='subject-carousel-item'
                >
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
                </Carousel>
              </div>
            </div>
            <br />
            <div className={style.ContinueCard}>
              <p className={style.continueText}>Continue where you left off</p>
              <p>Let's get you back in</p>
              <br></br>
             
              <Carousel
                responsive={responsive}
                autoPlay={false}
                infinite={false}
                containerClass='continue-carousel-container'
                itemClass='continue-carousel-item'
              >
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
                <ContinueCard
                  course='Mathematics'
                  chapter='Introduction'
                ></ContinueCard>
              </Carousel>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div className={style.setExamDateCont}>
              <p>Let's set a reminder for you</p>
              <button className={style.setExamDate}>Select exam date</button>
            </div>
          </section>
        </div>
        <MobileSidebar></MobileSidebar>
      </div>
    );
}

export default homeMainPage;