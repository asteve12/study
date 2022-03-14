import React,{useState} from 'react';

//components
import BestTeacher from '../../components/bestTeacher/bestTeacher';
import SureComponent from '../../components/sure/sure';

//styles
import style from "./sure.module.css"
//interfaces
import isIndicatorOn from "../onbaord/interface"





const SurePage:React.FC = (props)=>{
        const [isIndicatorOn, setIsIndicatorOn] = useState<isIndicatorOn[]>([
          { btnStatus: true },
          { btnStatus: false },
          { btnStatus: false },
        ]);

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
      <section className={style.surePageWrapper}>
        <BestTeacher
          isIndicatorOn={isIndicatorOn}
          handleIndicator={handleIndicator}
        ></BestTeacher>

      <SureComponent></SureComponent>
      </section>
    );
}

export default SurePage;