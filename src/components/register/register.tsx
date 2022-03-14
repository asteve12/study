import React from "react";
//components
import RegisterForm from "../form/register/registerForm"
import Backbtn from '../../ui/backBtn/backBtn';

//styles
import style from "./register.module.css"

import ContinBtn from "../../ui/continueBtn/continueBtn"







const Register:React.FC=(props)=>{

    return (
      <section className={style.registerWrapper}>
        <div className={style.formContainer}>
          <br></br>
          <Backbtn path='/'></Backbtn>
          <br></br>
          <h1>Personal Information</h1>
          <p>
            This helps us get the best tutors and subjects to help you pass on
            your first try.
          </p>
          <RegisterForm></RegisterForm>
          <br></br>
          <ContinBtn path="/sure" ></ContinBtn>
        </div>
      </section>
    );


}

export default Register;