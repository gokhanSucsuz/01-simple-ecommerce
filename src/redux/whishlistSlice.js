import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    return localStorage.getItem("whish")
        ? JSON.parse(localStorage.getItem("whish"))
        : [];
};

const storeInLocalStorage = (data) => {
    localStorage.setItem("whish", JSON.stringify(data));
};

const initialState = {
    wishlist: fetchFromLocalStorage(),
};

const whishlistSlice = createSlice({
    name: "wish",
    initialState,
    reducers: {
        addToWhishlist: (state, action) => {
            const isItemWish = state.wishlist.find(
                (item) => item.id === action.payload.id
            );
            if (!isItemWish) {
                state.wishlist.push(action.payload);
                storeInLocalStorage(state.wishlist);
            }
        },
        removeFromCart: (state, action) => {
            const tempWhishlist = state.wishlist?.filter(
                (item) => item.id !== action.payload
            );
            state.wishlist = tempWhishlist;
            storeInLocalStorage(state.wishlist);
        },
        clearCart: (state) => {
            state.wishlist = [];
            storeInLocalStorage(state.wishlist);
        },
    },
});

export const { addToWhishlist, removeToWhishlist, clearWhishlist } =
    whishlistSlice.actions;

export default whishlistSlice.reducer;
