import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Product from '../components/Product'
import { hideLoading, showLoading } from '../redux/loadingReducer';
import { setProducts } from '../redux/productsReducer';

const Home = () => {
    const { products } = useSelector(state => state.products)
    const { loading } = useSelector(state => state.loading)
    const dispatch = useDispatch()

    // dispatch(requestProducts())
    const getProducts = async () => {
        try {

            dispatch(showLoading())
            const res = await axios.get('http://localhost:5000/api/v1/product/show-all')
            if (res.data.success) {
                dispatch(setProducts(res.data.data))
            }
            dispatch(hideLoading())

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div>
            <section>

                <div className="small-container">
                    <h2 className="title">Featured Products</h2>
                    {loading && <Loader></Loader>}
                    <div className="row">
                        {products && products.map(product => <Product key={product._id} product={product}></Product>)}
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Home;