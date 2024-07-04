import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerService from './CustomerService';
import Cart from './Cart';
import Home from './Home';
import Signup from './Signup';

function AppRoutes({ productData, cartItems, handleAddProduct }) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} productData={productData} handleAddProduct={handleAddProduct} />} />
                <Route path="/customerservice" element={<CustomerService />} />
            </Routes>
        </div>
    );
}

export default AppRoutes;