import { createSlice } from "@reduxjs/toolkit";
// import { destroyLocalStorage, setLocalUser } from '../../../utils/helper';

const initialState = {
  user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const user = action.payload;
      const accessToken = user.token;
      state.user = user;
      state.accessToken = accessToken;

      // setLocalUser(user);
    },
    updateUser: (state, action) => {
      const user = action.payload;
      state.user = user;
      // setLocalUser(user);
    },
    logOut: (state, action) => {
      state.user = null;
      state.accessToken = null;
      // destroyLocalStorage();
    },
  },
});

export const { setAuth, logOut } = authSlice.actions;

// ===> SELECTORS
export const tokenSelector = (s) => s.auth.accessToken;
export const authSelector = (s) => s.auth.user;

export default authSlice.reducer;
