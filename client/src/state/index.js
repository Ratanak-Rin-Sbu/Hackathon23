import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  access_token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },
    setLogout: (state) => {
      state.user = null;
      state.access_token = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;