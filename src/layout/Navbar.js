import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { HashLink } from 'react-router-hash-link';

// images
import Logo from '../images/logo.png';

// icons
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [active, setActive] = useState('home');

    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return (
        <header className={`fixed top-0 z-50 w-full bg-navBg ${scrollY > 100 ? 'h-[72px]' : 'h-[92px]'} py-7 flex items-center justify-center transition-all duration-300`}>
            <nav className='flex items-center justify-between container mx-auto px-4 md:px-16'>
                <div className="logo">
                    <img src={Logo} className='w-60 md:w-[300px]' alt="transactgraph-logo" />
                </div>

                <button onClick={() => setShow(!show)}>
                    {
                        show ? <FaBars className='md:hidden text-3xl text-primary' />
                            :
                            <MdClose className='md:hidden text-3xl text-primary z-20 relative' />
                    }
                </button>

                <ul className='hidden md:flex gap-6 font-bold uppercase text-[13px] font-monFont'>
                    <li>
                        <HashLink
                            to="/home#home" smooth
                            className={`${active === 'home' ? 'text-primary' : ''}`}
                            onClick={() => setActive('home')}>Home</HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="/home#about" smooth
                            className={`${active === 'about' ? 'text-primary' : ''}`}
                            onClick={() => setActive('about')}>About</HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="/home#services" smooth
                            className={`${active === 'services' ? 'text-primary' : ''}`}
                            onClick={() => setActive('services')}>Services</HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="/home#contact" smooth
                            className={`${active === 'contact' ? 'text-primary' : ''}`}
                            onClick={() => setActive('contact')}>Contact</HashLink>
                    </li>
                </ul>

                {/* mobile nav items */}
                <motion.ul initial={{ x: -500 }} animate={{ x: show ? -500 : -20 }} className={`fixed w-[260px] text-white bg-black top-0 h-screen flex flex-col gap-4 font-bold uppercase text-[13px] font-monFont pt-7 pl-5 z-20`}>
                    <li>
                        <HashLink
                            to="/home#home" smooth
                            className={`${active === 'home' ? 'text-primary' : ''}`}
                            onClick={() => setActive('home')}>Home</HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="/home#about" smooth
                            className={`${active === 'about' ? 'text-primary' : ''}`}
                            onClick={() => setActive('about')}>About</HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="/home#services" smooth
                            className={`${active === 'services' ? 'text-primary' : ''}`}
                            onClick={() => setActive('services')}>Services</HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="/home#contact" smooth
                            className={`${active === 'contact' ? 'text-primary' : ''}`}
                            onClick={() => setActive('contact')}>Contact</HashLink>
                    </li>
                </motion.ul>
            </nav>

            <div onClick={() => setShow(!show)} className={`bg-overlay ${show ? 'w-0' : 'w-full'} h-screen fixed top-0 z-10`}></div>
        </header>
    );
};

export default Navbar;