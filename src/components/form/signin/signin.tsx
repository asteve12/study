import React,{useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
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
import {addUser} from "../../../redux/reducers/signup"
import {registerNewUser} from "../../../axios"
import { AnyARecord } from 'dns';

interface State {
  Email: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function InputAdornments() {
  const signinInfo = useSelector<any>(storeState => storeState.signin);
    const [redirectPage,setRedirect] = useState(false);
    const [userExist,setUser] = useState(false)
    const addUserDispatch = useDispatch<any>()
  
 
      const[isCheck,setIsCheck]= React.useState(true)
  const [values, setValues] = React.useState<State>({
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

  const handleInputBox = ()=>{
    setIsCheck(!isCheck);

  }

  const handleClickShowPassword = () => {

    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  /*formik section*/
  /*form validation*/
  interface validateInput{
    Email:string,
    password:string,
  
  }
   interface emailInterface{
    Email?:string,
    password?:string
   
  }

  const checkUserExist = (values:any)=>{

    registerNewUser.get("/signup.json").then((response)=>{
     let availaBleUser = Object.keys(response.data)
     for(let eachItems of availaBleUser ){
       console.log('response', response.data[eachItems].Email === values.Email);
       if (response.data[eachItems].Email === values.Email) {
         return true;
       }
     }

    }).then((response)=>{
       if(response){
           setUser(true);
           setTimeout(()=> setUser(false), 1000)

           
       }
       else{
          if (
            isCheck &&
            values.Email &&
            values.password 
            
          ) {
            addUserDispatch(addUser(values));
            setRedirect(true);
          }
       }

    })
    .catch((error)=>{
      console.log("user validation",error)
    })

  }
  const validate = (value:validateInput) => {
    const errors:emailInterface = {};
       if (!value.Email) {
         errors.Email = 'email required';
         console.log("emaill")
       } 
       else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.Email)
       ) {
         errors.Email = 'Invalid email address';
       }
    if (!value.password) {
      errors.password = 'Required';
    
    }
     
     

    return errors;
  };


  const formChangeObj = useFormik({
    initialValues: {
      Email: '',
      password: '',
     
    },
    validate,
    onSubmit: (values) => {
       checkUserExist(values);
     
     
    },
  });

  return (
    <Box>
      {redirectPage == true ? <Navigate to='/createAccount'></Navigate> : null}
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
              value={formChangeObj.values.Email}/>
          </FormControl>
        </div>
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
                    onMouseDown={handleMouseDownPassword}
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
        <button className={style.createAccount} type='submit'>
          Create Account
        </button>
        <br></br>
        <section className={style.createAccoutEnding}>
          <span>
            Already a member?{' '}
            <Link to='/'>
              <b>Log in</b>
            </Link>
          </span>
        </section>
      </form>
    </Box>
  );
}
