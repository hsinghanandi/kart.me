import React from 'react';

export default function PreviewCart({ cart }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title h5 mb-0 d-flex justify-content-between'>
                    <p>Cart ({cart?.items?.length})</p>
                    {cart?.items && (
                        <p>
                            Total: $
                            {cart?.items
                                .reduce((acc, x) => acc + Number(x.price), 0)
                                .toFixed(2)}
                        </p>
                    )}
                </h5>
                <ul className='list-group preview-cart-listing'>
                    {cart.items &&
                        cart.items.map((x, i) => (
                            <li key={i} className='list-group-item'>
                                <div className='d-flex'>
                                    <img
                                        src={x.image}
                                        width='50'
                                        className='img-thumbnail border-0 object-contain'
                                        alt={x.title}
                                    />
                                    <div className='d-flex flex-column ms-2'>
                                        <p className='h6'>
                                            {x.title.length > 30
                                                ? `${x.title.slice(0, 30)}...`
                                                : x.title}
                                        </p>
                                        <p className='h6 text-muted'>
                                            {x.category}
                                        </p>
                                        <p className='h6'>${x.price}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}
