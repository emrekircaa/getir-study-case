import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import basketSlice from "./basket/cartSlice";
import brandSlice from "./brands/baskerSlice";
import tagsSlice from "./tags/tagsSlice";
import filterSlice from "./filter/filterSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "filter",
  storage,
};

const rootReducer = combineReducers({
  product: productSlice,
  basket: basketSlice,
  brand: brandSlice,
  tag: tagsSlice,
  filter: filterSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
