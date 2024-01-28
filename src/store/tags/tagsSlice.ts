import { createSlice } from "@reduxjs/toolkit";
import { ProductItemType, TagType, tagStateType } from "../../types";

const initialState: tagStateType = {
  tags: [],
  isLoading: true,
};

const TagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.tags = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setTags } = TagSlice.actions;

export const getTags = (products: ProductItemType[]) => (dispatch: any) => {
  try {
    const tags: TagType[] = [];
    const allTags: string[] = [];

    products.forEach(product => {
      allTags.push(...product.tags);
    });

    let totalCount = 0;

    allTags.forEach(tag => {
      if (tags.filter(t => t.name === tag).length === 0) {
        const tagCount = allTags.filter(t => t === tag).length;
        totalCount += tagCount;
        tags.push({ name: tag, count: tagCount });
      }
    });
    const allBrands: Array<any> = [{ name: "All", count: totalCount }, ...tags];
    dispatch(setTags(allBrands));
  } catch (error) {}
};

export default TagSlice.reducer;
