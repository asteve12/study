import * as React from 'react';
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

const statesOfCoun = ['Abuja', 'Oyo'];

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

  const inputProps = {
    border:0,
  color:"grey"
  };
  
  const [values, setValues] = React.useState<State>({
    LegalFirstName: '',
    LegalLastName: '',
    phonenumber: "",
    NIN: "",
    showPassword: false,
    City:""
  });



const handleStateNameChange = (
      event: SelectChangeEvent<typeof stateName>
    ) => {
      const {
        target: { value },
      } = event;
      setStateName(
     
        typeof value === 'string' ? value.split(',') : value
      );
    };
 

  const handleLegalFirstNamechange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };


      const handleCitychange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, [prop]: event.target.value });
        };
      const handleNINchange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, [prop]: event.target.value });
        };

     const handleLegalLastNamechange =
       (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
         setValues({ ...values, [prop]: event.target.value });
       };

         const handlePhoneNumberchange =
           (prop: keyof State) =>
           (event: React.ChangeEvent<HTMLInputElement>) => {
             setValues({ ...values, [prop]: event.target.value });
           };

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

  return (
    <Box>
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
            id='standard-adornment-password'
            className={style.disableInputStyle}
            type='text'
            value={values.LegalFirstName}
            onChange={handleLegalFirstNamechange('LegalFirstName')}
          
          />
        </FormControl>
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
            Legal last name
          </InputLabel>
          <Input
            id='standard-adornment-password'
            className={style.disableInputStyle}
            type={values.showPassword ? 'text' : 'password'}
            value={values.LegalLastName}
            onChange={handleLegalLastNamechange('LegalLastName')}
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
      </div>
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
            id='standard-adornment-password'
            className={style.disableInputStyle}
            type='text'
            value={values.City}
            onChange={handleCitychange('City')}
          />
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
                Course
              </InputLabel>

              <Select
                className={style.inputBxWrapper}
                labelId='demo-multiple-name-label'
                id='demo-multiple-name'
                value={stateName}
                onChange={handleStateNameChange}
                input={
                  <OutlinedInput
                    sx={{
                      '& label:focus': {
                        color: 'yellow',
                      },
                    }}
                    label='Course'
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
            id='standard-adornment-password'
            className={style.disableInputStyle}
            type='text'
            value={values.phonenumber}
            onChange={handlePhoneNumberchange('phonenumber')}
            
          />
        </FormControl>
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
            id='standard-adornment-password'
            className={style.disableInputStyle}
            type='text'
            value={values.NIN}
            onChange={handleNINchange('NIN')}
          
          />
        </FormControl>
      </div>
    </Box>
  );
}


