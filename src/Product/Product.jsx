import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);

    // console.log(props.product);
    const {img, name , price, seller, shipping, ratings} = props.product;
    const handleAddTo = props.handleAddTo;
    
    
    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <div className='product-info'>
            <h3> {name}</h3>

            <p>Price :${price}</p>
            <p> Manufacturer : {seller}</p>
            <p>Ratings : {ratings} *</p>

            </div>
            
            <button className='btn-cart' onClick={() => handleAddTo (props.product)} >
                Add to carts  
                
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>



            
        </div>
    );
};

export default Product;