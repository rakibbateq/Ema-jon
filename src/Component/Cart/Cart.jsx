import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;

    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;

    }
    const tax = total * 0.7;
    const tax2 = tax.toFixed(2)
    const grandTotal = total + tax2;

    // make a list 


    return (
        <div className='cart'>
            
                <h4>Order summary</h4>
                <p>Selected Items : {cart.length} </p>
                <p>Selected item :{[]}</p>
                <p>Total Price : $ {total}</p>
                <p>Total Shipping : $ {shipping}</p>

                <p>Tax : $ {tax2}</p>
                <h6>Grad Total : $ {grandTotal}</h6>

            
        </div>
    );
};

export default Cart;