import React from "react";
//styles 
import style from "./createAcct.module.css"
//svg
import Logo from "../../assets/createAcct/logo.svg"
import checkBoxIcon from "../../assets/createAcct/checkBox.svg"
//material-ui

import SigninForm from "../form/signin/signin"
// //components
// import * as Icon from 'react-icons/fi';
// import Checkbox from 'react-custom-checkbox';
//@ts-ignore
import  Checkbox from "react-custom-checkbox"
//link
//@ts-ignore
import {Link} from "react-router-dom"
//icons
import {FcGoogle} from "react-icons/fc"






const createAcct:React.FC = (props)=>{
    return (
      <>
        <section className={style.createAcctContainer}>
          <div className={style.ImgWrapper}>
            <img src={Logo} alt='' />
          </div>
          <div className={style.createTextWrapper}>
            <h1 className={style.createAccHeader}>
              Take Your First Step Towards Success
            </h1>
            <Link to='/signup' className={style.signInWithGoogle}>
              <div>
                <FcGoogle></FcGoogle>
              </div>
              Sign Up With Google
            </Link>
            <br></br>
            <Link to='/' className={style.signUpWithEmail}>
              Sign Up With Email
            </Link>
            <br></br>
            <SigninForm></SigninForm>
            <br></br>
            <div className={style.agreementSection}>
              <Checkbox
                checked={true}
                icon={<img src={checkBoxIcon} alt='' />}
                borderColor='#E6E9ED'
                borderRadius={3}
                size={18}
              />
              <div>
                By creating an account you agree Yourstudypath’s Privacy and
                Terms or use
              </div>
            </div>
            <br></br>

            <Link className={style.createAccount} to='/createAccount'>
              Create Account
            </Link>
            <br />

            <section className={style.createAccoutEnding}>
              <span>
                Already a member?{' '}
                <Link to='/'>
                  <b>Log in</b>
                </Link>
              </span>
            </section>
          </div>
        </section>
      </>
    );
}

export default createAcct;;