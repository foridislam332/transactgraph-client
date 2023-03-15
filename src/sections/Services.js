import React, { useState } from 'react';
import { motion } from "framer-motion";

// icons
import { IoIosAnalytics, IoIosBookmarks, IoIosBarcode, IoIosPeople } from 'react-icons/io';
import { IoNewspaperOutline, IoSpeedometerOutline } from 'react-icons/io5';

const Services = () => {
    const [scrollY, setScrollY] = useState(false);
    const handleScroll = () => {
        if (window.scrollY >= 1000) {
            setScrollY(true)
        }
    };

    window.addEventListener("scroll", handleScroll);

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300, delay: 0 },
    };
    return (
        <section id='services' className='px-4 md:px-24 py-16 bg-[#f7f7f7]'>
            {/* section title */}
            <motion.div className='text-center mb-14'
                animate={scrollY ? "visible" : "hidden"}
                variants={variants}
                transition={{ type: "spring", ease: "easeIn", duration: 1.5 }}
            >
                <h1 className='text-[32px] font-bold uppercase'>SERVICES</h1>
                <div className='flex items-center justify-center mt-3 mb-5'>
                    <span className='w-10 h-[1px] bg-[#ddd] block'></span>
                    <span className='w-10 h-[3px] bg-primary block'></span>
                    <span className='w-10 h-[1px] bg-[#ddd] block'></span>
                </div>
                <p>We provide highly professional services of emerging technology that make your business more efficient and unique.</p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {/* service item 1 */}
                <motion.div className='flex gap-8'
                    animate={scrollY ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: .2 }}
                >
                    <div>
                        <IoIosAnalytics className='text-5xl text-primary' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold font-monFont hover:text-primary transition-all duration-300 ease-in-out mb-5'>
                            <a href='/'>Software Development</a>
                        </h3>
                        <p className='text-sm text-[#666666] leading-6'>Transactgraph is a leading software company. It provides unique solutions blended with the latest technologies.</p>
                    </div>
                </motion.div>

                {/* service item 2 */}
                <motion.div className='flex gap-8'
                    animate={scrollY ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: .4 }}
                >
                    <div>
                        <IoIosBookmarks className='text-5xl text-primary' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold font-monFont hover:text-primary transition-all duration-300 ease-in-out mb-5'>
                            <a href='/'>BI & IOT</a>
                        </h3>
                        <p className='text-sm text-[#666666] leading-6'>We keep on focusing on Enterprises solution for building infrastructure to retrieve, store, and analyze data for your business.</p>
                    </div>
                </motion.div>

                {/* service item 3 */}
                <motion.div className='flex gap-8'
                    animate={scrollY ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: .6 }}
                >
                    <div>
                        <IoNewspaperOutline className='text-5xl text-primary' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold font-monFont hover:text-primary transition-all duration-300 ease-in-out mb-5'>
                            <a href='/'>Cloud Computing</a>
                        </h3>
                        <p className='text-sm text-[#666666] leading-6'>Our team of experts is pretty much aware about cloud computing activities and suggests you the best services for multilevel cloud deployments.</p>
                    </div>
                </motion.div>

                {/* service item 4 */}
                <motion.div className='flex gap-8'
                    animate={scrollY ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: .8 }}
                >
                    <div>
                        <IoSpeedometerOutline className='text-5xl text-primary' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold font-monFont hover:text-primary transition-all duration-300 ease-in-out mb-5'>
                            <a href='/'>Mobile Application</a>
                        </h3>
                        <p className='text-sm text-[#666666] leading-6'>From the beginning of mobile app development, our developers provide extensive app development support, discussing ideas, getting project plans and insight.</p>
                    </div>
                </motion.div>

                {/* service item 5 */}
                <motion.div className='flex gap-8'
                    animate={scrollY ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: 1 }}
                >
                    <div>
                        <IoIosBarcode className='text-5xl text-primary' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold font-monFont hover:text-primary transition-all duration-300 ease-in-out mb-5'>
                            <a href='/'>Enterprise Solution</a>
                        </h3>
                        <p className='text-sm text-[#666666] leading-6'>We are an enterprise solutions architect for the business and offers ultimate resources for your company.</p>
                    </div>
                </motion.div>

                {/* service item 6 */}
                <motion.div className='flex gap-8'
                    animate={scrollY ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: 1.2 }}
                >
                    <div>
                        <IoIosPeople className='text-5xl text-primary' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold font-monFont hover:text-primary transition-all duration-300 ease-in-out mb-5'>
                            <a href='/'>Industry Automation</a>
                        </h3>
                        <p className='text-sm text-[#666666] leading-6'>We carry out turnkey solutions for Industrial Control Systems and Robotic Automation in high-regulated sectors. We have the ability to solve your complex problems with simple solutions.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;