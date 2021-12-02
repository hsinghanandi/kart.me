import React from 'react';

export default function Product({ product, handleAddToWishlist, removeItem }) {
    return (
        <>
            <li key={product.id} className='listing'>
                <div className='card' id='product'>
                    <img
                        className='card-img-top'
                        src={product.image}
                        alt={product.id}
                        width='300'
                    />
                    <div className='card-body'>
                        <h3 className='card-title'>{product.title}</h3>
                        <h6 className='card-title'>
                            Category: {product.category}
                        </h6>
                        <p className='card-text'>Price: ${product.price}</p>
                        <p className='card-text'>
                            Rating: {product.rating.rate}/5
                        </p>
                        {product.isSelected ? (
                            <a
                                className='btn btn-danger'
                                onClick={() => removeItem(product)}
                            >
                                Remove from Cart
                            </a>
                        ) : (
                            <a
                                className='btn btn-primary'
                                onClick={(event) =>
                                    handleAddToWishlist(product)
                                }
                            >
                                Add to Cart
                            </a>
                        )}
                    </div>
                </div>
            </li>
        </>
    );
}
