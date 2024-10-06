import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import imagen1 from '../dummy-images/Imagen1.png'

export const Carousel = () => {
    const slides = [
        { src: imagen1, alt: "Slide 1" },
        { src: "../src/dummy-images/imagen2.jpg", alt: "Slide 2" },
        { src: "../src/dummy-images/imagen3.jpg", alt: "Slide 3" },
        { src: "../src/dummy-images/imagen4.jpg", alt: "Slide 4" },
    ];

    return (
        <section className="h-[100%] flex justify-center items-center">
            <Swiper
                modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
                pagination={true}
                autoplay
                navigation={true}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Carousel;
