import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import basketSlice from "./basket/cartSlice";
import brandSlice from "./brands/baskerSlice";
import tagsSlice from "./tags/tagsSlice";
import filterSlice from "./filter/filterSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    basket: basketSlice,
    brand: brandSlice,
    tag: tagsSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
