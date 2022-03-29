import axios from "axios"



export const registerNewUser = axios.create({
  baseURL: 'https://study-b9bee-default-rtdb.firebaseio.com',
  });