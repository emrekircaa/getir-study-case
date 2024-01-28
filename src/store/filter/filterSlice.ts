import { createSlice } from "@reduxjs/toolkit";
import { filterStateType } from "../../types";

const initialState: filterStateType = {
  itemType: "",
  sort: "",
  page: 1,
  slug: "",
  tag: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.itemType = action.payload.itemType;
      state.sort = action.payload.sort;
      state.page = action.payload.page;
      state.slug = action.payload.slug;
      state.tag = action.payload.tag;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
