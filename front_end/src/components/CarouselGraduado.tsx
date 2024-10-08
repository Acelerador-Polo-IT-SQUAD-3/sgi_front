import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ImgCarousel1 from '../dummy-images/home-graduado/homegraduado1.png';
import ImgCarousel2 from '../dummy-images/home-graduado/homegraduado2.jpg';
import ImgCarousel3 from '../dummy-images/home-graduado/homegraduado3.jpg';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CarouselGraduado = () => {
    const slides = [
        ImgCarousel1,
        ImgCarousel2,
        ImgCarousel3,
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
                        {slide}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default CarouselGraduado;
