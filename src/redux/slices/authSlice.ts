import { createSlice } from "@reduxjs/toolkit";
type User = {
  firstName: string;
  lastName: string;
  email: string;
  loginType: string;
  picture?: string;
  address?: string;
  phone?: string;
};
const initialState: { user?: User; token?: string; Authenticated?: boolean } = {
  user: undefined,
  token: undefined,
  Authenticated: undefined,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.Authenticated = true;
    },

    logout: (state) => {
      state.user = undefined;
      state.token = undefined;
      state.Authenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
