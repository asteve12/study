import React from "react";
//components
import RegisterForm from "../form/register/registerForm"
import Backbtn from '../../ui/backBtn/backBtn';


//styles
import style from "./register.module.css"









const Register:React.FC=(props)=>{

    return (
      <section className={style.registerWrapper}>
        <div className={style.formContainer}>
          <br></br>
          <Backbtn path='/'></Backbtn>
          <br></br>
          <div className={style.registedHeader}>Personal Information</div>
          <p>
            This helps us get the best tutors and subjects to help you pass on
            your first try.
          </p>
          <RegisterForm></RegisterForm>
          <br></br>
         
        </div>
      </section>
    );


}

export default Register;