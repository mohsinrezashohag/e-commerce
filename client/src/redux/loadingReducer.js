import { createSlice } from "@reduxjs/toolkit";

const loadingReducer = createSlice({
    name: 'loading',
    initialState: { loading: false },
    reducers: {
        showLoading: (state) => {
            state.loading = true
        },
        hideLoading: (state) => {
            state.loading = false
        }
    }
})

export const { showLoading, hideLoading } = loadingReducer.actions
export default loadingReducer.reducer