import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './loadingReducer'
import productsReducer from './productsReducer'

const store = configureStore({
    reducer: {
        products: productsReducer,
        loading: loadingReducer
    }
})
export default store
