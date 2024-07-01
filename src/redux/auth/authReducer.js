import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './authInitialState';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = {
        name: payload.name,
        email: payload.email,
        reloadListener: undefined,
      };
      state.error = null;
    },
    removeUser: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.token = null;
      state.user = { name: null, email: null };
      state.error = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
