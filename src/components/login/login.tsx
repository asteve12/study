import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/reducers/login';

//styles
import style from './login.module.css';
//svg

import checkBoxIcon from '../../assets/createAcct/checkBox.svg';
//components
import { LoginForm } from '../form/signin/signin';
import { GoogleLogin } from 'react-google-login';

//@ts-ignore
import Checkbox from 'react-custom-checkbox';
//link
//@ts-ignore
import { Navigate, useLocation } from 'react-router-dom';
//icons
import { FcGoogle } from 'react-icons/fc';
import Logo from '../../assets/createAcct/logo.svg';

const Login: React.FC = (props) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [redirectPage, setRedirectPage] = useState(false);
  const addNewUser = useDispatch<any>();
  const addSigninDispatch = useDispatch<any>();
  const signinUserDetail: any = useSelector<any>((state) => state.login);
  const [userExist, setUserExist] = useState(false);
  let location = useLocation();




  if (signinUserDetail.email) {
  }

 

  return (
    <>
      {signinUserDetail.email ? <Navigate to={`/homePage`} /> : null}
      <section className={style.createAcctContainer}>
        <div className={style.createAcctWrapper}>
          <div className={style.ImgWrapper}>
            <img src={Logo} alt='' />
          </div>
          <div className={style.createTextWrapper}>
            <p className={style.createAccHeader}>Welcome Back To Success</p>
              
            <br></br>
            <div className={style.signUpWithEmail}>
              <div className={style.hzRule}></div>&nbsp; Sign in With
              Email&nbsp;<div className={style.hzRule}></div>
            </div>
            <br></br>
            <LoginForm></LoginForm>
            <br></br>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
