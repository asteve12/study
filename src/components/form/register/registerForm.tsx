import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import { Theme, useTheme } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ContinuBtn from "../../../ui/continueBtn/continueBtn"
import {useDispatch} from "react-redux"
import {addUser} from "../../../redux/reducers/signup"
import {Navigate} from "react-router-dom"
import { ThreeCircles } from 'react-loader-spinner';
//@ts-ignore
import {sendCode,verifyCode,verifyToken,verifyBoth} from 'email-verification-code';

import { useFormik } from 'formik';
//styles
import style from './registerForm.module.css';







const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const statesOfCoun = [
  'Lagos',
  'Abia',
  'Abuja',
  'Oyo',
  'Adamawa',
  'Akwa Ibom',
'Anambra',
'Bauchi',
'Bayelsa',
'Benue',
"Borno",
"Cross River",
"Delta",
"Ebonyi",
"Edo",
"Ekiti",
"Enugu",
"Gombe",
"Imo",
"Jigawa",
"Kaduna",
"Kano",
"Katsina",
"Kebbi",
"Kogi",
"Kwara",
"Nasarawa",
"Niger",
"Ogun",
"Ondo",
"Osun",
"Plateau",
"Rivers",
"Sokoto",
"Taraba",
"Yobe",
"Zamfara"];

