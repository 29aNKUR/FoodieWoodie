import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItemsCount: 0,
    deliveryAddress: {},
    paymentMode: {},
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items[action.payload.id];
      const quantity =
        item && item.hasOwnProperty("quantity")
          ? state.items[action.payload.id]?.quantity + 1
          : 1;
      state.items[action.payload.id] = { ...action.payload, quantity };
      state.totalItemsCount = state.totalItemsCount + 1;
    },
    removeItem: (state, action) => {
      const item = state.items[action.payload];
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalItemsCount--;
      } else {
        state.totalItemsCount--;
        delete state.items[action.payload];
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalItemsCount = 0;
    },
    updateDeliveryAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },
    updatePaymentMode: (state, action) => {
      state.paymentMode = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart, updateDeliveryAddress, updatePaymentMode } = cartSlice.actions;
