import React from "react";
//style
import style from "./selectStudyPath.module.css"
//interface
import studyPath from "./interface"
//logo
import jambLogo from "../../../assets/studyPath/jambLogo.svg"
import waecLogo from "../../../assets/studyPath/waecLogo.svg"



const selectStudyPath: React.FC<studyPath> = (props) => {
  return (
    <section className={style.selectStdPath}>
      
      <div className={style.jambPath} >
        <img src={jambLogo} alt='' />
      </div>
      <div className={style.waecPath}>
        <img src={waecLogo} alt='' />
      </div>

    
    </section>
  );
};

export default selectStudyPath;




