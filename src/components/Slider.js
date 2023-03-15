import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// slider images
import slide1 from '../images/hero-banner/1.jpg';
import slide2 from '../images/hero-banner/3.jpg';
const Slider = () => {
    const images = [
        {
            "img": slide1,
            "name": "We are professional",
            "des": "A bunch of professional pundits sharing close camaraderie compose our trustworthy team. Your trust, Our assurance.."
        },
        {
            "img": slide2,
            "name": "Think Big. We make it possible",
            "des": "We will create a successful business for you."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        let timerId;
        if (autoplay) {
            timerId = setTimeout(() => {
                const nextIndex = (currentIndex + 1) % images.length;
                setCurrentIndex(nextIndex);
                setActiveIndex(nextIndex);
            }, 10000); // change 3000 to the desired delay in milliseconds
        }
        return () => clearTimeout(timerId);
    }, [autoplay, currentIndex, images.length]);

    const handlePrevClick = () => {
        setAutoplay(false);
        const prevIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setActiveIndex(prevIndex);
    };

    const handleNextClick = () => {
        setAutoplay(false);
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setActiveIndex(nextIndex);
    };

    const indicators = images.map((image, index) => (
        <li key={index}>
            <button
                onClick={() => {
                    setAutoplay(false);
                    setCurrentIndex(index);
                    setActiveIndex(index);
                }}
                className={`w-8 h-[3px] mx-1 ${activeIndex === index ? "bg-white" : "bg-gray-500"
                    }`}
            ></button>
        </li>
    ));

    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 bg-gray-100">
                <img
                    src={images[currentIndex].img}
                    alt="SliderImage"
                    className="object-cover w-full h-full"
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center text-white w-4/5">
                    <h1 className="text-5xl font-bold">{images[currentIndex].name}</h1>
                    <p className="w-3/5 mx-auto my-8">{images[currentIndex].des}</p>

                    <button className="bg-primary py-2 px-8 font-monFont font-medium rounded-3xl tracking-widest">Get Started</button>
                </div>

                <div className="absolute top-0 left-0 bg-overlay w-full h-screen z-10"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 pb-6 flex justify-between w-full z-20">
                <button
                    onClick={handlePrevClick}
                >
                    <FaChevronLeft className="text-4xl text-gray-500 hover:text-white transition-all duration-300 ease-in-out" />
                </button>
                <button
                    onClick={handleNextClick}
                >
                    <FaChevronRight className="text-4xl text-gray-500 hover:text-white transition-all duration-300 ease-in-out" />
                </button>
            </div>

            <ul className="absolute bottom-5 left-0 right-0 flex justify-center list-none pt-4 z-20">
                {indicators}
            </ul>
        </div>
    );
};

export default Slider;