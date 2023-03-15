import React, { useState } from 'react';
import { motion } from "framer-motion";

// icons
import { IoSpeedometerOutline, IoListOutline, IoEyeOutline } from 'react-icons/io5';

// images
import about1 from '../images/about-mission.jpg';
import about2 from '../images/about-plan.jpg';
import about3 from '../images/about-vision.jpg';

// about background
import aboutBg from '../images/about-bg.jpg';

const About = () => {
    const [scrollY, setScrollY] = useState(false);
    const handleScroll = () => {
        if (window.scrollY >= 350) {
            setScrollY(true)
        }
    };

    window.addEventListener("scroll", handleScroll);

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300, delay: 0 },
    };

    return (
        <section id='about' style={{
            backgroundImage: `url(${aboutBg})`
        }} className="bg-top-center bg-no-repeat bg-cover bg-fixed">
            <div className='bg-aboutOv'>
                <div className='px-4 md:px-24 py-16'>
                    {/* section title */}
                    <motion.div className='text-center mb-8'
                        animate={scrollY ? "visible" : "hidden"}
                        variants={variants}
                        transition={{ type: "spring", ease: "easeIn", duration: 1.5 }}
                    >
                        <h1 className='text-[32px] font-bold uppercase'>About Us</h1>
                        <div className='flex items-center justify-center mt-3 mb-5'>
                            <span className='w-10 h-[1px] bg-[#ddd] block'></span>
                            <span className='w-10 h-[3px] bg-primary block'></span>
                            <span className='w-10 h-[1px] bg-[#ddd] block'></span>
                        </div>
                        <p>We are having a group of proficient IT professionals with ability to inaugurate uncustomary customisation and a strong desire to excel. Our team is ready to deliver maximal transparency and convenience throughout superior software products and services that empowers our partners.</p>
                    </motion.div>

                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.7 }}
                        >
                            {/* about item 1 */}
                            <motion.div
                                className='rounded-lg bg-white shadow-lg about_item'
                                animate={scrollY ? "visible" : "hidden"}
                                variants={variants}
                                transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: .2 }}
                            >
                                {/* images */}
                                <img className='rounded-lg' src={about1} alt="" />

                                {/* icon */}
                                <div>
                                    <div className='h-16 w-16 rounded-full flex items-center justify-center bg-primary text-white border-4 border-white mx-auto relative bottom-8 icon'>
                                        <IoSpeedometerOutline className='text-[36px] -mt-[5px]' />
                                    </div>
                                </div>

                                {/* about item content */}
                                <div className='pb-10 px-5'>
                                    <h3 className='text-center text-xl font-bold font-monFont -mt-5 mb-3 hover:text-primary transition-all duration-300 ease-in-out'>
                                        <a href='/'>Our Mission</a>
                                    </h3>

                                    <p className='text-sm leading-6'>To be one-stop-shop IT Solutions Provider Company, that provides timely and cost effective solutions to clients, without any barriers. Our mission is to cater clients and their firms with premier services and solutions.</p>
                                </div>
                            </motion.div>

                            {/* about item 2 */}
                            <motion.div
                                className='rounded-lg bg-white shadow-lg about_item'
                                animate={scrollY ? "visible" : "hidden"}
                                variants={variants}
                                transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: .4 }}
                            >

                                {/* images */}
                                <img className='rounded-lg' src={about2} alt="" />

                                {/* icon */}
                                <div>
                                    <div className='h-16 w-16 rounded-full flex items-center justify-center bg-primary text-white border-4 border-white mx-auto relative bottom-8 icon'>
                                        <IoListOutline className='text-[36px]' />
                                    </div>
                                </div>

                                {/* about item content */}
                                <div className='pb-10 px-5'>
                                    <h3 className='text-center text-xl font-bold font-monFont -mt-5 mb-3 hover:text-primary transition-all duration-300 ease-in-out'>
                                        <a href='/'>Our Mission</a>
                                    </h3>

                                    <p className='text-sm leading-6'>To be one-stop-shop IT Solutions Provider Company, that provides timely and cost effective solutions to clients, without any barriers. Our mission is to cater clients and their firms with premier services and solutions.</p>
                                </div>
                            </motion.div>

                            {/* about item 3 */}
                            <motion.div
                                className='rounded-lg bg-white shadow-lg about_item'
                                animate={scrollY ? "visible" : "hidden"}
                                variants={variants}
                                transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: .6 }}
                            >
                                {/* images */}
                                <img className='rounded-lg' src={about3} alt="" />

                                {/* icon */}
                                <div>
                                    <div className='h-16 w-16 rounded-full flex items-center justify-center bg-primary text-white border-4 border-white mx-auto relative bottom-8 icon'>
                                        <IoEyeOutline className='text-[36px]' />
                                    </div>
                                </div>

                                {/* about item content */}
                                <div className='pb-10 px-5'>
                                    <h3 className='text-center text-xl font-bold font-monFont -mt-5 mb-3 hover:text-primary transition-all duration-300 ease-in-out'>
                                        <a href='/'>Our Mission</a>
                                    </h3>

                                    <p className='text-sm leading-6'>To be one-stop-shop IT Solutions Provider Company, that provides timely and cost effective solutions to clients, without any barriers. Our mission is to cater clients and their firms with premier services and solutions.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;