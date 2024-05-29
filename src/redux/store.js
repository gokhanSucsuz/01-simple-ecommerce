import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
	reducer: {
		categories: categorySlice,
		products: productSlice,
		carts: cartSlice,
		wishlist: wishlistSlice,
	},
});
