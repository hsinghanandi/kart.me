import axios from 'axios';

const envURL = process.env.URL;
const baseUrl = 'http://localhost:8080';

console.log('ENV URL', envURL);

export const getCategories = () => {
    return axios.get('https://fakestoreapi.com/products/categories');
};

export const addtoCart = (payload) => {
    return axios.post(`${baseUrl}/api/v1/user/cart/add-to-cart`, payload);
};

export const updateCart = (payload) => {
    return axios.patch(`${baseUrl}/api/v1/user/cart/update-cart`, payload);
};

export const saveUserDetailToCart = (payload) => {
    return axios.patch(`${baseUrl}/api/v1/user/cart/update-user`, payload);
};

export const createOrder = (payload) => {
    return axios.patch(`${baseUrl}/api/v1/user/cart/create-order`, payload);
};

export const removeItemfromCart = (payload) => {
    return axios.patch(`${baseUrl}/api/v1/user/cart/remove-product`, payload);
};

export const getCart = (id) => {
    return axios.get(`${baseUrl}/api/v1/user/cart/${id}`);
};
