import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import basketSlice from "./cart/cartSlice";
import brandSlice from "./brands/brandSlice";
import tagsSlice from "./tags/tagsSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    basket: basketSlice,
    brand: brandSlice,
    tag: tagsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
