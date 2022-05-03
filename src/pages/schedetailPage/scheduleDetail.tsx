import React, { useState } from 'react';
//styles
import style from './schedule.module.css';
//components
import Sidebar from '../../components/Home/sidebar/sidebar';
import ScheduleDetail from '../../components/scheduleDetail/scheduleDetail';
//interface


const OnBoardPage: React.FC = (props) => {
  

  
   
  return (
    <section className={style.homePageContainer}>
      <Sidebar></Sidebar>
      <ScheduleDetail></ScheduleDetail>
    </section>
  );
};

export default OnBoardPage;
