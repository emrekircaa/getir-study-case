import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BrandStateType } from "../../types";
import API_URL from "../../constant/api";

const initialState: BrandStateType = {
  brands: [],
  companies: [],
  isLoading: true,
};

export const getAllCompanies = createAsyncThunk(
  "getAllCompanies",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(`${API_URL}/companies`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCompanies.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCompanies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companies = action.payload;
      })
      .addCase(getAllCompanies.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setBrands } = brandSlice.actions;

export const getBrands =
  (filteredProducts: Array<any>, allCompanies: Array<any>) =>
  (dispatch: any) => {
    try {
      let totalCount = 0;
      const brands: Array<any> = [];

      allCompanies.forEach(brand => {
        const itemLength = filteredProducts.filter(
          item => item.manufacturer === brand.slug
        ).length;
        totalCount += itemLength;

        const brandInfo: any = {
          count: itemLength,
          name: brand.name,
          slug: brand.slug,
        };
        brands.push(brandInfo);
      });

      const allBrands: Array<any> = [
        { name: "All", count: totalCount },
        ...brands,
      ];

      dispatch(setBrands(allBrands));
    } catch (error) {}
  };

export default brandSlice.reducer;
