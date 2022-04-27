import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import * as SignupTypes from "../../components/form/signin/type"
import * as userInfoTypes from "../../components/form/register/type"
import BaseUrl from "../../axios"




type ErrorObj = {
  status: boolean;
  errorMsg: string;
};

type successObj = {
  status: boolean;
  data: any;
};

type isSubmitByEmail =
  | SignupTypes.asyncInput
  | userInfoTypes.asynInputType
  | ErrorObj
  | successObj
  | undefined




function subByEmail(submitMethod: isSubmitByEmail): submitMethod is SignupTypes.asyncInput {
  return (submitMethod as SignupTypes.asyncInput).type === 'verifyEmail';
}

// function errorMessage(
//   submitMethod: isSubmitByEmail
// ): submitMethod is SignupTypes.asyncInput {
//   return (submitMethod as SignupTypes.asyncInput).type === 'verifyEmail';
// }

const addNewUser = createAsyncThunk('addNewUser',async (userDetail: SignupTypes.asyncInput | userInfoTypes.asynInputType ) => {
    
  
  if (userDetail.type === 'verifyEmail') {
      return {
        ...userDetail,
      };
    } 
    else if (userDetail.type === 'submitForm') {
      if (subByEmail(userDetail)){

      } 
      else{
      
    const { firstName, lastName,username } = userDetail.values;
        console.log('registerSubmit', userDetail);
        //@ts-ignore
        const { Email, password } = userDetail.values.userInfo;

        const data = {
          username,
          password,
          email: Email,
          firstName,
          lastName,
          password1: password,
          password2: password,
        };

        let signupResponse = BaseUrl.post('/api/auth/register/', data)
          .then((response) => {
            console.log('my-details', response);
            if (response.status === 200 || response.status === 201) {
              console.log('my-res200', response);
              return {
                status: true,
                data: response.data,
              };
            } else {
              return {
                status: true,
                data: response,
              };
            }
          })
          .catch((error) => {
            console.log('errorMsgSIgnup', error.response);
            return {
              status: false,
              errorMsg: error.response,
            };
          });

        return signupResponse;
      }

    }
  }
  
);




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
    submitting: false,
    showLoader: false,
    sigupSuccess:"No"
  },
  reducers: {
    clearSigninDetails: (state, action) => {
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
        submitting: false,
        showLoader: false,
        sigupSuccess: 'No'
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNewUser.pending, (state, action) => {
      console.log('users', action);
      const { meta } = action;
      if (meta.arg.type && meta.arg.type === 'submitForm') {
        state.showLoader = true;
        state.errorMsg = '';
      }
      state.loading = true;
      state.errorMsg = '';
    });

    builder.addCase(addNewUser.fulfilled, (state, { payload }) => {
      console.log('mypayload12', payload);
      //@ts-ignore
      if (payload.status === false) {
        //@ts-ignore
        if (payload.errorMsg) {
          //@ts-ignore
          if (payload.errorMsg.status === 400) {
            console.log('enemy');
            state.showLoader = false;
            //@ts-ignore
            const ErrMsg = payload.errorMsg.data.username
              ? 
              //@ts-ignore
                payload.errorMsg.data.username[0]
              : //@ts-ignore
                payload.errorMsg.data.email[0];
            //@ts-ignore
            const errorMsgKey = Object.keys(payload.errorMsg.data);
            for (let eachKeys of errorMsgKey) {
              //@ts-ignore
              let errorMsg = payload.errorMsg.data[eachKeys][0];
              state.errorMsg = errorMsg;
              break;
            }
          }

          return;
        }

        //@ts-ignore
        if (!payload.errorMsg) {
          state.showLoader = false;
          state.errorMsg = 'an error occurred try again';
        }
      }
      //@ts-ignore
      if (payload.type === 'verifyEmail') {
        //@ts-ignore
        state.Email = payload.values.Email;
        //@ts-ignore
        state.password = payload.values.password;
        //@ts-ignore
        state.submitting = true;
      }

      //@ts-ignore
      if (payload.status === true) {
        state.showLoader = false;
        state.sigupSuccess = 'yes';
      }
    });

    builder.addCase(addNewUser.rejected, (state, action) => {});
  },
});

export default signinSlice.reducer;

// const addUser = signinSlice.actions.addUser 
const  clearSigninDetails = signinSlice.actions.clearSigninDetails
export { addNewUser, clearSigninDetails };