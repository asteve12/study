import React, { useState } from 'react';
//components
import HomeMainPage from '../../components/Home/main/main';
import HomeSideBar from "../../components/Home/sidebar/sidebar"
//style
import style from "./home.module.css"




const HomePage: React.FC = (props) => {
 
  return (
    <section className={style.homePageWrapper}>
      <HomeSideBar></HomeSideBar>
      <HomeMainPage></HomeMainPage>
    </section>
  );
};

export default HomePage;
