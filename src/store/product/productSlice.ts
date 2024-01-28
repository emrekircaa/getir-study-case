import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productStateType } from "../../types";
import API_URL from "../../constant/api";

const initialState: productStateType = {
  filteredProduct: [],
  allProduct: [],
  isLoading: true,
};
interface GetAllProductParams {
  [key: string]: string | number | undefined;
  itemType?: string;
  page?: number;
  sort?: string;
  slug?: string;
}

export const getFilteredProduct = createAsyncThunk(
  "getFilteredProduct",
  async (params: GetAllProductParams = {}, thunkAPI) => {
    try {
      const queryString = Object.keys(params)
        .map(key => (params[key] ? `${key}=${params[key]}` : ""))
        .filter(param => param !== "")
        .join("&");
      const { data } = await axios.get(
        `${API_URL}/items${queryString ? `?${queryString}` : ""}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getAllProduct = createAsyncThunk(
  "getAllProduct",
  async (params: GetAllProductParams = {}, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${API_URL}/items?itemType=${params.itemType}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFilteredProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFilteredProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredProduct = action.payload;
      })
      .addCase(getFilteredProduct.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(getAllProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProduct = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
