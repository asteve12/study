import React,{useState,useRef,useEffect} from "react"
//styles 
import style from "./schedule.module.css"
import 'react-calendar/dist/Calendar.css';
//components 
import ChatHeader from "../../ui/chatHeader/chatHeader"
import SelectCourse from "../../ui/selectCourse/selectCourse"
import ScheduleCard from "../../ui/Schedule/schedule"
import {MobileSidebar} from "../../components/Home/sidebar/sidebar"
//@ts-ignore
import DatePicker from 'react-horizontal-datepicker';
//@ts-ignore
import Calendar from 'react-calendar';
//icons
import forwardBtnIcon from "../../assets/schedule/forward.svg"
import backwardBtnIcon from '../../assets/schedule/backward.svg';
import sortLogo from "../../assets/schedule/sortIcon.svg"






const ScheduleCom:React.FC = (props)=>{
  const [value, onChange] = useState(new Date());
  const [daysOfWk,] = useState(["Sun","Mon"," Tue","Wed","Thur","Fri","Sat"])
  const [monthName] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);
  const [monthToDisplay, setMonth] = useState(monthName[value.getMonth()]);
  const[listDay,setListDay] = useState()
  const [selectedItems,setSelectedItem] = useState<any>()
  const dateSelector = useRef<any>();
  const [currentDateMb,setCurrentDate] = useState(new Date())


  const nextBtn = useRef();
 
  const changeDefaultStyle=()=>{
   if (listDay) {
     //@ts-ignore

     let prevGreyPosition = 1;
     let greyPosition = 1;
     let a = 0;
     let nextPosition = 1;
     let action = 'plusOne';
     //@ts-ignore
     let itemLenght = listDay.length
    

     for (var x = 0; x < itemLenght; x++) {
       let idle =
         'react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--neighboringMonth undefinedundefined';

       let neighbouringText =
         'react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend react-calendar__month-view__days__day--neighboringMonth undefinedundefined';

       let mainText =
         'react-calendar__tile react-calendar__month-view__days__day undefinedundefined';

       let redText =
         'react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--weekend undefinedundefined';
       let activeDay ='react-calendar__tile react-calendar__tile--now react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeStart react-calendar__tile--rangeEnd react-calendar__tile--rangeBothEnds react-calendar__month-view__days__day undefinedundefined';
        

       //@ts-ignore
       let y = listDay[a];

       //@ts-ignore
       if (y.className === mainText) {
         //@ts-ignore
         y.style.color = '#9D9FA0';

         if (greyPosition === prevGreyPosition && action === 'plusOne') {
           //@ts-ignore
           y.style.backgroundColor = '#F6F5F2';
           nextPosition += 6;
           action = 'plusSeven';
           greyPosition++;
           prevGreyPosition++;
           a++;
           continue;
         }
         if (nextPosition === prevGreyPosition && action === 'plusSeven') {
           //@ts-ignore
           y.style.backgroundColor = '#F6F5F2';
           nextPosition += 1;
           action = 'plusOne';
           greyPosition++;
           prevGreyPosition++;
           a++;
           continue;
         } else {
           //@ts-ignore
           y.style.backgroundColor = '#FCFAF5';
         }

         greyPosition++;
         prevGreyPosition++;
         a++;
       }
       //@ts-ignore
       if (y.className === neighbouringText || y.className === idle) {
         //@ts-ignore
         y.style.color = '#9D9FA0';

         if (greyPosition === prevGreyPosition && action === 'plusOne') {
           //@ts-ignore
           y.style.backgroundColor = '#F6F5F2';

           nextPosition += 6;
           action = 'plusSeven';
           greyPosition++;
           prevGreyPosition++;
           a++;
           continue;
         }
         if (nextPosition === prevGreyPosition && action === 'plusSeven') {
           //@ts-ignore
           y.style.backgroundColor = '#F6F5F2';
           //@ts-ignore
           // y.style.opacity = 0.003;
           action = 'plusOne';
           nextPosition += 1;
           greyPosition++;
           prevGreyPosition++;
           a++;
           continue;
         } else {
           //@ts-ignore
           y.style.background = '#FCFAF5';
         }
         greyPosition++;
         prevGreyPosition++;
         a++;
       }

       //@ts-ignore
       if (y.className === redText) {
         //@ts-ignore
         y.style.color = '#9D9FA0';

         if (greyPosition === prevGreyPosition && action === 'plusOne') {
           //@ts-ignore
           y.style.backgroundColor = '#F6F5F2';
           action = 'plusSeven';
           nextPosition += 6;
           greyPosition++;
           prevGreyPosition++;
           a++;
           continue;
         }
         if (nextPosition === prevGreyPosition && action === 'plusSeven') {
           //@ts-ignore
           y.style.backgroundColor = '#F6F5F2';
           action = 'plusOne';
           nextPosition += 1;
           greyPosition++;
           prevGreyPosition++;
           a++;

           continue;
         } else {
           //@ts-ignore
           y.style.backgroundColor = '#FCFAF5';
         }
         //@ts-ignore

         greyPosition++;
         prevGreyPosition++;
         a++;
       }
       //@ts-ignore
       if (y.className === activeDay) {
         if (greyPosition === prevGreyPosition && action === 'plusOne') {
           //@ts-ignore
           y.style.backgroundColor = '#F6F5F2';
           action = 'plusSeven';
           nextPosition += 6;
           greyPosition++;
           prevGreyPosition++;
           a++;
           continue;
         }
         if (nextPosition === prevGreyPosition && action === 'plusSeven') {
           //@ts-ignore
           y.style.backgroundColor = '#F6F5F2';
           action = 'plusOne';
           nextPosition += 1;
           greyPosition++;
           prevGreyPosition++;
           a++;

           continue;
         }

         greyPosition++;
         prevGreyPosition++;
         a++;
       }
     }
   }
  }
 

  useEffect(()=>{
    let myParentDiv = nextBtn.current;
    //@ts-ignore
    myParentDiv.style.backgroundColor = 'none';

    //@ts-ignore
    let selctedElement = myParentDiv.children[0];
       
    //@ts-ignore
    selctedElement.style.display = 'flex';
    // selctedElement.style.backgroundColor = "yellow"
    selctedElement.style.position ="relative"
    let [firstElement, secondElement, thirdEle, fourthEle, fifthEle] =
      selctedElement.children;
    firstElement.style.display = 'none';
    fifthEle.style.display = 'none';
    thirdEle.style.position = "absolute"
      secondElement.style.position = 'absolute';
        fourthEle.style.position = 'absolute';
     thirdEle.style.top = "20%"
     thirdEle.style.fontSize = "16px";
     thirdEle.style.fontWeight = "bold"
  
    // thirdEle.style.backgroundColor = "green"
     secondElement.style.right = '50px';
         secondElement.style.top = '20%';
      fourthEle.style.right = '0px';
          fourthEle.style.top = '20%';
       
            secondElement.style.width = '30px'
              secondElement.style.height = '30px'
                secondElement.style.borderRadius = '4px';
                secondElement.style.backgroundColor="#F2F3F8" 
                 secondElement.style.display = 'flex'; 
                  secondElement.style.justifyContent = 'center'; 
                   secondElement.style.alignItems = 'center'; 

                      fourthEle.style.width = '30px';
                      fourthEle.style.height = '30px';
                      fourthEle.style.borderRadius = '4px';
                      fourthEle.style.backgroundColor = '#F2F3F8';
                     fourthEle.style.display = 'flex';
                      fourthEle.style.justifyContent = 'center';
                      fourthEle.style.alignItems = 'center';

                    //@ts-ignore
                       
                   
                  let selectedItems = myParentDiv.children[1].getElementsByClassName(
                    'react-calendar__month-view__days'
                  );
           let childrenName = selectedItems[0].children;
                   setListDay(childrenName);

                  
                 
                  

          
  })
  useEffect(() => {
    changeDefaultStyle()
 
  },[listDay]);
