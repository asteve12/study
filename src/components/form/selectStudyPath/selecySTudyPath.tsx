import React from "react";
//style
import style from "./selectStudyPath.module.css"
//interface
import studyPath from "./interface"
//logo
import jambLogo from "../../../assets/studyPath/jambLogo.svg"
import waecLogo from "../../../assets/studyPath/waecLogo.svg"
import smJmbLg from "../../../assets/studyPath/smjmbLogo.svg"
import smWaecLg from "../../../assets/studyPath/smWaec.svg"



const selectStudyPath: React.FC<studyPath> = (props) => {
  return (
    <section className={style.selectStdPath}>
      <div className={style.jambPath}>
        <img className={style.bgImg} src={jambLogo} alt='' />
      </div>
      <div className={style.waecPath}>
        <img className={style.bgImg} src={waecLogo} alt='' />
      </div>

      <div className={style.smjambPath}>
        <img className={style.bgImg} src={smJmbLg} alt='' />
      </div>
      <div className={style.smWaecPath}>
        <img className={style.bgImg} src={smWaecLg} alt='' />
      </div>
    </section>
  );
};

export default selectStudyPath;




