import React from 'react';
import { useNavigate } from 'react-router-dom';
import Ratting from './Ratting';

const Product = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div className="col-4 cursor-pointer " onClick={() => navigate(`/product-screen/${product._id}`)} >
            <img src={product.image} />
            <h4 className="pt-3">{product.name}</h4>
            <Ratting value={product.rating} numReviews={product.numReviews} ></Ratting>
            <p>${product.price}</p>
        </div >
    );
};

export default Product;