import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;