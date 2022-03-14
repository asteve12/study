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
//styles 
import style from "./signin.module.css"

interface State {
  Email: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function InputAdornments() {
  const [values, setValues] = React.useState<State>({
    Email: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

      const handleEmailChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
            Email
          </InputLabel>
          <Input
            id='standard-adornment-password'
            className={style.disableInputStyle}
            type="text"
            value={values.Email}
            onChange={handleEmailChange('Email')}
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
            id='standard-adornment-password'
            className={style.disableInputStyle}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
    </Box>
  );
}
