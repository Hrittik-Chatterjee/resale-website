import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componenets/Shared/Footer';
import Header from '../Componenets/Shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;