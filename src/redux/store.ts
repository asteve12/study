import { configureStore } from '@reduxjs/toolkit';
import signinSlice from "./reducers/signup"


const store = configureStore({
  reducer: {
    signin: signinSlice,
  },
});



export default store;