function getStyles(states: string, stateName: string[], theme: Theme) {
  return {
    fontWeight:
      stateName.indexOf(states) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



interface State {
  LegalFirstName: string;
  LegalLastName: string;
  phonenumber: string;
  NIN: string;
  City:string;
  showPassword: boolean;
}

export default function RegisterForm() {
  const theme = useTheme();
  const [stateName, setStateName] = React.useState<string[]>([]);
  const addUserInfo = useDispatch()
  const [redirectPage,setRedirect] = useState(false)
  const [showLoader,setShowLoader] = useState(false)


  const inputProps = {
    border:0,
  color:"grey"
  };
  
  // const [values, setValues] = React.useState<State>({
  //   LegalFirstName: '',
  //   LegalLastName: '',
  //   phonenumber: "",
  //   NIN: "",
  //   showPassword: false,
  //   City:""
  // });




 

 
    interface validateInput {
      firstName: string;
      lastName: string;
      city: string;
      state: string;
      phoneNumber: string;
      NIN: string;
    }
    interface emailInterface {
      firstName?: string;
      lastName?: string;
      city?: string;
      state?: string;
      phoneNumber?: string;
      NIN?: string;
    }

    const validate = (value: validateInput) => {
      const errors: emailInterface = {};
      if (!value.firstName) {
        errors.firstName = 'Required';
      }
       if (!value.lastName) {
         errors.lastName = 'Required';
       }
        if (!value.city) {
          errors.city = 'Required';
        }
         if (!value.state) {
           errors.state = 'Required';
         }
          if (!value.phoneNumber) {
            errors.phoneNumber = 'Required';
          }
          else if (
            !/^\d{11}$/.test(value.phoneNumber) &&
            !/^[+]234\d{10}$/.test(value.phoneNumber)
          ) {
            errors.phoneNumber = 'invalid Number';
          }
            if (!value.NIN) {
              errors.NIN = 'Required';
            }
            else if (!/^\d{11}$/.test(value.NIN)) {
              errors.NIN = 'invalid NIN';
            }

      return errors;
    };
  const registerFormObj = useFormik({
    initialValues: {
      firstName: '',
      lastName:"",
      city:"",
       state:"",
      phoneNumber:"",
      NIN:""


    },
    validate,
    onSubmit:(values)=>{
      if(values.firstName && values.lastName && values.city && values.state && values.phoneNumber && values.NIN){
        addUserInfo(addUser(values));
        setRedirect(true)
        setShowLoader(true)
     


      }

    }
  });



  return (
    <Box>
      {redirectPage ? <Navigate replace={true} to='/sure' /> : null}
      <form onSubmit={registerFormObj.handleSubmit}>
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
              Legal first name
            </InputLabel>
            <Input
              id='firstName'
              name='firstName'
              className={style.disableInputStyle}
              type='text'
              value={registerFormObj.values.firstName}
              onChange={registerFormObj.handleChange}
              onBlur={registerFormObj.handleBlur}
            />
          </FormControl>
        </div>
        {registerFormObj.touched.firstName &&
        registerFormObj.errors.firstName ? (
          <div className={style.ErrorMsg}>
            {registerFormObj.errors.firstName}
          </div>
        ) : null}
        <br />
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
              Legal last name
            </InputLabel>
            <Input
              id='lastName'
              name='lastName'
              className={style.disableInputStyle}
              // type={values.showPassword ? 'text' : 'password'}
              value={registerFormObj.values.lastName}
              onChange={registerFormObj.handleChange}
              onBlur={registerFormObj.handleBlur}
            />
          </FormControl>
        </div>
        {registerFormObj.touched.lastName && registerFormObj.errors.lastName ? (
          <div className={style.ErrorMsg}>
            {registerFormObj.errors.lastName}
          </div>
        ) : null}
        <br />
        <div className={style.FormContainer}>
          <FormControl
            sx={{ width: '25ch', border: '2px' }}
            className={style.siginContainerForm}
            variant='standard'
          >
            <InputLabel
              htmlFor='standard-adornment-password'
              className={style.labelName}
            >
              City
            </InputLabel>
            <Input
              id='city'
              name='city'
              className={style.disableInputStyle}
              type='text'
              value={registerFormObj.values.city}
              onChange={registerFormObj.handleChange}
              onBlur={registerFormObj.handleBlur}
            />
            {registerFormObj.touched.city && registerFormObj.errors.city ? (
              <div className={style.ErrorMsg}>
                {registerFormObj.errors.city}
              </div>
            ) : null}
          </FormControl>

          <div className={style.textfield}>
            <div className={style.frmCont}>
              <FormControl
                className={style.courseFormWraper}
                sx={{
                  m: 0,
                  marginBottom: 1,
                  p: 0,
                  width: '100%',
                  '& .MuiInputLabel-root ': {
                    top: 5,
                    marginTop: 0,
                  },
                  '& label': {
                    color: 'yellow',
                  },
                }}
              >
                <InputLabel
                  id='demo-multiple-name-label'
                  className={style.courseLabel}
                >
                  state
                </InputLabel>

                <Select
                  className={style.inputBxWrapper}
                  labelId='demo-multiple-name-label'
                  id='state'
                  name='state'
                  value={registerFormObj.values.state}
                  onChange={registerFormObj.handleChange}
                  onBlur={registerFormObj.handleBlur}
                  input={
                    <OutlinedInput
                      sx={{
                        '& label:focus': {
                          color: 'yellow',
                        },
                      }}
                      label='state'
                    />
                  }
                  MenuProps={MenuProps}
                  sx={{
                    '& legend': {
                      border: 0,
                      outline: 0,
                      display: 'none',
                    },
                    '& fieldset ': {
                      borderColor: '#DBDFE9',
                      borderWidth: '0px',
                      border: 'none',
                      height: 40,
                      width: 130,
                      marginBottom: 0,
                    },
                    '& svg': {
                      top: 20,
                    },
                  }}
                >
                  {statesOfCoun.map((eachState) => (
                    <MenuItem
                      key={eachState}
                      value={eachState}
                      style={getStyles(eachState, stateName, theme)}
                    >
                      {eachState}
                    </MenuItem>
                  ))}
                </Select>
                {registerFormObj.touched.state &&
                registerFormObj.errors.state ? (
                  <div className={style.ErrorMsg}>
                    {registerFormObj.errors.state}
                  </div>
                ) : null}
              </FormControl>
            </div>
          </div>
        </div>
        <br />

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
              phone number
            </InputLabel>
            <Input
              id='phoneNumber'
              name='phoneNumber'
              className={style.disableInputStyle}
              type='text'
              value={registerFormObj.values.phoneNumber}
              onChange={registerFormObj.handleChange}
              onBlur={registerFormObj.handleBlur}
            />
          </FormControl>
          {registerFormObj.touched.phoneNumber &&
          registerFormObj.errors.phoneNumber ? (
            <div className={style.ErrorMsg}>
              {registerFormObj.errors.phoneNumber}
            </div>
          ) : null}
        </div>

        <br />
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
              NIN
            </InputLabel>
            <Input
              id='NIN'
              name='NIN'
              className={style.disableInputStyle}
              type='text'
              value={registerFormObj.values.NIN}
              onChange={registerFormObj.handleChange}
              onBlur={registerFormObj.handleBlur}
            />
          </FormControl>
          {registerFormObj.touched.NIN && registerFormObj.errors.NIN ? (
            <div className={style.ErrorMsg}>{registerFormObj.errors.NIN}</div>
          ) : null}
        </div>
        <br></br>
        {showLoader ? (
          <div>
            <ThreeCircles
              color='#315292'
              height={50}
              width={50}
              ariaLabel='three-circles-rotating'
            />
          </div>
        ) : (
          <ContinuBtn></ContinuBtn>
        )}
      </form>
    </Box>
  );
}


