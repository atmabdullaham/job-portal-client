import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* dymamic Content */}
            <div className='min-h-[calc(100vh-280px)]'><Outlet></Outlet></div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;