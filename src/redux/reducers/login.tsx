import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import {registerNewUser} from "../../axios"


const getUsers = createAsyncThunk(
  'get/getUsers',
  async (thunkAPI, userDetail?: any) => {
  
     if (userDetail.type === "validategoogleform") {
   
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
      // state.showFormLoader =  true

      if (action.payload.type === 'loginByForm') {
        let { myDetail } = action.payload;
        let userEmail = myDetail.email;
        let userPassword = myDetail.password;
  
        registerNewUser.get('/signup.json').then((response) => {
          let userObjKey = Object.keys(response.data);
         
          for (let eachUser of userObjKey) {
         
            if (
              response.data[eachUser].Email === userEmail &&
              response.data[eachUser].password === userPassword
            ) {
              state.showFormLoader = false;
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
    [getUsers.pending]: (state,{meta}) => {
   
      if(meta.arg){
        if(meta.arg.type === "loginByForm"){
            state.showFormLoader = true;

        }

      }
      console.log("pending",meta)
    },
    //@ts-ignore
    [getUsers.fulfilled]: (state, { payload, meta }) => {
       state.showFormLoader = false;
 
      if(meta.arg){
    
    
        if (meta.arg.type === 'validategoogleform') {
            
          const userObj = meta.arg.userDetail;
          const userEmail = userObj.email;
          let userObjKeys = Object.keys(payload);
          for(let eachItems of userObjKeys){
                
            if (payload[eachItems].Email === userEmail) {
              state.email = userEmail; 
             
          
           
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
         
            if (
              userEmail === selectedUser.Email &&
              userPassword === selectedUser.password
            ) {
              state.email = selectedUser.Email;
              localStorage.setItem('userId', eachItem);
                 state.showFormLoader = false;
            }
            else{
              state.loginFormStatus = "No"
                // state.userExist = 'No';
                state.showFormLoader = false;
                setTimeout(()=>{
                    state.loginFormStatus = '';
                },1000)
            
            }
          }
     
        }

   
    
        }
            let tokenId = localStorage.getItem('token'); 
            let userId = localStorage.getItem('userId');
            let expireIn = localStorage.getItem('tokenExpireIn');
         
            let keysOfUser = Object.keys(payload);

            for (let eachUserObj of keysOfUser) {
              if (userId === eachUserObj) {
                let loggedInUser = payload[eachUserObj];
               

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