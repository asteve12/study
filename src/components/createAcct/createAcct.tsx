import React from "react";
//styles 
import style from "./createAcct.module.css"
//svg
import Logo from "../../assets/createAcct/logo.svg"
//material-ui

import SigninForm from "../form/signin/signin"






const createAcct:React.FC = (props)=>{
    return (
      <section className={style.createAcctContainer}>
        <div className={style.ImgWrapper}>
          <img src={Logo} alt='' />
        </div>
        <div className={style.createTextWrapper}>
          <h1 className={style.createAccHeader}>
            Take Your First Step Towards Success
          </h1>
          <a href='#' className={style.signInWithGoogle}>
            Sign Up With Google
          </a>
          <br></br>
          <a href='#' className={style.signUpWithEmail}>
            Sign Up With Email
          </a>
          <SigninForm></SigninForm>
        </div>

        {/* <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl> */}
      </section>
    );
}

export default createAcct;;