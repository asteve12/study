import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
//styles
import style from "./sure.module.css"

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  return (
    <Box
      component='form'
      noValidate
      autoComplete='off'
      sx={{ display: 'flex', justifyContent: 'space-between', border: 'none' }}
    >
      <FormControl
        className={style.formContainer}
        sx={{
          width: '78px',
          height: '78px',
          borderRadius: '8px',
          '& fieldset ': {
            border: 'none',
          },
          border: 'solid 1px #E9EBF1',
        }}
      >
        <OutlinedInput
          placeholder='?'
          className={style.inputOutline}
          sx={{
            '& .MuiOutlinedInput-input': {
              textAlign: 'center',
            },
          }}
        />
      </FormControl>
      <FormControl
        className={style.formContainer}
        sx={{
          width: '78px',
          height: '78px',
          borderRadius: '8px',
          '& fieldset ': {
            border: 'none',
          },
          border: 'solid 1px #E9EBF1',
        }}
      >
        <OutlinedInput
          placeholder='?'
          className={style.inputOutline}
          sx={{
            '& .MuiOutlinedInput-input': {
              textAlign: 'center',
            },
          }}
        />
      </FormControl>
      <FormControl
        className={style.formContainer}
        sx={{
          width: '78px',
          height: '78px',
          borderRadius: '8px',
          '& fieldset ': {
            border: 'none',
          },
          border: 'solid 1px #E9EBF1',
        }}
      >
        <OutlinedInput
          placeholder='?'
          className={style.inputOutline}
          sx={{
            '& .MuiOutlinedInput-input': {
              textAlign: 'center',
            },
          }}
        />
      </FormControl>
      <FormControl
        className={style.formContainer}
        sx={{
          width: '78px',
          height: '78px',
          borderRadius: '8px',
          '& fieldset ': {
            border: 'none',
          },
          border: 'solid 1px #E9EBF1',
        }}
      >
        <OutlinedInput
          placeholder='?'
          className={style.inputOutline}
          sx={{
            '& .MuiOutlinedInput-input': {
              textAlign: 'center',
            },
          }}
        />
      </FormControl>
      <FormControl
        className={style.formContainer}
        sx={{
          width: '78px',
          height: '78px',
          borderRadius: '8px',
          '& fieldset ': {
            border: 'none',
          },
          border: 'solid 1px #E9EBF1',
        }}
      >
        <OutlinedInput
          placeholder='?'
          className={style.inputOutline}
          sx={{
            '& .MuiOutlinedInput-input': {
              textAlign: 'center',
            },
          }}
        />
      </FormControl>
    </Box>
  );
}
