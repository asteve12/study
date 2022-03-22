import React,{useState} from "react";
//components
import BestTeacher from "../../components/bestTeacher/bestTeacher";
import ConfirmComp from "../../components/confirm/confirm"

//interface
import isIndicatorOn from "../onbaord/interface"
//style
import style from "./confirm.module.css"





const ConfirmCourse:React.FC = (props) => {
  const [currentPath, setCurrentPath] = useState('Jamb');
  const [isIndicatorOn, setIsIndicatorOn] = useState<isIndicatorOn[]>([
    { btnStatus: true },
    { btnStatus: false },
    { btnStatus: false },
  ]);

  const changeStudyPathHandler = (path: string) => {
    return;
  };

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
    <section className={style.confirmPageWrapper}>
      <BestTeacher
        isIndicatorOn={isIndicatorOn}
        handleIndicator={handleIndicator}
      ></BestTeacher>
   <ConfirmComp></ConfirmComp>
    </section>
  );
};

export default ConfirmCourse;
