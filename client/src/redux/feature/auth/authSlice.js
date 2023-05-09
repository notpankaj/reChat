import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
};

const setLocalUser = (user) => {
  localStorage.setItem("AUTH", JSON.stringify(user));
};

const destroyLocalStorage = () => {
  localStorage.setItem("AUTH", null);
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
      setLocalUser(user);
    },
    updateUser: (state, action) => {
      const user = action.payload;
      state.user = user;
      // setLocalUser(user);
    },
    logOut: (state, action) => {
      state.user = null;
      state.accessToken = null;
      destroyLocalStorage();
    },
  },
});

export const { setAuth, logOut } = authSlice.actions;

// ===> SELECTORS
export const tokenSelector = (s) => s.auth.accessToken;
export const authSelector = (s) => s.auth.user;

export default authSlice.reducer;
