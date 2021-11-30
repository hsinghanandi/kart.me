import React, { useState, useEffect, Fragment } from 'react';
import Product from './Product';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const Products = ({
    handleAddToWishlist,
    handleChangeCategory,
    selectedOption,
    selectedCategory,
    categories,
    cart,
    removeItem,
}) => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);

    const fetchProducts = () => {
        let productData;

        selectedOption === 'default' || selectedOption === 'All Products'
            ? (productData = axios.get('https://fakestoreapi.com/products'))
            : (productData = axios.get(
                  `https://fakestoreapi.com/products/category/${selectedCategory}`
              ));
        setLoader(true);
        productData
            .then((res) => {
                setProducts(res.data);
                setLoader(false);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => fetchProducts(), [selectedCategory]);

    return (
        <>
            {/* <div> */}
            <div className='form-floating'>
                <select
                    onChange={handleChangeCategory}
                    value={selectedOption}
                    className='form-select'
                    id='floatingSelect'
                    disabled={loader}
                >
                    <option disabled value='default'>
                        -- Choose a Category --
                    </option>
                    {categories &&
                        categories.map((cat, i) => (
                            <option key={i} value={cat}>
                                {cat}
                            </option>
                        ))}
                    <option value='All Products'>All Products</option>
                </select>
                <label htmlFor='floatingSelect'>Filter</label>
            </div>
            <br />
            <br />
            {/* </div> */}

            {loader ? (
                <div className='row'>
                    <div className='col-12 text-center mt-5'>
                        <Loader
                            type='Puff'
                            color='#00BFFF'
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
            ) : (
                <ul id='listing-container'>
                    {products.map((item, i) => {
                        item.quantity = 1;
                        item.isSelected = false;
                        let product = item;
                        if (cart.items) {
                            let selectedItem = cart.items.find(
                                (x) => item.id == x.productId
                            );
                            if (selectedItem) {
                                product.quantity = selectedItem.quantity;
                                product.isSelected = true;
                            }
                        }
                        return (
                            <Fragment key={i}>
                                <Product
                                    product={product}
                                    handleAddToWishlist={handleAddToWishlist}
                                    removeItem={removeItem}
                                />
                            </Fragment>
                        );
                    })}
                </ul>
            )}
        </>
    );
};
export default Products;
