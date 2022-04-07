import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, child, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import {registerNewUser} from "../../axios"
import logUserIn from "../../firebaseConfig/firebaselogin"

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

const app = initializeApp(firebaseConfig);




const db = getDatabase(app);

const getUsers = createAsyncThunk(
  'get/getUsers',
  async (userDetail?: any) => {
    if (userDetail.type === "loginByForm"){
          let { email, password } = userDetail.myDetail;

          let loginReply = logUserIn(email, password).then((response) => {
            console.log('res', response);

            if (response.status) {
              //@ts-ignore
              let userDetail = response.userDetail;
              let userId = userDetail.uid;
              localStorage.setItem('userId', userId);
              const dbRef = ref(getDatabase());
              let loginDetails = get(child(dbRef, `signup/${userId}`))
                .then((snapshot) => {
                  if (snapshot.exists()) {
                    console.log('snapshot', snapshot.val());
                    return snapshot.val();
                  } else {
                    console.log('No data available');
                  }
                })
                .catch((error) => {
                  console.error(error);
                  return error
                });

              return loginDetails;
            } else {
              return response
            }
          });

          return loginReply;
      
    }
      if (userDetail.type === 'keepuser') {
        let userId = localStorage.getItem('userId');

        if (!userId) {
          return false;
        }
        const dbRef = ref(getDatabase());
        let loginDetails = get(child(dbRef, `signup/${userId}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log('snapshot', snapshot.val());
              return snapshot.val();
            } else {
              console.log('No data available');
            }
          })
          .catch((error) => {
            console.error("when error occurred",error);
            return {
              status: false,
              errorMsg: error,
            };
          });

        console.log('usdeat', loginDetails);

        return loginDetails;
      } 

  }
);

// const getSigninUserByForm = createAsyncThunk(
//   'get/getUsers',
//   async (userDetail:any,thunkAPI) => {
//     let res = registerNewUser.get('/signup.json').then((response) => {
//       return response.data;
//     });

//     return res;
//   }
// );






const loginSlice = createSlice({
  name: 'login',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    city: '',
    NIN: '',
    loading: true,
    userExist: '',
    loginFormStatus: '',
    showFormLoader: false,
    errorMsg: '',
    netWorkError:""
  },
  reducers: {
    addSigninUser: (state: any, action: any) => {
      // state.showFormLoader =  true

      if (action.payload.type === 'loginByForm') {
        let { myDetail } = action.payload;
        let userEmail = myDetail.email;
        let userPassword = myDetail.password;
        // logUserIn(userEmail, userPassword);

        registerNewUser.get('/signup.json').then((response) => {
          let userObjKey = Object.keys(response.data);

          for (let eachUser of userObjKey) {
            if (
              response.data[eachUser].Email === userEmail &&
              response.data[eachUser].password === userPassword
            ) {
              // state.showFormLoader = false;
              state.email = userEmail;

              localStorage.setItem('userId', eachUser);
            }
          }
        });
      }
      try {
        const { userDetail, tokenDetail } = action.payload;
        state.firstName = userDetail.familyName;
        state.lastName = userDetail.givenName;
        state.email = userDetail.email;

        state.accessTokenDetail = {
          tokenId: tokenDetail.access_token,
          expireIn: tokenDetail.expires_in,
        };
        localStorage.setItem('token', userDetail);
        localStorage.setItem('tokenExpireIn', tokenDetail.expires_in);
        registerNewUser.get('/signup.json').then((response) => {
          let arrayOfObjectKey = Object.keys(response.data);

          for (let eachItems of arrayOfObjectKey) {
            let eachUser = response.data[eachItems];

            if (response.data[eachItems].Email === userDetail.email) {
              localStorage.setItem('userId', eachItems);
              break;
            }
          }
        });
        // setTimeout(() => {
        //   localStorage.removeItem('token');
        //   alert();
        // }, tokenDetail.expires_in);

        let userKey: string;
      } catch (e) {
        console.log('login redux section error', e);
      }
    },
    clearState: (state: any) => {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        NIN: '',
        loading: true,
        userExist: 'unknown',
        loginFormStatus: '',
        showFormLoader: false,
        errorMsg: '',
        netWorkError:""
      };
    },
    changeLoginStatus: (state: any) => {
      state.loginFormStatus = '';
    },
  },
  extraReducers: {
    //@ts-ignore
    [getUsers.pending]: (state, { meta }) => {
      if (meta.arg) {
        if (meta.arg.type === 'loginByForm') {
          state.showFormLoader = true;
        }
      }
    },
    //@ts-ignore
    [getUsers.fulfilled]: (state, { payload, meta }) => {
   

      if (meta.arg) {
        if (meta.arg.type === 'validategoogleform') {
          const userObj = meta.arg.userDetail;
          console.log('my userDetails', userObj);
          const userEmail = userObj.email;
          const userFirstName = userObj.familyName;
          const userLastName = userObj.givenName;
          let userObjKeys = Object.keys(payload);
          for (let eachItems of userObjKeys) {
            if (payload[eachItems].Email === userEmail) {
              state.email = userEmail;
              state.firstName = userFirstName;
              state.lastName = userLastName;
            } else {
              state.userExist = 'No';
            }
          }
        }

        if (meta.arg.type === 'loginByForm' || meta.arg.type === 'keepuser') {
          console.log('mypayy', payload);
          if (!payload.status) {
               state.showFormLoader = false;
          
            switch (payload.errorMsg) {
              case 'Firebase: Error (auth/user-not-found).':
                state.errorMsg = "user does not exist"
                break; 
              case "client Error":
                  state.netWorkError = 'network error try again'; 

            }


          }
          if (!payload) {
            state.loading = false;
             
          }
          const { Email, NIN, city, course, firstName, lastName, phoneNumber } =
            payload;
          let userState = payload.state;

          state.email = Email;
          state.NIN = NIN;
          state.city = city;

          state.firstName = firstName;
          state.lastName = lastName;
          state.phoneNumber = phoneNumber;
          state.loading = false;
        }

        state.loading = false;
          //  state.showFormLoader = false;
       
      }

      // state.loading = false;
    },
    //@ts-ignore
    [getUsers.rejected]: (state) => {
      //   state.loading = false;
     
    },
  },
});


export default loginSlice.reducer;
const addSigninUser = loginSlice.actions.addSigninUser;
const clearState = loginSlice.actions.clearState;
const changeLoginStatus = loginSlice.actions.changeLoginStatus;
// const authenticateUser = loginSlice.actions.authenticateUser;
export { addSigninUser, getUsers, clearState, changeLoginStatus };