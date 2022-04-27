import React,{useEffect,useState} from "react";
//style
import style from "./selectStudyPath.module.css"
//interface
import studyPath from "./interface"
//logo
import jambLogo from "../../../assets/studyPath/jambLogo.svg"
import waecLogo from "../../../assets/studyPath/waecLogo.svg"
import smJmbLg from "../../../assets/studyPath/smjmbLogo.svg"
import smWaecLg from "../../../assets/studyPath/smWaec.svg"
import BaseUrl from "../../../axios"
import { Grid } from 'react-loader-spinner';



const SelectStudyPath: React.FC<studyPath> = (props) => {
  //@ts-ignore
 const [studyPath,setStudyPath] = useState(null)

  useEffect(()=>{
    BaseUrl.get('/api/exam/list/')
    .then((response) => {
      console.log('studyPath res', response);
      setStudyPath(response.data);
    })

  },[])
  if (studyPath === null){

    return (
      <section
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid ariaLabel='loading-indicator' color='#4E6AA0' />
      </section>
    );

  }

    return (
      <section className={style.selectStdPath}>
        {
          //@ts-ignore
          studyPath.map((eachPath) => {
            return (
              <div
                //@ts-ignore
                id={`${eachPath.exam_name}`}
                className={style.jambPath}
                onClick={props.selectItems}
              >
                <img
                  className={style.bgImg}
                  //@ts-ignore
                  src={`${eachPath.exam_image}`}
                  alt=''
                />
              </div>
            );
          })
        }
        {/* <div id='jamb' className={style.jambPath} onClick={props.selectItems}>
          <img className={style.bgImg} src={jambLogo} alt='' />
        </div>
        <div id='waec' className={style.waecPath} onClick={props.selectItems}>
          <img className={style.bgImg} src={waecLogo} alt='' />
        </div>

        <div id='jamb' className={style.smjambPath} onClick={props.selectItems}>
          <img
            className={style.bgImg}
            src={smJmbLg}
            alt=''
            onClick={props.selectItems}
          />
        </div>
        <div id='waec' className={style.smWaecPath} onClick={props.selectItems}>
          <img className={style.bgImg} src={smWaecLg} alt='' />
        </div> */}
      </section>
    );
};

export default SelectStudyPath;




