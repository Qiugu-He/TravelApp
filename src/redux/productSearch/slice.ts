import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSearchState {
  loading: boolean;
  error: any;
  data: any;
  pagination: any;
}

const initialState: ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null,
};

export const searchProduct = createAsyncThunk(
  "productSearch/searchProduct",
  async (
    paramaters: {
      keywords: string;
      nextPage: number | string;
      pageSize: number | string;
    },
    thunkAPI
  ) => {
    let url = `http://82.157.43.234:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`;
    if (paramaters.keywords) {
      url += `&keyword=${paramaters.keywords}`;
    }
    const response = await axios.get(url);
    return {
      data: response.data,
      pagination: JSON.parse(response.headers["x-pagination"]),
    };
  }
);

// reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(getProductDetail.pending, (state, action) => {
//                 state.loading = true;
//             })
//             .addCase(getProductDetail.fulfilled, (state, action) => {
//                 state.data = action.payload;
//                 state.loading = false;
//             })
//             .addCase(getProductDetail.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })
//     }

export const productSearchSlice = createSlice({
  name: "productSearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(searchProduct.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(searchProduct.fulfilled, (state, action)=>{
            state.data = action.payload.data;
            state.pagination = action.payload.pagination;
            state.loading = false;
            state.error = null;
        })
        .addCase(searchProduct.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
  }
});