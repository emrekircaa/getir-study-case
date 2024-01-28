import { createSlice } from "@reduxjs/toolkit";
import { BasketItemType } from "../../types";
export type BasketStateType = {
  basketList: BasketItemType[];
  totalPrice: number;
  isActive: boolean;
};
const initialState: BasketStateType = {
  basketList: [],
  totalPrice: 0,
  isActive: false,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasketList: (state, action) => {
      const existingItem = state.basketList.find(
        item => item.name === action.payload.name
      );
      if (existingItem) {
        state.basketList = state.basketList.map(item =>
          item.name === action.payload.name
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        state.basketList.push({ ...action.payload, count: 1 });
      }
      state.totalPrice += action.payload.price;
    },
    increaseBasketItemQuantity: (state, action) => {
      const item = state.basketList.find(
        listItem => listItem.name === action.payload
      );
      if (item) {
        item.count--;
        if (item.count === 0) {
          state.basketList = state.basketList.filter(
            listItem => listItem.name !== action.payload
          );
        }
        state.totalPrice -= item.price;
        if (state.totalPrice < 0) {
          state.totalPrice = 0;
        }
      }
    },
    setBasketItemQuantity: (state, action) => {
      const item = state.basketList.find(
        listItem => listItem.name === action.payload
      );
      if (item) {
        item.count++;
        state.totalPrice += item.price;
      }
    },
    setActiveBasket: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const {
  setBasketList,
  increaseBasketItemQuantity,
  setBasketItemQuantity,
  setActiveBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
