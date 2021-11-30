import React, { useState, useEffect } from 'react';
import '../style.css';
import Header from '../components/Header';
import UserForm from '../components/UserForm';
import { createOrder, getCart, saveUserDetailToCart } from '../api';
import { toast } from 'react-toastify';
import PreviewCart from '../components/previewCart';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    let navigate = useNavigate();
    const [cart, setcart] = useState({});

    useEffect(() => {
        if (!localStorage.cartId) {
            navigate('/');
        }
    }, []);

    const getUserCart = async () => {
        try {
            if (localStorage.cartId) {
                const res = await getCart(localStorage.cartId);
                if (res?.data?.data) {
                    localStorage.setItem('cartId', res.data.data._id);
                    setcart({ ...res?.data?.data });
                }
            }
        } catch (error) {
            toast.error('Failed to fetch the cart');
        }
    };

    useEffect(() => {
        getUserCart();
    }, []);

    const saveUserDetail = async (payload) => {
        try {
            await saveUserDetailToCart({
                ...payload,
                cartId: localStorage.cartId,
            });
            getUserCart();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const placeOrder = async () => {
        try {
            await createOrder({ cartId: localStorage.cartId });
            navigate(`/summary/${localStorage.cartId}`);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <Header cart={cart} showSideCart={false} />
            <div className='container main-container'>
                <h1>Your order is ready, Please enter the details below</h1>
                <br />
                <div className='row'>
                    <div className='col-8'>
                        <UserForm
                            saveUserDetail={saveUserDetail}
                            cart={cart}
                            placeOrder={placeOrder}
                        />
                    </div>
                    <div className='col-4'>
                        <PreviewCart cart={cart} />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Checkout;
