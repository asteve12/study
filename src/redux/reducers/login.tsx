import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import {registerNewUser} from "../../axios"


const getUsers = createAsyncThunk(
  'get/getUsers',
  async (thunkAPI, userDetail?: any) => {
      console.log('cont', userDetail);
     if (userDetail.type === "validategoogleform") {
       console.log('cont', userDetail);
     }
    let res = registerNewUser.get('/signup.json').then((response) => {
      return response.data;
    });

    return res;
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
    userExist:"",
    loginFormStatus:"",
    showFormLoader:false
  },
  reducers: {
    addSigninUser: (state: any, action: any) => {
      state.showFormLoader =  true
      console.log('my payloader', action.payload);
      if (action.payload.type === 'loginByForm') {
        let { myDetail } = action.payload;
        let userEmail = myDetail.email;
        let userPassword = myDetail.password;
        console.log('kkkkkkkkkkkk', { userEmail, userPassword });
        registerNewUser.get('/signup.json').then((response) => {
          let userObjKey = Object.keys(response.data);
          console.log('my feedback', response.data);
          for (let eachUser of userObjKey) {
            console.log('tyuser', eachUser);
            if (
              response.data[eachUser].Email === userEmail &&
              response.data[eachUser].password === userPassword
            ) {
              state.showFormLoader = false;
              state.email = userEmail;

                localStorage.setItem('userId', eachUser);
              console.log('passed');
            }
          }
        });
      }
      try {
        const { userDetail, tokenDetail } = action.payload;
        state.firstName = userDetail.familyName;
        state.lastName = userDetail.givenName;
        state.email = userDetail.email;
        console.log('tokenise', userDetail.email);
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
            console.log('userId', userDetail.email);
            console.log('userdetail', response.data[eachItems].Email);
            console.log('validate');
            if (response.data[eachItems].Email === userDetail.email) {
              //  console.log('userId', eachItems);
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
        userExist:"unknown", 
        loginFormStatus:"",
        showFormLoader:false
        

      };
    },
  },
  extraReducers: {
    //@ts-ignore
    [getUsers.pending]: (state) => {
      //   state.loading = true;
    },
    //@ts-ignore
    [getUsers.fulfilled]: (state, { payload, meta }) => {
 
      if(meta.arg){
        console.log('uuuu', meta.arg);
    
        if (meta.arg.type === 'validategoogleform') {
              console.log('my plll', meta.arg.userDetail);
              console.log('jjjjkkk', payload);
          const userObj = meta.arg.userDetail;
          const userEmail = userObj.email;
          let userObjKeys = Object.keys(payload);
          for(let eachItems of userObjKeys){
                     console.log('key', eachItems);
            if (payload[eachItems].Email === userEmail) {
              state.email = userEmail; 
             
             console.log('mu>>>',payload[eachItems].Email === userEmail);
             console.log('userEmail', userEmail);
             console.log('haveemial', payload[eachItems].Email);
           
            }
            else{
              state.userExist = "No"
            }

          }
        }

        if (meta.arg.type === 'loginByForm') {
          const { myDetail } = meta.arg;
          // state.email = myDetail.email;
          let userEmail = myDetail.email;
          let userPassword = myDetail.password;
          let userObjKeys = Object.keys(payload);

          for (let eachItem of userObjKeys) {
            let selectedUser = payload[eachItem];
            console.log('eachItems', selectedUser);
            if (
              userEmail === selectedUser.Email &&
              userPassword === selectedUser.password
            ) {
              state.email = selectedUser.Email;
              localStorage.setItem('userId', eachItem);
            }
            else{
              state.loginFormStatus = "No"
            
            }
          }
          console.log('filllll', payload);
        }

   
    
        }
            let tokenId = localStorage.getItem('token'); 
            let userId = localStorage.getItem('userId');
            let expireIn = localStorage.getItem('tokenExpireIn');
            console.log('my stephen', userId);
            let keysOfUser = Object.keys(payload);

            for (let eachUserObj of keysOfUser) {
              if (userId === eachUserObj) {
                let loggedInUser = payload[eachUserObj];
                console.log('jjjjjj', current(state));

                state.firstName = loggedInUser.firstName;
                state.lastName = loggedInUser.lastName;
                state.email = loggedInUser.Email;
                state.phoneNumber = loggedInUser.phoneNumber;
                state.city = loggedInUser.city;
                state.NIN = loggedInUser.NIN;

                // return loggedInUser;
              }
            }
       
      state.loading = false;
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
// const authenticateUser = loginSlice.actions.authenticateUser;
export { addSigninUser, getUsers, clearState};