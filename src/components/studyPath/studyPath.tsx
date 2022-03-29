import React from "react"
//styles
import style from "./studyPath.module.css"
//components
import BackBtn from "../../ui/backBtn/backBtn"
import SelectStudyPath from "../form/selectStudyPath/selecySTudyPath"
import SelectItems from '../form/selection/selection';
import ContinueBtn from "../../ui/continueBtn/continueBtn"


//interface
import studyPath from "./interface"

//s



const StudyPathComponent: React.FC<studyPath> = (props) => {
  return (
    <section className={style.studyPathPageWrapper}>
      <div className={style.studyPathContainer}>
        <br></br>
        <BackBtn path='/sure'></BackBtn>
        <br></br>
        <p className={style.stdyHeader}>What are you preparing for?</p>
        <p className={style.descText}>
          This helps us get the best tutors and subjects to help you pass on
          your first try.
        </p>
        <br></br>
        <div>
          <SelectStudyPath
            studyPath={props.path}
            changeStdPath={props.changeStudyPath}
          ></SelectStudyPath>
        </div>

        <div className={style.chooseAPth}>
          <br></br>
          <h1>Choose a study path</h1>
        <SelectItems></SelectItems>
        <br></br>
          <ContinueBtn ></ContinueBtn>
        </div>

        <br />
      </div>
    </section>
  );
};

export default StudyPathComponent;