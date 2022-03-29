import React from "react";
//styles 
import style from "./createAcct.module.css"
//svg

import checkBoxIcon from "../../assets/createAcct/checkBox.svg"
//components
import SigninForm from "../form/signin/signin"
//@ts-ignore
import  Checkbox from "react-custom-checkbox"
//link
//@ts-ignore
import {Link} from "react-router-dom"
//icons
import {FcGoogle} from "react-icons/fc"
import Logo from '../../assets/createAcct/logo.svg';






const createAcct:React.FC = (props)=>{
    return (
      <>
        <section className={style.createAcctContainer}>
          <div className={style.createAcctWrapper}>
            <div className={style.ImgWrapper}>
              <img src={Logo} alt='' />
            </div>
            <div className={style.createTextWrapper}>
              <p className={style.createAccHeader}>
                Take Your First Step Towards Success
              </p>
              <Link to='/signup' className={style.signInWithGoogle}>
                <div>
                  <FcGoogle></FcGoogle>
                </div>
                Sign Up With Google
              </Link>
              <br></br>
              <Link to='/' className={style.signUpWithEmail}>
                <div className={style.hzRule}></div>&nbsp; Sign Up With
                Email&nbsp;<div className={style.hzRule}></div>
              </Link>
              <br></br>
              <SigninForm></SigninForm>
              <br></br>
              {/* <div className={style.agreementSection}>
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
                  <br></br>
                </div>
              </div> */}
              <br></br>

              {/* <button className={style.createAccount} onClick={()=> alert("D")} type="submit" >
                Create Account
              </button> */}
              <br />

              {/* <section className={style.createAccoutEnding}>
                <span>
                  Already a member?{' '}
                  <Link to='/'>
                    <b>Log in</b>
                  </Link>
                </span>
              </section> */}
            </div>
          </div>
        </section>
      </>
    );
}

export default createAcct;;