import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';


import {registerNewUser} from "../../axios"
import signupuser from "../../firebaseConfig/firebasesignin"

const firebaseConfig = {
  apiKey: 'AIzaSyDT-zrQbWvHt15SiNKCcDofxl1ubVj9mLE',
  authDomain: 'yourstudypath-ysp.firebaseapp.com',
  databaseURL: 'https://yourstudypath-ysp-default-rtdb.firebaseio.com',
  projectId: 'yourstudypath-ysp',
  storageBucket: 'yourstudypath-ysp.appspot.com',
  messagingSenderId: '899670359755',
  appId: '1:899670359755:web:53d7178f926074ec6c654e',
  measurementId: 'G-RZKLL82KYC',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


let addNewUser = createAsyncThunk(
  'addNewUser',
  async (userDetail?: any) => {
    let { Email, password } = userDetail.values;
    let reply = signupuser(Email, password);
    return reply;
  }
);

export { addNewUser };


const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    firstName: '',
    lastName: '',
    city: '',
    course: '',
    phoneNumber: '',
    NIN: '',
    Email: '',
    password: '',
    loading: false,
    errorMsg: '',
    redirectFromSignup: false,
  },
  reducers: {
    addUser: (state: any, action: any) => {
      try {
        let keyToUpdate = Object.keys(action.payload);
        for (let eachKey of keyToUpdate) {
          state[eachKey] = action.payload[eachKey];
        }
       

        if (state.firstName !== '') {
          state.loading = true;
          let userId = localStorage.getItem("userId");
          console.log('userId', userId)

    const db = getDatabase(app);
                  set(ref(db, 'signup/' + userId),state);
                        }
                      } catch (e) {
                        console.log('error', e);
                      }
                    },
    clearSigninDetails: (state: any) => {
      return {
        firstName: '',
        lastName: '',
        city: '',
        course: '',
        phoneNumber: '',
        NIN: '',
        Email: '',
        password: '',
        loading: false,
        errorMsg: '',
        redirectFromSignup: false,
      };
    },
  },
  extraReducers: {
    //@ts-ignore
    [addNewUser.pending]: (state, payload) => {
      state.loading = true;
    },
    //@ts-ignore
    [addNewUser.fulfilled]: (state, { payload }) => {
      console.log('state', payload);
      if (payload.errorMsg) {
        state.loading = false;

        switch (payload.errorMsg) {
          case 'Firebase: Error (auth/email-already-in-use).':
            state.errorMsg = 'Email already in use';
        }
      } else {
        let userId = payload.userInfo.uid;
        let email = payload.userInfo.email;
        localStorage.setItem('userId', userId);
         let user = localStorage.getItem('userId');
         console.log('user11', userId);
        
        state.Email = email;
        state.loading = false;
        state.redirectFromSignup=true
      }
    },
  },
});

export default signinSlice.reducer;
const addUser = signinSlice.actions.addUser 
const  clearSigninDetails = signinSlice.actions.clearSigninDetails
export { addUser, clearSigninDetails };