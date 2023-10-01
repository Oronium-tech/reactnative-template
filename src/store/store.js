import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../services/authSlice/authSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
