import React,{useState} from 'react';
//styles 
import style from "./sidebar.module.css"
//logo
import companyLogo from "../../../assets/createAcct/logo.svg"
import {FiHome} from "react-icons/fi"
import {AiOutlineSchedule} from "react-icons/ai"
import {RiChatSmile3Line} from "react-icons/ri"
import {FiDownload} from "react-icons/fi"
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


const HomeSideBar:React.FC = (props)=>{
    const [navigation, setNavigation] = useState(navigationItems);
    return (
      <section className={style.homeSideBarWrapper}>
        <div className={style.homePageContainer}>
          <div className={style.logoContainer}>
            <img src={companyLogo} alt='' />
          </div>
          <br />
        
          {navigation.map((eachItems)=>{
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

export default HomeSideBar;