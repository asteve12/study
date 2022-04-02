import React from 'react';
//styles 
import style from "./bluePage.module.css"
import {Link} from "react-router-dom"
import whiteLogo from "../../assets/bluePage/logo.svg"




const BluePage:React.FC = ()=>{
    return (
      <div className={style.bluePageWrapper}>
        <div className={style.blueContWrapper}>
          <div>
            <img src={whiteLogo} alt='' />
          </div>
          <div>
            <Link className={style.linkStyle} to='/homePage'>
              GO TO CLASSROOM
            </Link>
          </div>
        </div>
      </div>
    );
}



export default BluePage;