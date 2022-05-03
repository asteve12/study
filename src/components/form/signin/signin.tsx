import React,{useState} from 'react';
import * as  HelperFunc from "./helper"
import * as SignupTypes from './type';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import {ThreeCircles} from "react-loader-spinner"
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Link} from "react-router-dom"
import { Navigate } from 'react-router-dom';
//@ts-ignore
import Checkbox from 'react-custom-checkbox';
import checkBoxIcon from '../../../assets/createAcct/checkBox.svg';
import { useFormik } from 'formik';
//styles 
import style from "./signin.module.css"
import {useSelector,useDispatch} from "react-redux"
import { addNewUser } from '../../../redux/reducers/signup';
import { AnyARecord } from 'dns';
import {
  addSigninUser,
  getUsers,
  changeLoginStatus,
} from '../../../redux/reducers/login'

import { RootState, AppDispatch } from '../../../redux/store';






export default function InputAdornments() {
  const signinInfo = useSelector<any>(storeState => storeState.signin);
    const [redirectPage,setRedirect] = useState(false);
    const [userExist,setUser] = useState(false)
    const addUserDispatch = useDispatch<any>()
    const[alreadyMember,setMember] = useState(false)
    const[showLoader,setShowLoader] = useState(false)
    const changeErrorStatus = useDispatch<any>()
    // const routeInfo = useRouteMatch();
    console.log('paramedetails',window.location.href);
    //@ts-ignore
     const signUpDetail = useSelector(state=>state.signin)
   const[isCheck,setIsCheck]= React.useState(true)
  const [values, setValues] = React.useState<SignupTypes.State>({
    Email: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });




  const handleInputBox = () => {
    setIsCheck(!isCheck);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };


 const formChangeObj = useFormik({
   initialValues: {
     Email: '',
     password: '',
   },
   validate:HelperFunc.validate,
   onSubmit: (values) => {
   
    
     const signUpObj = { type: 'verifyEmail', values };
     addUserDispatch(addNewUser(signUpObj));
   },
 });

  return (
    <Box>
      {signUpDetail.submitting === true ? <Navigate to='/createAccount'></Navigate> : null}
      <form onSubmit={formChangeObj.handleSubmit}>
        <div className={style.formContainer}>
          <FormControl
            // sx={{ width: '25ch', border: '2px' }}
            className={style.siginContainer}
            variant='standard'
          >
            <InputLabel
              htmlFor='standard-adornment-password'
              className={style.labelName}
            >
              Email
            </InputLabel>
            <Input
              id='Email'
              name='Email'
              className={style.disableInputStyle}
              type='text'
              onChange={formChangeObj.handleChange}
              onBlur={formChangeObj.handleBlur}
              value={formChangeObj.values.Email}
            />
          </FormControl>
        </div>
        <div className={style.ErrorMsg}>{signUpDetail.errorMsg}</div>
        {formChangeObj.touched.Email && formChangeObj.errors.Email ? (
          <div className={style.ErrorMsg}>{formChangeObj.errors.Email}</div>
        ) : null}
        {userExist ? (
          <div className={style.ErrorMsg}>user Already Exist</div>
        ) : null}
        <br></br>
        <div className={style.formContainer}>
          <FormControl
            sx={{ width: '25ch', border: '2px' }}
            className={style.siginContainer}
            variant='standard'
          >
            <InputLabel
              htmlFor='standard-adornment-password'
              className={style.labelName}
            >
              Password
            </InputLabel>
            <Input
              id='password'
              name='password'
              className={style.disableInputStyle}
              type={values.showPassword ? 'text' : 'password'}
              onChange={formChangeObj.handleChange}
              value={formChangeObj.values.password}
              onBlur={formChangeObj.handleBlur}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={HelperFunc.handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {formChangeObj.touched.password && formChangeObj.errors.password ? (
            <div className={style.ErrorMsg}>
              {formChangeObj.errors.password}
            </div>
          ) : null}
        </div>
        <br />

        <div className={style.agreementSection}>
          <Checkbox
            name='Agree'
            id='Agree'
            checked={isCheck}
            icon={<img src={checkBoxIcon} alt='' />}
            borderColor='#E6E9ED'
            borderRadius={3}
            size={18}
            onChange={(val: boolean) => {
              handleInputBox();
              formChangeObj.handleChange(val);
            }}
          />
          <div>
            By creating an account you agree Yourstudypath’s Privacy and Terms
            or use
            <br></br>
          </div>
        </div>
        {!isCheck ? (
          <div className={style.ErrorMsg}>check the box Above</div>
        ) : null}
        <br />
        {signUpDetail.loading ? (
          <div className={style.loaderContainer}>
            <ThreeCircles
              color='#315292'
              height={50}
              width={50}
              ariaLabel='three-circles-rotating'
            />
          </div>
        ) : (
          <button className={style.createAccount} type='submit'>
            Create Account
          </button>
        )}

        <br></br>
        <section className={style.createAccoutEnding}>
          <span>
            {alreadyMember ? 'Already a member' : null}&nbsp;
            <Link to='/'>
              <b>Log in</b>
            </Link>
          </span>
        </section>
      </form>
    </Box>
  );
}



export  function LoginForm() {
  const signinInfo = useSelector((storeState: RootState) => storeState.signin);

  const signinUser = useSelector((storeState: RootState) => storeState.login);

  const [redirectPage, setRedirect] = useState(false);
  const [userExist, setUser] = useState(false);
  const loginUserInDispatch = useDispatch<any>();
  const addUserDispatch = useDispatch<any>()
  const [alreadyMember, setMember] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showLoginSta,setLoginSta] = useState(false)
   const changeErrorStatus = useDispatch<any>();
  
  

  const [isCheck, setIsCheck] = React.useState(true);
  const [values, setValues] = React.useState<SignupTypes.State>({
    Email: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });



  // const handleChange =
  //   (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  // const handleEmailChange =
  //   (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  const handleInputBox = () => {
    setIsCheck(!isCheck);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };




