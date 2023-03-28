import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img,price,seller,ratings} = props.product;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
             <h3 className='product-name'>{name}</h3>
             <h4>Price: ${price}</h4>
             <p className='below-info'>Manufacturer: {seller}</p>
             <p className='below-info'>Rating: {ratings} stars</p>
           </div>
           <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;