import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function UserForm({ cart, saveUserDetail, placeOrder }) {
    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [address, setaddress] = useState('');
    const [phone, setphone] = useState('');
    const [state, setstate] = useState('');
    const [city, setcity] = useState('');
    const [country, setcountry] = useState('');
    const [Editable, setEditable] = useState(false);

    useEffect(() => {
        if (cart.email && cart.email.trim().length) {
            setemail(cart.email);
        }
        if (cart.name && cart.name.trim().length) {
            setname(cart.name);
        }
        if (cart.address && cart.address.trim().length) {
            setaddress(cart.address);
        }
        if (cart.phone && cart.phone.trim().length) {
            setphone(cart.phone);
        }
        if (cart.state && cart.state.trim().length) {
            setstate(cart.state);
        }
        if (cart.city && cart.city.trim().length) {
            setcity(cart.city);
        }
        if (cart.country && cart.country.trim().length) {
            setcountry(cart.country);
        }

        if (
            cart.email &&
            cart.email.trim().length &&
            cart.name &&
            cart.name.trim().length &&
            cart.address &&
            cart.address.trim().length &&
            cart.phone &&
            cart.phone.trim().length &&
            cart.state &&
            cart.state.trim().length &&
            cart.city &&
            cart.city.trim().length &&
            cart.country &&
            cart.country.trim().length
        ) {
            setEditable(true);
        }
    }, [cart]);

    const validateForm = () => {
        if (
            !email.trim().length ||
            !name.trim().length ||
            !address.trim().length ||
            !state.trim().length ||
            !phone.trim().length ||
            !city.trim().length ||
            !country.trim().length
        ) {
            throw new Error(
                'Please fill in all the required fields to Check Out!'
            );
        }
        if (phone.trim().length !== 10 || isNaN(Number(phone))) {
            throw new Error('Please enter valid phone number');
        }
    };
    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            validateForm();
            saveUserDetail({
                email,
                name,
                address,
                phone,
                state,
                city,
                country,
            });
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit} className='row'>
            <div className='mb-3 col-6'>
                <label
                    htmlFor='email'
                    className='form-label'
                    id='input-form-label'
                >
                    Email
                </label>
                <input
                    type='email'
                    className='form-control'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    disabled={Editable}
                />
            </div>
            <div className='mb-3 col-6'>
                <label
                    htmlFor='name'
                    className='form-label'
                    id='input-form-label'
                >
                    Name
                </label>
                <input
                    type='text'
                    className='form-control'
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    disabled={Editable}
                />
            </div>
            <div className='mb-3 col-6'>
                <label
                    htmlFor='name'
                    className='form-label'
                    id='input-form-label'
                >
                    Address
                </label>
                <input
                    type='text'
                    className='form-control'
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    disabled={Editable}
                />
            </div>
            <div className='mb-3 col-6'>
                <label
                    htmlFor='name'
                    className='form-label'
                    id='input-form-label'
                >
                    State
                </label>
                <input
                    type='text'
                    className='form-control'
                    value={state}
                    onChange={(e) => setstate(e.target.value)}
                    disabled={Editable}
                />
            </div>
            <div className='mb-3 col-6'>
                <label
                    htmlFor='name'
                    className='form-label'
                    id='input-form-label'
                >
                    City
                </label>
                <input
                    type='text'
                    className='form-control'
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    disabled={Editable}
                />
            </div>
            <div className='mb-3 col-6'>
                <label
                    htmlFor='name'
                    className='form-label'
                    id='input-form-label'
                >
                    Contact Number
                </label>
                <input
                    type='text'
                    className='form-control'
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    disabled={Editable}
                />
            </div>
            <div className='mb-3 col-12'>
                <label
                    htmlFor='name'
                    className='form-label'
                    id='input-form-label'
                >
                    Country
                </label>
                <input
                    type='text'
                    className='form-control'
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                    disabled={Editable}
                />
            </div>
            {Editable ? (
                <>
                    <button
                        type='button'
                        className='btn btn-secondary mb-2'
                        onClick={() => setEditable(false)}
                    >
                        Edit
                    </button>
                    <button
                        type='button'
                        className='btn btn-success'
                        onClick={placeOrder}
                    >
                        Place Order
                    </button>
                </>
            ) : (
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
            )}
        </form>
    );
}