const formChangeObj = useFormik({
    initialValues: {
      Email: '',
      password: '',
    },
   validate: HelperFunc.validate,
    onSubmit: (values) => {
      // checkUserExist(values);
      let logincredential = {
        type: 'loginByForm',
        myDetail: {
          email: values.Email,
          password: values.password,
        },
      };
      //@ts-ignore
      loginUserInDispatch(getUsers(logincredential));
    },
  });

 

  return (
    <Box>
      {signinUser.loguserIn === 'yes' ? (
        <Navigate to='/homePage'></Navigate>
      ) : null}
      <form onSubmit={formChangeObj.handleSubmit}>
        <div className={style.formContainer}>
          <FormControl
            // sx={{ width: '25ch', border: '2px' }}k
            className={style.siginContainer}
            variant='standard'
          >
            <InputLabel
              htmlFor='standard-adornment-password'
              className={style.labelName}
            >
              Email
            </InputLabel>
            <Input
              id='Email'
              name='Email'
              className={style.disableInputStyle}
              type='text'
              onChange={formChangeObj.handleChange}
              onBlur={formChangeObj.handleBlur}
              value={formChangeObj.values.Email}
            />
          </FormControl>
        </div>
        {signinUser.errorMsg ? (
          <div className={style.errorMsg}>{signinUser.errorMsg}</div>
        ) : null}
        {signinUser.loginFormStatus === 'No' ? (
          <div className={style.errorMsg}>
            user does not exist or password incorrect
          </div>
        ) : null}
        {formChangeObj.touched.Email && formChangeObj.errors.Email ? (
          <div className={style.ErrorMsg}>{formChangeObj.errors.Email}</div>
        ) : null}
        {/* {userExist ? (
          <div className={style.ErrorMsg}>user Already Exist or passwi</div>
        ) : null} */}
        <br></br>
        <div className={style.formContainer}>
          <FormControl
            sx={{ width: '25ch', border: '2px' }}
            className={style.siginContainer}
            variant='standard'
          >
            <InputLabel
              htmlFor='standard-adornment-password'
              className={style.labelName}
            >
              Password
            </InputLabel>
            <Input
              id='password'
              name='password'
              className={style.disableInputStyle}
              type={values.showPassword ? 'text' : 'password'}
              onChange={formChangeObj.handleChange}
              value={formChangeObj.values.password}
              onBlur={formChangeObj.handleBlur}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={HelperFunc.handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {formChangeObj.touched.password && formChangeObj.errors.password ? (
            <div className={style.ErrorMsg}>
              {formChangeObj.errors.password}
            </div>
          ) : null}
        </div>
        <br />

        <div className={style.agreementSection}>
          <Checkbox
            name='Agree'
            id='Agree'
            checked={isCheck}
            icon={<img src={checkBoxIcon} alt='' />}
            borderColor='#E6E9ED'
            borderRadius={3}
            size={18}
            onChange={(val: boolean) => {
              handleInputBox();
              formChangeObj.handleChange(val);
            }}
          />
          <div>
            By creating an account you agree Yourstudypath’s Privacy and Terms
            or use
            <br></br>
          </div>
        </div>
        {!isCheck ? (
          <div className={style.ErrorMsg}>check the box Above</div>
        ) : null}
        <br />
        {signinUser.showFormLoader ? (
          <div className={style.loaderContainer}>
            <ThreeCircles
              color='#4E6AA0'
              height={50}
              width={50}
              ariaLabel='three-circles-rotating'
            />
          </div>
        ) : (
          <button className={style.createAccount} type='submit'>
            Log in
          </button>
        )}

        <br></br>
        <section className={style.createAccoutEnding}>
          <span>
            {alreadyMember ? 'Already a member' : null}&nbsp;
            <Link to='/register'>
              <b>Create Account</b>
            </Link>
          </span>
        </section>
      </form>
    </Box>
  );
}

