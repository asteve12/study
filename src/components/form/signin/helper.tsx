import * as SignupTypes from './type';
import * as React from "react"



const handleMouseDownPassword = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.preventDefault();
};

const validate = (value: SignupTypes.validateInput) => {
  const errors: SignupTypes.emailInterface = {};
  if (!value.Email) {
    errors.Email = 'email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.Email)) {
    errors.Email = 'Invalid email address';
  }
  if (!value.password) {
    errors.password = 'Required';
  }

  return errors;
};

export {
  handleMouseDownPassword,
  validate,
};
