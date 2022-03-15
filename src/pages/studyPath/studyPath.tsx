import React, { useState } from 'react';
//components
import BestTeacher from '../../components/bestTeacher/bestTeacher';
import StudyPathComponent from "../../components/studyPath/studyPath";
//interface
import isIndicatorOn from '../onbaord/interface';
//style
import style from './studyPath.module.css';

const StudyPath: React.FC = (props) => {
    const [currentPath,setCurrentPath] = useState("Jamb")
  const [isIndicatorOn, setIsIndicatorOn] = useState<isIndicatorOn[]>([
    { btnStatus: true },
    { btnStatus: false },
    { btnStatus: false },
    
  ]);

   const changeStudyPathHandler = (path:string)=>{
    return;

  }

  const handleIndicator = (e: React.MouseEvent) => {
    const selectedElement = e.target as HTMLParagraphElement;
    isIndicatorOn.map((eachItems, index) => {
      if (selectedElement.id === '0') {
        setIsIndicatorOn([
          { btnStatus: true },
          { btnStatus: false },
          { btnStatus: false },
        ]);
      } else if (selectedElement.id === '1') {
        setIsIndicatorOn([
          { btnStatus: false },
          { btnStatus: true },
          { btnStatus: false },
        ]);
      } else if (selectedElement.id === '2') {
        setIsIndicatorOn([
          { btnStatus: false },
          { btnStatus: false },
          { btnStatus: true },
        ]);
      }
      return;
    });
  };

 
  return (
    <section className={style.studyPathPageWrapper}>
      <BestTeacher
        isIndicatorOn={isIndicatorOn}
        handleIndicator={handleIndicator}
      ></BestTeacher>
      <StudyPathComponent changeStudyPath={()=> changeStudyPathHandler("jamb")} path={currentPath}></StudyPathComponent>

     
    </section>
  );
};

export default StudyPath;
