import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import Paths from './Routes';

const App = () => {
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Paths />
            </BrowserRouter>
        </>
    );
};
export default App;
