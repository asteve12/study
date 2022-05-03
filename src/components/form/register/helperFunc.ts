import * as registerType from "../register/type"

export const validate = (value: registerType.validateInput) => {
 
  const errors: registerType.emailInterface = {};
  if (!value.firstName) {
    errors.firstName = 'Required';
  }
  if (!value.lastName) {
    errors.lastName = 'Required';
  }
  // if (!value.city) {
  //   errors.city = 'Required';
  // }
  // if (!value.state) {
  //   errors.state = 'Required';
  // }

  if (!value.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (
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

  // if (!value.street) {
  //   errors.street = 'Required';
  // }
  // if (!value.locale) {
  //   errors.locale = 'Required';
  // }
  if (!value.country) {
    errors.country = 'Required';
  }

  console.log("validate errors",errors)

  return errors;
};


