import React from "react"
//components
import {NavLink} from "react-router-dom"
//interface 
import sidebarInterface from "./interface"
//styles
import style from "./sidebarItems.module.css"



const SideBarItems: React.FC<sidebarInterface> = (props) => {
  return (
    <section className={style.sidebarItemsWrapper}>
      <NavLink
        className={style.HomeLink}
        to={props.link}
        style={(isActive) => ({
          color: isActive ? '#45629c' : 'color:#999999',
        })}
      >
        <props.icon className={style.iconColor}></props.icon> {props.name}
      </NavLink>
    </section>
  );
};

export default SideBarItems;