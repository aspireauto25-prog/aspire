"use client";

import axios from "axios";
import { toast } from "react-toastify";

import { store } from "@/redux/store";
import { clearAuth } from "@/redux/auth/authSlice";
import { LOGIN_ROUTE } from "@/constants/routes";
import { logout } from "./auth";

const api = axios.create({ withCredentials: true });

// Prevents overlapping logout handling when several requests fail at once.
let isLoggingOut = false;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const isAuthError = error.response?.status === 401;
    const isLoggedIn = Boolean(store.getState().auth.user);

    if (isAuthError && isLoggedIn && !isLoggingOut) {
      isLoggingOut = true;

      // Clear the (possibly already expired) cookie server-side, then drop the
      // persisted user so the app stops treating the session as active.
      await logout().catch(() => undefined);
      store.dispatch(clearAuth());

      toast.info("Your session has expired. Please log in again.");

      if (
        typeof window !== "undefined" &&
        window.location.pathname !== LOGIN_ROUTE
      ) {
        window.location.href = LOGIN_ROUTE;
      }
    }

    return Promise.reject(error);
  },
);

export default api;
