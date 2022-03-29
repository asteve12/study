import  React,{useState} from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import ContinueBtn from '../../../ui/continueBtn/continueBtn';
import { useFormik } from 'formik';
import {Navigate} from "react-router-dom"
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
  const [allowRedirect,setRedirect] = useState(false)
  interface validateInput {
    firstNumber: string;
    secondNumber: string;
    thirdNumber: string;
    fourthNumber: string;
    fifthNumber: string;
  }
  interface errorInterface {
    firstNumber?: string;
    secondNumber?: string;
    thirdNumber?: string;
    fourthNumber?: string;
    fifthNumber?: string;
  }

 const validate = (value: validateInput) => {
   const errors: errorInterface = {};
   if (!value.firstNumber) {
     errors.firstNumber = 'Field Required';
   }
   if (!value.secondNumber) {
     errors.secondNumber = 'Field Required';
   }
   if (!value.thirdNumber) {
     errors.thirdNumber = 'Field Required';
   }
   if (!value.fourthNumber) {
     errors.fourthNumber = 'Field Required';
   }
   if (!value.fifthNumber) {
     errors.fifthNumber = 'Field Required';
   }

   return errors;
 };

   const formChangeObj = useFormik({
     initialValues: {
       firstNumber: '',
       secondNumber: '',
       thirdNumber: '',
       fourthNumber: '',
       fifthNumber: '',
     },
     validate,
     onSubmit: (values) => {
       if (
         values.firstNumber &&
         values.secondNumber &&
         values.thirdNumber &&
         values.fourthNumber &&
         values.fifthNumber
       ) {
           console.log('my test number', new Array(values.firstNumber));
         setRedirect(true);
       }
     },
   });
  return (
    <div>
      {allowRedirect  ? <Navigate to="/homePage"></Navigate>:null}
      <form onSubmit={formChangeObj.handleSubmit}>
        <Box
          component='form'
          noValidate
          autoComplete='off'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            border: 'none',
          }}
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
              name='firstNumber'
              id='firstNumber'
              
              className={style.inputOutline}
              onChange={formChangeObj.handleChange}
              onBlur={formChangeObj.handleBlur}
              value={formChangeObj.values.firstNumber}
              sx={{
                '& .MuiOutlinedInput-input': {
                  textAlign: 'center',
                },
              }}
            />
            {formChangeObj.touched.firstNumber &&
            formChangeObj.errors.firstNumber ? (
              <div className={style.ErrorMsg}>
                {formChangeObj.errors.firstNumber}
              </div>
            ) : null}
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
              name='secondNumber'
              id='secondNumber'
              className={style.inputOutline}
              onChange={formChangeObj.handleChange}
              onBlur={formChangeObj.handleBlur}
              value={formChangeObj.values.secondNumber}
              sx={{
                '& .MuiOutlinedInput-input': {
                  textAlign: 'center',
                },
              }}
            />
            {formChangeObj.touched.secondNumber &&
            formChangeObj.errors.secondNumber ? (
              <div className={style.ErrorMsg}>
                {formChangeObj.errors.secondNumber}
              </div>
            ) : null}
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
              name='thirdNumber'
              id='thirdNumber'
              onChange={formChangeObj.handleChange}
              onBlur={formChangeObj.handleBlur}
              value={formChangeObj.values.thirdNumber}
              sx={{
                '& .MuiOutlinedInput-input': {
                  textAlign: 'center',
                },
              }}
            />
            {formChangeObj.touched.thirdNumber &&
            formChangeObj.errors.thirdNumber ? (
              <div className={style.ErrorMsg}>
                {formChangeObj.errors.thirdNumber}
              </div>
            ) : null}
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
              name='fourthNumber'
              id='fourthNumber'
              onChange={formChangeObj.handleChange}
              onBlur={formChangeObj.handleBlur}
              value={formChangeObj.values.fourthNumber}
              sx={{
                '& .MuiOutlinedInput-input': {
                  textAlign: 'center',
                },
              }}
            />
            {formChangeObj.touched.fourthNumber &&
            formChangeObj.errors.fourthNumber ? (
              <div className={style.ErrorMsg}>
                {formChangeObj.errors.fourthNumber}
              </div>
            ) : null}
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
              name='fifthNumber'
              id='fifthNumber'
              onChange={formChangeObj.handleChange}
              onBlur={formChangeObj.handleBlur}
              value={formChangeObj.values.fifthNumber}
              sx={{
                '& .MuiOutlinedInput-input': {
                  textAlign: 'center',
                },
              }}
            />
            {formChangeObj.touched.fifthNumber &&
            formChangeObj.errors.fifthNumber ? (
              <div className={style.ErrorMsg}>
                {formChangeObj.errors.fifthNumber}
              </div>
            ) : null}
          </FormControl>
        </Box>

        <br></br>
        <br></br>

        <div className={style.contBtnWrapper}>
          <ContinueBtn></ContinueBtn>
        </div>
        <br></br>
      </form>
    </div>
  );
}
