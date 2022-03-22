import React from "react"
//components
import {NavLink} from "react-router-dom"
//interface 
import sidebarInterface from "./interface"
//styles
import styles from "./sidebarItems.module.css"



const SideBarItems: React.FC<sidebarInterface> = (props) => {
  return (
    <>
      <section className={styles.sidebarItemsWrapper}>
        <NavLink
          className={styles.HomeLink}
          style={({ isActive }) => ({
            color: isActive ? '#45629c' : 'color:#999999',
          })}
          to={`${props.link}`}
          key={props.link}
        >
          <props.icon className={styles.iconColor}></props.icon> {props.name}
        </NavLink>
      </section>
      {/*responsiveness*/}
      <section className={styles.mobileItemsWrapper}>
        <NavLink
          className={styles.smHomeLink}
          style={({ isActive }) => ({
            color: isActive ? '#45629c' : 'color:#999999',
          })}
          to={`${props.link}`}
          key={props.link}
        >
          <props.icon className={styles.iconColor}></props.icon> 
        </NavLink>
      </section>
    </>
  );
};

export default SideBarItems;