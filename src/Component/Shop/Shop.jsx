import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [Products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProduct(data))


    } , [] )

    const handleAddTo = (product) => { 
        // cart.push(product)
        const newCart = [...cart, product];
        setCart(newCart);

    };
    
    
    return (
        <div className='shop-container'>
            
            <div className="products-container">

              {
                Products.map(product => <Product
                key ={product.id} product={product}
                handleAddTo={handleAddTo}></Product>)
              }

            </div>
            <div className="cart-container">

               <Cart cart={cart} ></Cart>
                
            </div>
        </div>
    );
};

export default Shop;