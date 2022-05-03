import React from "react";
import {Link} from "react-router-dom"
//styles
import style from "./backBtn.module.css"
//interfaces
import backBtnInterface from "./interface"
//icons
//icons
import {IoChevronBackSharp} from "react-icons/io5"
import {useDispatch} from "react-redux"
import {resetSubmit} from "../../redux/reducers/signup"
// import { AppDispatch } from '../../redux/store';



const Backbtn: React.FC<backBtnInterface> = (props) => {

  // const resetSubmitDispatch = useDispatch() 
  return (
    <section
      className={style.backWard}
      // onClick={() => {
      //   resetSubmitDispatch(resetSubmit)
      // alert()
      // }}
    >
      <Link to={`${props.path}`} className={style.backWard}>
        <IoChevronBackSharp className={style.BackwardIcon}></IoChevronBackSharp>{' '}
        Back
      </Link>
    </section>
  );
}; 


export default Backbtn;