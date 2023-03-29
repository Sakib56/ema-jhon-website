import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
    //    product.quantity = product.quantity || 1;
       totalPrice = totalPrice + product.price * product.quantity;
       totalShipping = totalShipping + product.shipping;
       quantity = quantity + product.quantity;
    }
    const totalTax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + totalTax;
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Item:{quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${totalTax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;