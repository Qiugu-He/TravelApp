import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../store";

interface ProductDetailState {
  loading: boolean;
  error: any;
  data: any;
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null,
};

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://82.157.43.234:8080/api/touristRoutes/${touristRouteId}`
    );
    return data;
  }
);

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductDetail.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(getProductDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});