import { configureStore } from '@reduxjs/toolkit';
import signinSlice from "./reducers/signup"
import loginSlice from "./reducers/login"
import logout from  "./reducers/logout"


const store = configureStore({
  reducer: {
    signin: signinSlice,
    login: loginSlice,
    logout: logout,
  },
});



export default store;


