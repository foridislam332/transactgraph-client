import React, { useState } from 'react';
import { motion } from 'framer-motion';

// icons
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
    const [scrollY, setScrollY] = useState(false);
    const handleScroll = () => {
        if (window.scrollY >= 1750) {
            setScrollY(true)
        }
    };

    window.addEventListener("scroll", handleScroll);

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 300, delay: 0 },
    };
    return (
        <section id='contact' className='px-4 md:px-24 py-16'>
            {/* section title */}
            <motion.div className='text-center mb-14'
                animate={scrollY ? "visible" : "hidden"}
                variants={variants}
                transition={{ type: "spring", ease: "easeIn", duration: 1.5 }}
            >
                <h1 className='text-[32px] font-bold uppercase'>CONTACT US</h1>
                <div className='flex items-center justify-center mt-3 mb-5'>
                    <span className='w-10 h-[1px] bg-[#ddd] block'></span>
                    <span className='w-10 h-[3px] bg-primary block'></span>
                    <span className='w-10 h-[1px] bg-[#ddd] block'></span>
                </div>
                <p>For further information please contact:</p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 divide-x'>
                {/* address */}
                <motion.div className='text-center pt-10'
                    animate={scrollY ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", ease: "easeIn", duration: 1.5 }}
                >
                    <IoLocationOutline className='mx-auto text-5xl text-primary' />

                    <h4 className='text-lg text-[#999] font-bold mt-5 mb-4'>ADDRESS</h4>
                    <address className='not-italic'>Transactgraph Sdn Bhd <br />
                        1-23-5 Menara Bangkok Bank <br />
                        Berjaya Central Park, Jalan Ampang <br />
                        50450 Kuala Lumpur, Malaysia</address>
                </motion.div>

                {/* phone number */}
                <motion.div className='text-center pt-10'
                    animate={scrollY ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: .3 }}>
                    <BsTelephone className='mx-auto text-5xl text-primary' />

                    <h4 className='text-lg text-[#999] font-bold mt-5 mb-4'>PHONE NUMBER</h4>
                    <a href='/'>+603 9212 2803</a>
                </motion.div>

                {/* email */}
                <motion.div className='text-center pt-10'
                    animate={scrollY ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ type: "spring", ease: "easeIn", duration: 1.5, delay: .5 }}
                >
                    <AiOutlineMail className='mx-auto text-5xl text-primary' />

                    <h4 className='text-lg text-[#999] font-bold mt-5 mb-4'>EMAIL</h4>
                    <a href='/'>info@transactgraph.com</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;