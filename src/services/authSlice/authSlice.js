import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
    },
    logout: state => {
      state.id = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser, logout} = authSlice.actions;

export default authSlice.reducer;
