import React,{useState} from 'react';
//styles 
import style from "./sidebar.module.css"
//logo
import companyLogo from "../../../assets/createAcct/logo.svg"
import {FiHome} from "react-icons/fi"
import {AiOutlineSchedule} from "react-icons/ai"
import {RiChatSmile3Line} from "react-icons/ri"
import {FiDownload} from "react-icons/fi"
import { BsPerson } from 'react-icons/bs';
//components
import SideBarItems from '../../../ui/sidebaritems/sidebarItems';

const navigationItems = [
  {
    name: 'Home',
    links: '/homePage',
    icons: FiHome,
  },
  {
    name: 'Schedule',
    links: '/schedule',
    icons: AiOutlineSchedule,
  },
  {
    name: 'Chats',
    links: '/Chats',
    icons: RiChatSmile3Line,
  },
  {
    name: 'Resources',
    links: '/Resources',
    icons: FiDownload,
  },
 
];

const smnavigationItems = [
  {
    name: 'Home',
    links: '/homePage',
    icons: FiHome,
  },
  {
    name: 'Schedule',
    links: '/schedule',
    icons: AiOutlineSchedule,
  },
  {
    name: 'Chats',
    links: '/Chats',
    icons: RiChatSmile3Line,
  },
  {
    name: 'Resources',
    links: '/Resources',
    icons: FiDownload,
  },
  { name: 'Profile', links: '/Profile', icons: BsPerson },
];


const HomeSideBar:React.FC = (props)=>{
    const [navigation, setNavigation] = useState(navigationItems);
    return (
      <>
        <section className={style.homeSideBarWrapper}>
          <div className={style.homePageContainer}>
            <div className={style.logoContainer}>
              <img src={companyLogo} alt='' />
            </div>
            <br />

            {navigation.map((eachItems) => {
              return (
                <SideBarItems
                  link={eachItems.links}
                  icon={eachItems.icons}
                  name={eachItems.name}
                ></SideBarItems>
              );
            })}
            <br></br>
            <br></br>
            <br></br>

            <div className={style.setExamDateCont}>
              <p>Let's set a reminder for you</p>
              <button className={style.setExamDate}>Select exam date</button>
            </div>
          </div>
        </section>
       
      
      </>
    );
}

export default HomeSideBar;

export const MobileSidebar:React.FC = ()=>{
  const [navigation, setNavigation] = useState(navigationItems);
  return (
    <section className={style.mobileSidebar}>
      <div className={style.homePageContainer}>
        {/* <div className={style.logoContainer}>
              <img src={companyLogo} alt='' />
            </div> */}
        <br />

        {smnavigationItems.map((eachItems) => {
          return (
            <SideBarItems
              link={eachItems.links}
              icon={eachItems.icons}
              name={eachItems.name}
            ></SideBarItems>
          );
        })}
      </div>
    </section>
  );
}

