import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './userAPI';



export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user: null,
  },

  reducers: {
    login: (state, action) => {
     
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null ;
    },
    
  },
  
});

export const { login, logout } = userSlice.actions;
export const user = (state) => state.user.user;
export default userSlice.reducer;
