import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CompanyType } from "../../types";

interface BrandState {
  companies: CompanyType[];
  brands: CompanyType[];
  isLoading: boolean;
}

const initialState: BrandState = {
  brands: [],
  companies: [],
  isLoading: true,
};

export const getAllCompanies = createAsyncThunk(
  "getAllCompanies",
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://getir-backend-7sjz.vercel.app/companies`
      );
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
    } catch (error) {
      // console.error("Error in getBrands:", error);
    }
  };

export default brandSlice.reducer;
