import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  loading: boolean;
  error: any;
  token: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
};

export const signIn = createAsyncThunk(
  "user/signIn",
  async (
    paramaters: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    const { data } = await axios.post(`http://82.157.43.234:8080/auth/login`, {
      email: paramaters.email,
      password: paramaters.password,
    });
    return data.token;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
        state.token = null;
        state.error = null;
        state.loading = false;
      },
  },
  extraReducers: (builder) => {
    builder
        .addCase(signIn.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(signIn.fulfilled, (state, action) => {
            state.token = action.payload;
            state.loading = false;
        })
        .addCase(signIn.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
}
});
