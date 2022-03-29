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
                        console.log(response)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
              
             
             

          }

      
   
            }
            catch(e){
                console.log("error",e)
            }
          
          
        }

    }
})

export default signinSlice.reducer;
const addUser = signinSlice.actions.addUser 
export { addUser };