import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCart } from '../api';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Summary() {
    const [cart, setcart] = useState({});
    let params = useParams();
    let navigate = useNavigate();
    const getUserCart = async () => {
        try {
            if (params.id) {
                const res = await getCart(params.id);
                if (res?.data?.data.isPurchased) {
                    setcart({ ...res?.data?.data });
                    localStorage.clear();
                } else {
                    toast.error('Please complete the checkout');
                    navigate('/checkout');
                }
            } else {
                toast.error('Please place an order');
                navigate('/');
            }
        } catch (error) {
            toast.error('Failed to fetch the cart');
        }
    };

    useEffect(() => {
        getUserCart();
    }, []);
    return (
        <>
            <Header cart={cart} showSideCart={false} />
            <div className='container main-container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='fs-1 text-center'>Order Summary</h1>
                        <p className='fs-5 text-center'>
                            Hey{' '}
                            <strong className='text-capitalize'>
                                {cart.name}
                            </strong>
                            , Congratulations your order has been placed!
                        </p>
                    </div>

                    {cart.items &&
                        cart.items.map((x, i) => (
                            <div className='col-6 mb-4' key={i}>
                                <div className='card d-flex flex-row h-100'>
                                    <img
                                        src={x.image}
                                        width='200'
                                        className='img-thumbnail border-0 object-contain p-3'
                                        alt={x.title}
                                    />
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            {x.title}
                                        </h5>
                                        <h6 className='card-subtitle mb-2 text-muted'>
                                            {x.category}
                                        </h6>
                                        <p className='card-text'>${x.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body border-0 d-flex flex-column align-items-conter justify-content-center'>
                                <h5 className='card-title text-center'>
                                    Thank you for shopping with us!{' '}
                                </h5>
                                <p className='card-text text-center'>
                                    Looking for something else, click on Shop to
                                    place a new order 😄
                                </p>
                                <Link to='/' className='btn btn-primary'>
                                    Shop
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
