import axios from 'axios';
require('dotenv').config();

const serverURL = process.env.REACT_APP_KART_ME_SERVER;

export const getCategories = () => {
    return axios.get('https://fakestoreapi.com/products/categories');
};

export const addtoCart = (payload) => {
    return axios.post(`${serverURL}/api/v1/user/cart/add-to-cart`, payload);
};

export const updateCart = (payload) => {
    return axios.patch(`${serverURL}/api/v1/user/cart/update-cart`, payload);
};

export const saveUserDetailToCart = (payload) => {
    return axios.patch(`${serverURL}/api/v1/user/cart/update-user`, payload);
};

export const createOrder = (payload) => {
    return axios.patch(`${serverURL}/api/v1/user/cart/create-order`, payload);
};

export const removeItemfromCart = (payload) => {
    return axios.patch(`${serverURL}/api/v1/user/cart/remove-product`, payload);
};

export const getCart = (id) => {
    return axios.get(`${serverURL}/api/v1/user/cart/${id}`);
};
