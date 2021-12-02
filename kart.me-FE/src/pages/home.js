import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Products from '../components/Products';
import { addtoCart, getCart, getCategories, removeItemfromCart } from '../api';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    const [cart, setcart] = useState({});
    const TOAST = {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    const handleAddToWishlist = async (product) => {
        try {
            const res = await addtoCart({
                image: product.image,
                title: product.title,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating.rate,
                productId: String(product.id),
                quantity: 1,
                cartId: localStorage.cartId || undefined,
            });
            if (res.data.data._id) {
                localStorage.setItem('cartId', res.data.data._id);
                getUserCart();
            }
            toast.success('Product added to Cart', TOAST);
        } catch (error) {
            toast.error('Failed to add product into cart', TOAST);
        }
    };

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedOption, setSelectedOption] = useState('default');

    const handleChangeCategory = (option) => {
        setSelectedCategory(option.target.value);
        setSelectedOption(option.target.value);
    };

    const getProductCategories = async () => {
        try {
            const res = await getCategories();
            setCategories(res.data);
        } catch (error) {
            toast.error('Failed to fetch product categories', TOAST);
        }
    };

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
            toast.info('Connecting to DB, please wait', {
                position: 'top-right',
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const removeItem = async (product) => {
        try {
            await removeItemfromCart({
                cartId: localStorage.cartId || undefined,
                productId: String(product.id),
            });
            toast.info('Product removed from Cart', TOAST);
            getUserCart();
        } catch (error) {
            toast.error('Failed to remove product from cart', TOAST);
        }
    };

    useEffect(() => {
        getProductCategories();
        getUserCart();
    }, []);

    return (
        <>
            <Header cart={cart} showSideCart={true} />
            <div className='container main-container'>
                <Products
                    handleAddToWishlist={handleAddToWishlist}
                    handleChangeCategory={handleChangeCategory}
                    selectedOption={selectedOption}
                    selectedCategory={selectedCategory}
                    categories={categories}
                    cart={cart}
                    removeItem={removeItem}
                />
            </div>
            <Footer />
        </>
    );
};
export default Home;
