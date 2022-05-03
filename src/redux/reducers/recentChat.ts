import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"



const getRecentPost = createAsyncThunk("getRecent",async (username:string)=>{

})


const recentChats = createSlice(
    {
     name:"recentChats",
        initialState :[],
        reducers:{

        },
        extraReducers:(builder)=>
          
        {

        }
    }
)