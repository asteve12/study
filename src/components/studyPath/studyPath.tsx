import  React,{useState,useEffect} from "react"
//styles
import style from "./studyPath.module.css"
//components
import BackBtn from "../../ui/backBtn/backBtn"
import SelectStudyPath from "../form/selectStudyPath/selecySTudyPath"
import SelectItems from '../form/selection/selection';




//interface
import studyPath from "./interface"

//s



const StudyPathComponent: React.FC<studyPath> = (props) => {

    const chooseCourseHandler = (e: React.MouseEvent) => {
         const selectedElemen = e.currentTarget as HTMLElement;
      
       const selectedId  = selectedElemen.id;
       const arrayOfString = selectedId.split(" ")
       if(arrayOfString.includes("selected")){
            selectedElemen.style.border = 'solid 2px rgba(126, 139, 182, 0.3)';
            const newId = arrayOfString.filter(
              (eachId) => eachId !== 'selected'
            );

            selectedElemen.id = newId[0];

            return;

       }

       const prevId = selectedElemen.id
      selectedElemen.style.border = 'solid 10px #4E6AA0';
         console.log('actualElement', selectedElemen.style.border);

      selectedElemen.id = `${prevId} selected`; 

      
 
    };
  

 return (
   <section className={style.studyPathPageWrapper}>
     <div className={style.studyPathContainer}>
       <br></br>
       <BackBtn path='/sure'></BackBtn>
       <br></br>
       <p className={style.stdyHeader}>What are you preparing for?</p>
       <p className={style.descText}>
         This helps us get the best tutors and subjects to help you pass on your
         first try.
       </p>
       <br></br>
       <div>
         <SelectStudyPath
           studyPath={props.path}
           changeStdPath={props.changeStudyPath}
           selectItems={chooseCourseHandler}
         ></SelectStudyPath>
       </div>

       <div className={style.chooseAPth}>
         <br></br>
         <h1>Choose a study path</h1>
         <SelectItems></SelectItems>
         <br></br>
       </div>

       <br />
     </div>
   </section>
 );
};

export default StudyPathComponent;