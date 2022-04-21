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
import {ThreeCircles} from "react-loader-spinner";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useFormik } from 'formik';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
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
   const [datePicker, setDatePicker] = React.useState<Date | null>(null);
  const [datePickerErrMsg,setDatePickerErrorMsg] = useState("") 
  const [selectedPics,setSelectedPics] = useState("");
  const [picErrMsg,setPicErrMsg] = useState("")


  const inputProps = {
    border:0,
  color:"grey"
  };
  


   interface validateInput {
     firstName: string;
     lastName: string;
     city: string;
     state: string;
     phoneNumber: string;
     NIN: string;
     gender: string;
     street: string;
     locale: string;
     country: string;
  
   }
    interface emailInterface {
      firstName?: string;
      lastName?: string;
      city?: string;
      state?: string;
      phoneNumber?: string;
      NIN?: string;
      gender?: string;
       street?: string;
      locale?: string;
      country?: string;
    
    
    }

    countries.registerLocale(enLocale)
     

    const countryObj = countries.getNames("en",{select:"official"})

    const countryArr = Object.entries(countryObj).map(([key, value]) => {
      return {
        label: value,
        value: key,
      };
    });
    const validate = (value: validateInput) => {
      console.log('validateForm', value);
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
             if (!value.gender) {
               errors.gender = 'Required';
             }

           
               if (!value.street) {
                 errors.street = 'Required';
               }
               if (!value.locale) {
                 errors.locale = 'Required';
               }
               if (!value.country) {
                 errors.country = 'Required';
               }
                 
               

      return errors;

    };
  const registerFormObj = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      city: '',
      state: '',
      phoneNumber: '',
      NIN: '',
      gender: '',
      street: '',
      locale: '',
      country: '',
    
    },
    validate,
    onSubmit: (value) => {
      if (!datePicker) {
        setDatePickerErrorMsg('Required');
        return;
      } else {
        setDatePickerErrorMsg('');
      }
      //@ts-ignore
      if (!selectedPics.name) {
        setPicErrMsg('Required');
        return;
      } else {
        setDatePickerErrorMsg('');
      }

        if (
          value.firstName &&
          value.lastName &&
          value.city &&
          value.state &&
          value.phoneNumber &&
          value.NIN &&
          value.gender &&
          value.street &&
          value.locale &&
          value.country
        ) {
          addUserInfo(addUser(value));
          setShowLoader(true);
          setRedirect(true);
        }

    
    },
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
              gender
            </InputLabel>
            <Input
              id='gender'
              name='gender'
              className={style.disableInputStyle}
              type='text'
              value={registerFormObj.values.gender}
              onChange={registerFormObj.handleChange}
              onBlur={registerFormObj.handleBlur}
            />
          </FormControl>
          {registerFormObj.touched.gender && registerFormObj.errors.gender ? (
            <div className={style.ErrorMsg}>
              {registerFormObj.errors.gender}
            </div>
          ) : null}
        </div>
        <br></br>
        <div className={style.dateCont}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              className='date_of_birth'
              label='Date Of Birth'
              value={datePicker}
              onChange={(newValue) => {
                if (datePickerErrMsg)setDatePickerErrorMsg("");
                 setDatePicker(newValue);
                //  if (!datePicker) {
                //    console.log('my date value', datePicker);
                //    setDatePickerErrorMsg('Required');
                //  }
              }}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: '100%' }} />
              )}
            />
          </LocalizationProvider>
        </div>
        {datePickerErrMsg ? (
          <div className={style.ErrorMsg}>{datePickerErrMsg}</div>
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
              street
            </InputLabel>
            <Input
              id='street'
              name='street'
              className={style.disableInputStyle}
              type='text'
              value={registerFormObj.values.street}
              onChange={registerFormObj.handleChange}
              onBlur={registerFormObj.handleBlur}
            />
          </FormControl>
          {registerFormObj.touched.street && registerFormObj.errors.street ? (
            <div className={style.ErrorMsg}>
              {registerFormObj.errors.street}
            </div>
          ) : null}
        </div>

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
              locale
            </InputLabel>
            <Input
              id='locale'
              name='locale'
              className={style.disableInputStyle}
              type='text'
              value={registerFormObj.values.locale}
              onChange={registerFormObj.handleChange}
              onBlur={registerFormObj.handleBlur}
            />
          </FormControl>
          {registerFormObj.touched.locale && registerFormObj.errors.locale ? (
            <div className={style.ErrorMsg}>
              {registerFormObj.errors.locale}
            </div>
          ) : null}
        </div>
        <br></br>
        <FormControl fullWidth>
          <InputLabel id=''>country</InputLabel>
          <Select
            labelId='country'
            id='country'
            name='country'
            className='country'
            value={registerFormObj.values.country}
            label='country'
            onChange={registerFormObj.handleChange}
          >
            {countryArr.map(({ label, value }) => {
              return <MenuItem value={label}>{label}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <br></br>
        <br></br>
        <div className={style.profilePic}>
          <input
            type='file'
            onChange={(e) => {
              if(picErrMsg) setPicErrMsg("")
              //@ts-ignore
              registerFormObj.setFieldValue('pics', e.currentTarget.files[0]);
              //@ts-ignore
              setSelectedPics(e.currentTarget.files[0]);
              //@ts-ignore
              console.log('selctedPics', e.currentTarget.files[0]);
              
            }}
          ></input>
        </div>
        <br></br>
        {picErrMsg ? <div className={style.ErrorMsg}>{picErrMsg}</div> : null}

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


