import * as React from 'react';
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


import MenuItem from '@mui/material/MenuItem';
//styles
import style from './registerForm.module.css';






const currencies = [
  {
    value: 'USD',
    label: 'state',
  },
  {
    value: 'EUR',
    label: 'state',
  },
  {
    value: 'BTC',
    label: 'state',
  },
  {
    value: 'JPY',
    label: 'state',
  },
];

interface State {
  LegalFirstName: string;
  LegalLastName: string;
  phonenumber: string;
  NIN: string;
  City:string;
  showPassword: boolean;
}

export default function RegisterForm() {
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

   const [currency, setCurrency] = React.useState('EUR');

  // const handleChange =
  //   (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  //handledropdown
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setCurrency(event.target.value);
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

  // const handleLegalLastName = () => {
  //   setValues({
  //     ...values,
  //     LegalLastName: !values.showPassword,
  //   });
  // };

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
            // endAdornment={
            //   <InputAdornment position='end'>
            //     <IconButton
            //       aria-label='toggle password visibility'
            //       onClick={handleClickShowPassword}
            //       onMouseDown={handleMouseDownPassword}
            //     >
            //       {values.showPassword ? <VisibilityOff /> : <Visibility />}
            //     </IconButton>
            //   </InputAdornment>
            // }
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
            legal last name
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
            // endAdornment={
            //   <InputAdornment position='end'>
            //     <IconButton
            //       aria-label='toggle password visibility'
            //       onClick={handleClickShowPassword}
            //       onMouseDown={handleMouseDownPassword}
            //     >
            //       {values.showPassword ? <VisibilityOff /> : <Visibility />}
            //     </IconButton>
            //   </InputAdornment>
            // }
          />
        </FormControl>
        <div className={style.textfield}>
          <TextField
          
            className={style.disableTextFieldSTyle}
            
            id='standard-select-currency'
            select
            label='Select'
            value={currency}
            onChange={handleChange}
            variant='standard'
            inputProps={inputProps}
            sx={{
              border: 0,
              bottom: 0,
              '& .MuiInput-root::after': {
                border: 0,
              },
              '& label': {
                display: 'none',
              },
              '& .MuiInput-root::before': {
                borderBottom: 0,
              },
              '& .MuiInput-root:hover:not(.Mui-disabled):before': {
                borderBottom: 0,
                backgroundColor: 'none',
              },

              '& .MuiInput-input:focus': {
              backgroundColor:"#FFFFFF",
              
              },
              
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                className={style.afterMenu}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
            // endAdornment={
            //   <InputAdornment position='end'>
            //     <IconButton
            //       aria-label='toggle password visibility'
            //       onClick={handleClickShowPassword}
            //       onMouseDown={handleMouseDownPassword}
            //     >
            //       {values.showPassword ? <VisibilityOff /> : <Visibility />}
            //     </IconButton>
            //   </InputAdornment>
            // }
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
            // endAdornment={
            //   <InputAdornment position='end'>
            //     <IconButton
            //       aria-label='toggle password visibility'
            //       onClick={handleClickShowPassword}
            //       onMouseDown={handleMouseDownPassword}
            //     >
            //       {values.showPassword ? <VisibilityOff /> : <Visibility />}
            //     </IconButton>
            //   </InputAdornment>
            // }
          />
        </FormControl>
      </div>
    </Box>
  );
}


