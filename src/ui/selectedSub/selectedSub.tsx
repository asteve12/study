import React,{useState} from "react";
//interface
import selectInterface from "./interface"


//styles
import style from "./selectedSub.module.css"
//icons
import {AiOutlineClose} from "react-icons/ai"


const SelectedSubject: React.FC<selectInterface> = (props) => {
 
  const [offeredSubject, setOfferedSubject] = useState<{name:string} []>(props.subjects);

   const removeCourse =(event:React.MouseEvent):void=>{
     const courseToRemove = event.currentTarget as HTMLButtonElement
  console.log(courseToRemove);
   const updatedCourse = offeredSubject.filter(
     (eachItems) => courseToRemove.id !== eachItems.name
   );
   setOfferedSubject(updatedCourse);

   }


 
  return (
    <section>
      <p className={style.subjects}>Subjects</p>
      <br></br>
      {offeredSubject.map((eachItems, index) => {
        return (
          <div className={style.subjectBox}>
            <p>{eachItems.name}</p>
            <button
              className={style.closeBtn}
              id={eachItems.name}
              onClick={removeCourse}
            >
              <AiOutlineClose className={style.closeIcon}></AiOutlineClose>
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default SelectedSubject;