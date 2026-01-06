import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { LoginCredentials } from "@/lib/types/auth.types";
import { login, logout } from "@/api/axios/auth";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);

      toast.success("Login successful!");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await logout();

      toast.success("Logout successful!");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
