import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: cart,
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, action) => {
            const exist = state.cart.find(product => product._id === action.id)
            if (!exist) {
                state.cart.push(action.id)
            }
        }
    }
})