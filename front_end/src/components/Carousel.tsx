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
import slide1 from '../../public/imgs/slide_1.jpg'
import slide2 from '../../public/imgs/slide_2.jpg'
import slide3 from '../../public/imgs/slide_3.jpg'
import slide4 from '../../public/imgs/slide_4.jpg'

export const Carousel = () => {
    const slides = [
        { src: slide1, alt: "Slide 1" },
        { src: slide2, alt: "Slide 2" },
        { src: slide3, alt: "Slide 3" },
        { src: slide4, alt: "Slide 4" },
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
