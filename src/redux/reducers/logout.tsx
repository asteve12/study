import {createSlice} from "@reduxjs/toolkit";

import firebaseSignout from "../../firebaseConfig/firebasesignout"



const logoutlice = createSlice({
    name:"logout",
    initialState:false,
    reducers:{
        logout:(state:any)=>{
            localStorage.clear();
            firebaseSignout()
          
            return true
        }
    }
})




export default logoutlice.reducer

const logout = logoutlice.actions.logout;

export {logout}