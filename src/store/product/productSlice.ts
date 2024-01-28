import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductItemType } from "../../types";

interface productType {
  filteredProduct: ProductItemType[];
  allProduct: ProductItemType[];
  isLoading: boolean;
}
const initialState: productType = {
  filteredProduct: [],
  allProduct: [],
  isLoading: true
};
interface GetAllProductParams {
  [key: string]: string | undefined;
  itemType?: string;
  page?: string;
  sort?: string;
  slug?: any;
}

export const getFilteredProduct = createAsyncThunk(
  "getFilteredProduct",
  async (params: GetAllProductParams = {}, thunkAPI) => {
    try {
      const queryString = Object.keys(params)
        .map((key) => (params[key] ? `${key}=${params[key]}` : ""))
        .filter((param) => param !== "")
        .join("&");
      const { data } = await axios.get(
        `https://getir-backend-7sjz.vercel.app/items${
          queryString ? `?${queryString}` : ""
        }&page=1`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getAllProduct = createAsyncThunk(
  "getAllProduct",
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://getir-backend-7sjz.vercel.app/items`
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
  extraReducers: (builder) => {
    builder
      .addCase(getFilteredProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilteredProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredProduct = action.payload;
      })
      .addCase(getFilteredProduct.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProduct = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
      });
  }
});

export default productSlice.reducer;
