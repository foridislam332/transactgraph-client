import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = () => {
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />

            {/* scroll to top button*/}
            <HashLink className={`${scrollY > 100 ? 'opacity-100' : 'hidden opacity-0'} fixed z-50 bottom-20 right-5 text-xl text-white p-3 bg-primary rounded-full hover:shadow-xl transition-all duration-300`} to="#top"><FaChevronUp /></HashLink>
        </>
    );
};

export default Main;