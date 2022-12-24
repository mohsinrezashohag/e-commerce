import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
    name: 'products',
    initialState: { products: null },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }
    }

})

export const { requestProducts, setProducts, failedGetProduct } = productsSlice.actions
export default productsSlice.reducer