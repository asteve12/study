import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import ForwardLoginReq from "../../axios"
import axios from "axios"
import loginUser from "../../firebaseConfig/login/login"



type loginType = {
  myDetail?:{
    email:string,
    password:string,

  },
  type:string
}


const getUsers = createAsyncThunk(
  'get/getUsers',
  async (userDetail: loginType) => {
      let userToken = localStorage.getItem('accessToken');
      console.log('useTOken', userToken);


      if (userDetail.type === 'keepuser' && userToken) {
        let name = localStorage.getItem("userSlug");
        console.log('my userSLug', name);
        let profileDetail = ForwardLoginReq.get(
          `/api/auth/profile/update/${name}/`,
          {
            headers: {
              //@ts-ignore
              Authorization: userToken,
            },
          }
        )
          .then((response) => {
            console.log('req user res new', response);
            localStorage.setItem('sender', response.data.username);

            return {
              status: true,
              data: response.data,
              isUserLoggedIn: true,
            };
          })
          .catch((error) => {
            return {
              status: false,
              errorMsg: error.response,
              isUserLoggedIn: false,
            };
          });

        return profileDetail;
      }
      // else{
      //   return {
      //     status: false,
      //     errorMsg:""
      //   };
      // }

     

 const  userInfo = userDetail.myDetail;
 const email = userInfo?.email;
 const password = userInfo?.password
 const data = {
   username:email,
   password
 };
 if (!email && !password) {
   return {
     status: false,
     errorMsg:""
   };
 }
 
//@ts-ignore
  const loginUserRes = await loginUser(email, password)
  console.log("userlogin",loginUserRes)

  if (loginUserRes  === true){
    const loginReqRes = ForwardLoginReq.post('/api/auth/login/', data)
      .then((response) => {
        if (response.status === 200) {
          // localStorage.clear()
          const { data } = response;
          localStorage.setItem('accessToken', data.access);
          localStorage.setItem('refreshToken', data.refresh);
          const expirationDate = new Date();
          expirationDate.setDate(new Date().getDate() + 30);
          localStorage.setItem('expirationDate', expirationDate.toDateString());

          return true;
        }
      })
      .then((response) => {
        // const expirationDate = localStorage.getItem('accessToken');
        //  const currentDate = localStorage.getItem('refreshToken');
        console.log('login res', response);
        let userToken = localStorage.getItem('accessToken');
        console.log('useTOken', userToken);

        if (response === true) {
          let name = localStorage.getItem('userSlug');
          console.log('userLogin', name);
          let profileDetail = ForwardLoginReq.get(
            `/api/auth/profile/update/${name}/`,
            {
              headers: {
                //@ts-ignore
                Authorization: `Bearer ${userToken}`,
              },
            }
          )
            .then((response) => {
              console.log('req user res new', response);

              return {
                status: true,
                data: response.data,
                isUserLoggedIn: true,
              };
            })
            .catch((error) => {
              return {
                status: false,
                errorMsg: error.response,
                isUserLoggedIn: false,
              };
            });

          return profileDetail;
        }
      })
      .catch((error) => {
        console.log('login error', error.response);
        return {
          status: false,
          errorMsg: error.response,
        };
      });
      return loginReqRes;

  }
  else{
     return {
       status: false,
       errorMsg: 'an error try again',
     };

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
    netWorkError: '',
    loguserIn: 'No',
    gender:"",
    img:"",
    point:"",
    username:""
  },
  reducers: {
    addSigninUser: (state: any, action: any) => {},
    clearState: (state: any) => {
       
      localStorage.removeItem("accessToken");
   
      return {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        NIN: '',
        loading: false,
        userExist: 'unknown',
        loginFormStatus: '',
        showFormLoader: false,
        errorMsg: '',
        netWorkError: '',
        loguserIn: 'No',
        gender:"",
        img:"",
        point:"",
        username:""
      };
    },
    changeLoginStatus: (state: any) => {
      state.loginFormStatus = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      //@ts-ignore
      state.showFormLoader = true;
      state.errorMsg = '';
      state.loading = true
    });

    builder.addCase(getUsers.fulfilled, (state, userDetail) => {
      console.log('my-user', userDetail);
      //@ts-ignore
      const { payload } = userDetail;
      //@ts-ignore
      if (payload.status === true) {
        //@ts-ignore
        const {email,first_name,gender,image_uri,last_name,slug,points,username} = payload.data
        localStorage.setItem('userEmail', email);
        
        state.email = email;
        state.firstName = first_name;
        state.lastName = last_name;
        state.gender = gender;
        state.img = image_uri
        state.point = points;
        state.username = username;
        //localStorage.setItem('userSlug', slug);

        //@ts-ignore
        state.loguserIn = 'yes';
        //@ts-ignore
        state.showFormLoader = false;
        console.log('login data payload', userDetail);
        //@ts-ignore
        state.loading = false
       
      }
      //@ts-ignore
      else if (payload.status === false) {
        state.loading = false;
        //@ts-ignore
        const { errorMsg } = payload;
        if (!errorMsg){
            state.showFormLoader = false;
           state.netWorkError = 'an error occured try again';
               return;

        } console.log('error payload', errorMsg);
        if (errorMsg.status &&  errorMsg.status === 404 ) {
          state.errorMsg = 'an error occured try again';
          state.showFormLoader = false;
          return;
        } 
        state.errorMsg = errorMsg.data.detail;
        //@ts-ignore
        state.showFormLoader = false;
      }
    });
  },
});


export default loginSlice.reducer;
const addSigninUser = loginSlice.actions.addSigninUser;
const clearState = loginSlice.actions.clearState;
const changeLoginStatus = loginSlice.actions.changeLoginStatus;
// const authenticateUser = loginSlice.actions.authenticateUser;
export { addSigninUser, getUsers, clearState, changeLoginStatus };