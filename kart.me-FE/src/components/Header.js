import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideCart from './SideCart';
import '../styles/header.css';

export default function Header({ cart, showSideCart }) {
    const [showcart, setshowcart] = useState(false);
    return (
        <>
            <nav className='navbar navbar-light bg-primary fixed-top'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand text-white'>
                        <h3>KART.ME</h3>
                    </Link>
                    <div className='d-flex'>
                        <button
                            className='btn btn-outline-light position-relative p-2 py-1'
                            type='button'
                            onClick={() => setshowcart(!showcart)}
                        >
                            {cart?.items && (
                                <span className='cart-badge'>
                                    {cart.items.length}
                                </span>
                            )}
                            <i className='bi bi-bag fs-3'></i>
                        </button>
                    </div>
                </div>
            </nav>
            {showSideCart && (
                <SideCart
                    cart={cart}
                    showcart={showcart}
                    closeCart={() => setshowcart(false)}
                />
            )}
        </>
    );
}
