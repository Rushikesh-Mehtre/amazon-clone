import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userCreation: {},
  };
  
const UserCreationSlice = createSlice({
    name:"userCreationInfo",
    initialState,
    reducers:{
        createUser: (state,action)=>{
            state.userCreation = action.payload
        },
        deleteUser :(state,action)=>{
            state.userCreation={}
        }
    }

})
export const { createUser, deleteUser } = UserCreationSlice.actions;
export default UserCreationSlice.reducer;

