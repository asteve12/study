import React from "react";
//styles 
import style from "./courses.module.css"
//components 
import CourseComp from "../../components/course/course"
import ChatHeader from "../../ui/chatHeader/chatHeader"




const CoursePage:React.FC = (props)=>{
    return (
      <section className={style.coursePageWrapper}>
        <div className={style.courseHeader}>
          <ChatHeader title='Profile'></ChatHeader>
        </div>

        <CourseComp></CourseComp>
      </section>
    );
}

export default CoursePage;;