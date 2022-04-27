import React,{useState} from "react";
import {useDispatch,useSelector} from "react-redux"
// import {addUser} from '../../redux/reducers/signup';

//styles 
import style from "./createAcct.module.css"
//svg

import checkBoxIcon from "../../assets/createAcct/checkBox.svg"
//components
import SigninForm from "../form/signin/signin"
//@ts-ignore
import  Checkbox from "react-custom-checkbox"
//link
import Logo from '../../assets/createAcct/logo.svg';








const CreateAcct:React.FC = (props)=>{


 

  
    return (
      <>
        {/* {redirectPage ? <Navigate to='/homePage' /> : null} */}
        <section className={style.createAcctContainer}>
          <div className={style.createAcctWrapper}>
            <div className={style.ImgWrapper}>
              <img src={Logo} alt='' />
            </div>
            <div className={style.createTextWrapper}>
              <p className={style.createAccHeader}>
                Take Your First Step Towards Success
              </p>

             <br></br>
              <div className={style.signUpWithEmail}>
                <div className={style.hzRule}></div>&nbsp; Sign Up With
                Email&nbsp;<div className={style.hzRule}></div>
              </div>
              <br></br>
              <SigninForm></SigninForm>
              <br></br>
            </div>
          </div>
        </section>
      </>
    );
}

export default CreateAcct;