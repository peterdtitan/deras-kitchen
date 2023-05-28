import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], 
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.cartItems.push({ ...product, amount: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseAmount: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      item.amount += 1;
    },
    decreaseAmount: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item.amount > 1) {
        item.amount -= 1;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  clearCart,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;
