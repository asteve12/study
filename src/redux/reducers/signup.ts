import {createSlice} from "@reduxjs/toolkit"


import {registerNewUser} from "../../axios"


const signinSlice = createSlice({
    name:'signin',
    initialState:{firstName:"",lastName:"",city:"",course:"",phoneNumber:"",NIN:"",Email:"",password:""},
    reducers:{
        addUser:(state:any,action:any)=>{
            try{
           let keyToUpdate = Object.keys(action.payload);
          for(let eachKey of  keyToUpdate){
            
           state[eachKey] = action.payload[eachKey];
          
          }
          if(state.firstName !== ""){
              
                    registerNewUser.post("/signup.json",state).then((response)=>{
                        const {name} = response.data
                        localStorage.setItem('userId', name);
                        console.log("mh signup response",response)
                        return name
                    })
                    .then((response)=>{
                        console.log("respondedWith",response)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
              
             
             

          }

      
   
            }
            catch(e){
                console.log("error",e)
            }
          
          
        },
        clearSigninDetails:(state:any)=>{


            return {
              firstName: '',
              lastName: '',
              city: '',
              course: '',
              phoneNumber: '',
              NIN: '',
              Email: '',
              password: '',
            };


        }

    }
})

export default signinSlice.reducer;
const addUser = signinSlice.actions.addUser 
const  clearSigninDetails = signinSlice.actions.clearSigninDetails
export { addUser, clearSigninDetails };