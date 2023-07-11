import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLoginData: null,
    isUserLoggedIn:false
  };
  
const UserLoginSlice = createSlice({
    name:"userLoginInfo",
    initialState,
    reducers:{
        loginUser: (state,action)=>{
            state.userLoginData = action.payload;
            state.isUserLoggedIn = true
        },
        logOutUser :(state,action)=>{
            state.userLoginData=null;
            state.isUserLoggedIn = false

        }
    }

})
export const { loginUser, logOutUser } = UserLoginSlice.actions;
export default UserLoginSlice.reducer;

