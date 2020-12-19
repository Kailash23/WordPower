import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  loading: false,
  isSignOut: false,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    loginRequest(state) {
      state.loading = true;
    },
    loginSuccess(state) {
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginFailure(state) {
      state.isAuthenticated = false;
      state.loading = false;
    },
    signOutRequest(state) {
      state.loading = true;
    },
    signOutSuccess(state) {
      state.isAuthenticated = false;
      state.loading = false;
      state.isSignOut = true;
    },
    signOutFailure(state) {
      state.isAuthenticated = true;
      state.loading = false;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  signOutRequest,
  signOutSuccess,
  signOutFailure,
} = authSlice.actions;

export default authSlice.reducer;
