import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import Ratting from '../components/Ratting';

const ProductScreen = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const getProduct = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/v1/product/show-by-id/${id}`)
            if (res.data.success) {
                setProduct(res.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [])



    const [qty, setQty] = useState(1)
    const navigate = useNavigate()
    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`)
    }

    return (
        <Container>
            <Row className='mt-4'>
                <Col md={6}>
                    <img src={product.image} className='img-fluid' alt="" />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Ratting
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>



                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Quantity</Col>
                                        <Col>
                                            {
                                                <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                                                    {[...Array(product.countInStock).keys()].map(x => (
                                                        <option keys={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))}
                                                </Form.Control>
                                            }
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                                <Button
                                    onClick={() => addToCartHandler(product.id)}
                                    className='btn-block'
                                    type='button'
                                    disabled={product.countInStock === 0}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>


            </Row>


            {/* <div class="small-container single-product">
                <div class="row">
                    <div class="col-2">
                        <img src={product.image} width="100%" id="ProductImg" />

                        <div class="small-img-row">
                            <div class="small-img-col">
                                <img src="images/gallery-1.jpg" width="100%" class="small-img" />
                            </div>
                            <div class="small-img-col">
                                <img src="images/gallery-2.jpg" width="100%" class="small-img" />
                            </div>
                            <div class="small-img-col">
                                <img src="images/gallery-3.jpg" width="100%" class="small-img" />
                            </div>
                            <div class="small-img-col">
                                <img src="images/gallery-4.jpg" width="100%" class="small-img" />
                            </div>
                        </div>

                    </div>
                    <div class="col-2">
                        <p>Home / T-Shirt</p>
                        <h1>Red Printed T-Shirt by HRX</h1>
                        <h4>$50.00</h4>
                        <select>
                            <option>Select Size</option>
                            <option>XXL</option>
                            <option>XL</option>
                            <option>L</option>
                            <option>M</option>
                            <option>S</option>
                        </select>
                        <input type="number" value="1" />
                        <a href="" class="btn">Add To Cart</a>

                        <h3>Product Details <i class="fa fa-indent"></i></h3>
                        <br />
                        <p>Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of
                            shorts for your morning workout or a denims for an evening out with the guys.</p>
                    </div>
                </div>
            </div> */}













        </Container >
    );
};

export default ProductScreen;