import { useEffect, useState } from 'react';
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from 'swiper/types';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slide1 from '../../public/imgs/slide_1.jpg'
import slide2 from '../../public/imgs/slide_2.jpg'
import slide3 from '../../public/imgs/slide_3.jpg'
import slide4 from '../../public/imgs/slide_4.jpg'

export const Carousel = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    const slides = [
        { src: slide1, alt: "Slide 1" },
        { src: slide2, alt: "Slide 2" },
        { src: slide3, alt: "Slide 3" },
        { src: slide4, alt: "Slide 4" },
    ];

    const swiperParams: SwiperOptions = {
        modules: [Pagination, Navigation, Scrollbar, A11y, Autoplay],
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: { clickable: true },
        autoplay: { 
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: true,
        loop: true,
        spaceBetween: 0,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        updateOnWindowResize: true,
        initialSlide: 0,
    };

    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = slides.map(slide => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = slide.src;
                    img.onload = resolve;
                });
            });

            await Promise.all(imagePromises);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    if (!isLoaded) {
        return (
            <section className="h-[calc(100vh-64px)] flex justify-center items-center bg-gray-100"> {/* Ajusta el 64px según la altura de tu header */}
                <div className="flex flex-col items-center justify-center">
                    {/* Spinner de carga */}
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                </div>
            </section>
        );
    }

    return (
        <section className="h-[calc(100vh-64px)] flex justify-center items-center"> {/* Mantén la misma altura que el loading */}
            <Swiper 
                {...swiperParams} 
                className="w-full h-full"
                onInit={(swiper) => {
                    setTimeout(() => {
                        swiper.update();
                    }, 100);
                }}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        swiper.update();
                    }, 100);
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Carousel;


