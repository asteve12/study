import React from 'react';
//styles 
import style from "./bluePage.module.css"
import {Link} from "react-router-dom"
import whiteLogo from "../../assets/bluePage/logo.svg"




const BluePage:React.FC = ()=>{
    return (
      <div className={style.bluePageWrapper}>
        <div className={style.blueContWrapper}>
          <div className={style.welcomeCont}>
            <img src={whiteLogo} alt='' />
          </div>
          <br></br>
          <br></br>
          <div className={style.welcomeCont}>
            <Link className={style.linkStyle} to='/login'>
              WELCOME
            </Link>
          </div>
        </div>
      </div>
    );
}



export default BluePage;