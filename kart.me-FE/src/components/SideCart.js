import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidecart.css';

export default function SideCart({ showcart, closeCart, cart }) {
    return (
        <div
            id='mySidenav'
            className={`sidenav ${showcart ? 'show' : 'close'}`}
        >
            <div className='nav-block px-2 flex justify-content-between align-items-center'>
                <p className='fs-4 m-0'>Cart</p>
                <a
                    href='javascript:void(0)'
                    className='closebtn'
                    onClick={closeCart}
                >
                    &times;
                </a>
            </div>
            <ul>
                {cart.items && cart.items.length !== 0 ? (
                    cart.items.map((x, i) => {
                        return (
                            <li key={i} className='cart-item'>
                                <img src={x.image} alt={x.image} />
                                <div>
                                    <p className='title'>
                                        {x.title.length > 30
                                            ? `${x.title.slice(0, 30)}...`
                                            : x.title}
                                    </p>
                                    <p className='category'>{x.category}</p>
                                    <p className='price'>${x.price}</p>
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <div className='card mt-3'>
                        <div className='card-body'>
                            <h5 className='card-title text-center fs-6'>
                                Uh Oh! Seems like you haven't got anything.
                            </h5>
                            <p className='card-text text-center fs-6'>
                                Start shopping for your favorite products now!
                                😎
                            </p>
                        </div>
                    </div>
                )}
            </ul>
            {cart.items && cart.items.length !== 0 ? (
                <div className='checkout-block' visibility='hidden'>
                    <Link to='/checkout' className='btn btn-primary text-white'>
                        Checkout
                    </Link>
                </div>
            ) : null}
        </div>
    );
}
