import { createSlice } from "@reduxjs/toolkit";

import { loginUser, logoutUser } from "./authActions";
import { User } from "@/lib/types/user.types";

const initialState: {
  error: Error | null;
  loading: boolean;
  token: string | null;
  user: User | null;
} = {
  error: null,
  loading: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as Error;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.token = null;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as Error;
      }),
});

export const { updateUser } = authSlice.actions;

export default authSlice.reducer;
