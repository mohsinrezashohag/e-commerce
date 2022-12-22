import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../components/Product'

const Home = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/v1/product/show-all')
            if (res.data.success) {
                setProducts(res.data.data)
            }
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
                    <div className="row">
                        {products.map(product => <Product key={product._id} product={product}></Product>)}
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Home;