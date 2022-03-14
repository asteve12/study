import React,{useState} from "react";
//components
import BestTeacher from "../../components/bestTeacher/bestTeacher";
import RegisterForm from "../../components/register/register"
//interface
import isIndicatorOn from "../onbaord/interface"
//style
import style from "./register.module.css"




const Register:React.FC = (props)=>{


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
      <section className={style.registerPageWrapper}>
        <BestTeacher
          isIndicatorOn={isIndicatorOn}
          handleIndicator={handleIndicator}
        ></BestTeacher>
     
        <RegisterForm></RegisterForm>
      </section>
    );
}


export default Register;