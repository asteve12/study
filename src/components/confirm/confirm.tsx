import React from "react"
//styles
import style from "./confirm.module.css"
//components
import BckBtn from "../../ui/backBtn/backBtn"
import ConfirmForm from "../form/confirm/confirm"
import DisplaySelectedSub from "../../ui/selectedSub/selectedSub"
import ContinueBtn from "../../ui/continueBtn/continueBtn"
//icons
import {AiOutlinePlus} from "react-icons/ai"




const confirmComponent:React.FC = (props)=>{
  const selectedSub = [
    { name: 'maths' },
    { name: 'english' },
    { name: 'geography' },
  ];
    return (
      <div className={style.confirmComponentWrapper}>
        <section className={style.confirmCompCon}>
          <BckBtn path='/chooseAStudyPath'></BckBtn>
          <p className={style.confirmHeader}>Confirm your courses</p>
          <p>
            Check your course combination as selected in your exam application
          </p>

          <ConfirmForm></ConfirmForm>
          {/* <br></br> */}
          <br></br>
          <DisplaySelectedSub subjects={selectedSub}></DisplaySelectedSub>
          <br></br>
          <div className={style.addSubjectBtn}>
            <button className={style.addBtn}>
              <AiOutlinePlus></AiOutlinePlus>
            </button>
            &nbsp;&nbsp;<b>Add Subject</b>
          </div>
          <br />
        
          <ContinueBtn ></ContinueBtn>
        </section>
      </div>
    );
}


export default confirmComponent;