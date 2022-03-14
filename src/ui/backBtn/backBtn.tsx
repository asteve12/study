import React from "react";
import {Link} from "react-router-dom"
//styles
import style from "./backBtn.module.css"
//interfaces
import backBtnInterface from "./interface"
//icons
//icons
import {IoChevronBackSharp} from "react-icons/io5"


const Backbtn: React.FC<backBtnInterface> = (props) => {
  return (
    <section className={style.backWard}>
      <Link to={props.path} className={style.backWard}>
        <IoChevronBackSharp className={style.BackwardIcon}></IoChevronBackSharp>{' '}
        Back
      </Link>
    </section>
  );
}; 


export default Backbtn;