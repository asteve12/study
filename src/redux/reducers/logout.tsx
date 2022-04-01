import {createSlice} from "@reduxjs/toolkit";



const logoutlice = createSlice({
    name:"logout",
    initialState:false,
    reducers:{
        logout:(state:any)=>{
            localStorage.clear();
          
            return true
        }
    }
})




export default logoutlice.reducer

const logout = logoutlice.actions.logout;

export {logout}