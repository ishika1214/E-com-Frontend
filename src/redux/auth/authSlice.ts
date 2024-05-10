import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

import { debug } from "console";
import { authService } from "../../service/auth.service";

export interface CounterState {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  token: string;
  isAuthenticated: boolean;
}

const initialState: CounterState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
  },
  token: "",
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserLogOut: (state, action) => {
      return {
        ...state,
        token: "",
        isAuthenticated: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PostSignIn.fulfilled, (state, action) => {
      console.log(action.payload, "action.payload");
      if (action.payload !== undefined) {
        return {
          ...state,
          token: action.payload.data.access_token,
          isAuthenticated: true,
        };
      }
    });
  },
});

export const PostSignIn = createAsyncThunk(
  "/createCatalog",
  async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    { dispatch }
  ) => {
    const payloadData = {
      email: email,
      password: password,
    };
    try {
      const data = await authService.postSignIn(payloadData);
      if (data) return data;
    } catch (e: any) {}
  }
);

export const PostSignUp = createAsyncThunk(
  "/createCatalog",
  async (
    {
      email,
      password,
      firstName,
      lastName,
    }: { 
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    },
    { dispatch }
  ) => {
    const payloadData = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    try {
      const data = await authService.postSignUp(payloadData);

      return data;
    } catch (e: any) {}
  }
);
// Action creators are generated for each case reducer function
export const { setUserLogOut } = authSlice.actions;

export default authSlice;
