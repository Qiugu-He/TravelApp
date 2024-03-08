//TEMP FILE
import {
    FETCH_RECOMMEND_PRODUCTS_FAIL,
    FETCH_RECOMMEND_PRODUCTS_START,
    FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    RecommendProductAction,
  } from "./recommendProductsActions";
  
  interface RecommendProductsState {
    productList: any[];
    loading: boolean;
    error: string | null;
  }
  