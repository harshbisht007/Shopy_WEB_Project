import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "logout",
  initialState: {
    currentUser: true,
    isFetching: false,
    error: false,
  },
  reducers: {
    logoutStart:(state,action)=>{
      state.currentUser = action.payload.username
      
    },
    logoutsuccess:(state)=>{
      state.error=false; 
    },
    logoutfail:(state)=>{
      state.error = true
    }
  },
});

export const { logoutStart, logoutsuccess, logoutfail} = userSlice.actions;
export default userSlice.reducer;