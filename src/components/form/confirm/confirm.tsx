import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//styles 
import style from "./confirm.module.css"

export default function BasicTextFields() {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete='off'
    >
      <div className={style.confirmCrsInField}>
        <TextField id='standard-basic' label='Standard' variant='standard' sx={{width:"60%",height:"50px"}} />
        <h3>Computer Science</h3>
      </div>
    </Box>
  );
}
