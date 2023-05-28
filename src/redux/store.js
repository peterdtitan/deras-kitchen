import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import cartSlice from "./cart/cartSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice,
        user: userSlice
    }
});

export default store;