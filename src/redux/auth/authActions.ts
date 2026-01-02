import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: unknown, { rejectWithValue }) => {
    try {
      //   const response = await login(credentials);
      //   toast.success("Login successful!", { autoClose: 1500 });
      //   return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      //   const response = await logout();
      //   toast.success("Logout successful!", { autoClose: 1500 });
      //   return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
