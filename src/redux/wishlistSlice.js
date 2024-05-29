import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
	return localStorage.getItem("wishlist")
		? JSON.parse(localStorage.getItem("wishlist"))
		: [];
};

const storeInLocalStorage = (data) => {
	localStorage.setItem("wishlist", JSON.stringify(data));
};

const initialState = {
	wishlist: fetchFromLocalStorage(),
	itemCount: 0,
};

const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		addToWishlist: (state, action) => {
			const isItemWish = state.wishlist.find(
				(item) => item.id === action.payload.id
			);
			if (!isItemWish) {
				state.wishlist.push(action.payload);
				storeInLocalStorage(state.wishlist);
			}
		},
		removeFromWishlist: (state, action) => {
			const tempWishlist = state.wishlist.filter(
				(item) => item.id !== action.payload
			);
			state.wishlist = tempWishlist;
			storeInLocalStorage(state.wishlist);
		},
		clearWishlist: (state) => {
			state.wishlist = [];
			storeInLocalStorage(state.wishlist);
		},
	},
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
	wishlistSlice.actions;

export default wishlistSlice.reducer;
