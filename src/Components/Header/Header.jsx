import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt="" />
           <div className='nav-anchor'>
            <a href="/Order">Order</a>
            <a href="/Order Review">Order Review</a>
            <a href="/Manage Inventory">Manage Inventory</a>
            <a href="/login">login</a>
           </div>
        </div>
    );
};

export default Header;