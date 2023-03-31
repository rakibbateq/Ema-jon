import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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

    useEffect(() => {
        const storeCart = getShoppingCart();
        console.log(storeCart)
     })

    const handleAddTo = (product) => { 
        // cart.push(product)
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)

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