const handleChange =()=>{
  //@ts-ignore
  setListDay('');
  changeDefaultStyle();
}

 const selectedDay = (val:any) => {
 ;
  
  setCurrentDate(val)
 };

 useEffect(()=>{
   let currentEle = dateSelector.current ;
   //@ts-ignore
   let selectedEle = currentEle.getElementsByClassName(
     'DatePicker_monthYearLabel__T6Ong'
   ); 
  //  setCurrentDate(new Date());

   selectedEle[0].style.display = "none"
  //  selectedEle.style.border = "solid 2px red"
  console.log(selectedEle);


 },[])




  return (
    <section className={style.scheduleComp}>
      <div className={style.HeaderWrapper}>
        <ChatHeader title='Schedule'></ChatHeader>
      </div>
      <div className={style.scheduleMain}>
        <section className={style.Calendar}>
          <div className={style.calenderHeader}>
            <p>
              <b>Your Schedule</b>
            </p>
          </div>
          {/*medium calendar Header*/}
          <div className={style.mddaysContainer}>
            <section className={style.dateContainer}>
              <p className={style.dayNumber}>{new Date().getDate()}</p>
              &nbsp;
              <section className={style.dateDetail}>
                <p>{daysOfWk[value.getDay()]}</p>
                <p>
                  {monthName[value.getMonth()]} {value.getFullYear()}
                </p>
              </section>
            </section>
            <section className={style.todayCont}>
              <p>Today</p>
            </section>
          </div>
          {/* end of medium calendar Header*/}
          {/* <div className={style.calenderYear}>
            <p className={style.monthName}>
              {monthName[value.getMonth()]},{value.getFullYear()}
            </p>
            <section className={style.btnArrow}>
              <button className={style.mnthForBtn}>
                <img src={forwardBtnIcon} alt='' />
              </button>
              <button className={style.mnthForBtn} onClick={changeMonth}>
                <img src={backwardBtnIcon} alt='' />
              </button>
            </section>
          </div> */}
          <div className={style.calendarWrapper}>
            <Calendar
              calendarType='US'
              // showNavigation={false}
              onChange={onChange}
              value={value}
              className={style.calendarStyle}
              tileClassName={`${style.firstItems}${style.secondItems}`}
              inputRef={nextBtn}
              nextLabel={
                <button className={style.mnthForBtn} onClick={handleChange}>
                  <img src={backwardBtnIcon} alt='' />
                </button>
              }
              prevLabel={
                <button className={style.mnthForBtn} onClick={handleChange}>
                  <img src={forwardBtnIcon} alt='' />
                </button>
              }
            />
            <div className={style.courseAvail}>
              <h1>Courses</h1>
              <SelectCourse name='Mathematics'></SelectCourse>
              <SelectCourse name='English Language'></SelectCourse>
              <SelectCourse name='Biology'></SelectCourse>
              <SelectCourse name='Physics'></SelectCourse>
              <SelectCourse name='Commerce'></SelectCourse>
            </div>
          </div>
        </section>

        <section className={style.availabelSche}>
          <div className={style.daysContainer}>
            <section className={style.dateContainer}>
              <p className={style.dayNumber}>{new Date().getDate()}</p>
              &nbsp;
              <section className={style.dateDetail}>
                <p>{daysOfWk[value.getDay()]}</p>
                <p>
                  {monthName[value.getMonth()]} {value.getFullYear()}
                </p>
              </section>
            </section>
            <section className={style.todayCont}>
              <p>Today</p>
            </section>
          </div>
          {/*responsive Date Header*/}
          <div className={style.smdaysContainer}>
            <section className={style.dateContainer}>
              <p className={style.dayNumber}>{currentDateMb.getDate()}</p>
              &nbsp;
              <section className={style.dateDetail}>
                <p>{daysOfWk[currentDateMb.getDay()]}</p>
                <p>
                  {monthName[currentDateMb.getMonth()]}
                  {currentDateMb.getFullYear()}
                </p>
              </section>
            </section>
            <section className={style.todayCont}>
              <p>Today</p>
            </section>
          </div>
          {/*end of responsive date header*/}
          {/* <div>new {`${currentDateMb.getDay()}`}</div> */}
          
          <br></br>
          <section ref={dateSelector} className={style.mobileCalendar}>
            <DatePicker
              getSelectedDay={selectedDay}
              endDate={9}
              selectDate={currentDateMb}
              color={'#374e8c'}
              style={{
                backgroundColor: 'yellow',
                display: 'none',
              }}
              marked={[
                {
                  date: new Date(),
                  marked: true,
                  style: {
                    color: '#ff0000',
                    padding: '2px',
                    fontSize: 12,
                  },
                  text: '1x',
                },
                {
                  date: new Date(),
                  marked: true,
                  text: '5x',
                },
              ]}
            />
          </section>
          <br></br>
          <div className={style.mbCourseContent}>
            <section className={style.mbCourseText}>
              <p>Time</p>&nbsp;&nbsp;&nbsp;&nbsp;
              <p>Course</p>
            </section>
            <section>
              <img src={sortLogo} alt='' />
            </section>
          </div>
          <br></br>
          <div className={style.schedulesList}>
            <ScheduleCard></ScheduleCard>
            <ScheduleCard></ScheduleCard>
            <ScheduleCard></ScheduleCard>
            <ScheduleCard></ScheduleCard>
          </div>
        </section>
      </div>
      <MobileSidebar></MobileSidebar>
    </section>
  );
}

export default ScheduleCom