import axios from "axios"



export const registerNewUser = axios.create({
  baseURL: 'https://yourstudypath-ysp-default-rtdb.firebaseio.com',
});


  // export const authenticateUser = axios.create({
  //   baseURL:
  //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=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',
  // });