import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,img,price,seller,ratings} = props.product;
    const addToCart = props.addToCart;
   
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
             <h3 className='product-name'>{name}</h3>
             <h4>Price: ${price}</h4>
             <p className='below-info'>Manufacturer: {seller}</p>
             <p className='below-info'>Rating: {ratings} stars</p>
           </div>
           <button onClick={()=>addToCart(props.product)} className='cart-btn'>
            Add to Cart
            const element  <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;