import axios from "axios"



 const registerNewUser = axios.create({
   baseURL: 'https://ysp-staging.herokuapp.com',
  
 });

export default registerNewUser;


  // export const authenticateUser = axios.create({
  //   baseURL:
  //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=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',
  // });