import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {img, name , price, seller, quantity,ratings} = props.product;
    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <div className='product-info'>
            <h3> {name}</h3>

            <p>Price :${price}</p>
            <p> Manufacturer : {seller}</p>
            <p>Ratings : {ratings} *</p>

            </div>
            <button className='btn-cart' >Add to carts </button>



            
        </div>
    );
};

export default Product;