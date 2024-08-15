import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Carousel = () => {

      const slides = [
        { src: 'src/dummy-images/image1.jpg', alt: 'Slide 1' },
        { src: 'src/dummy-images/image2.jpg', alt: 'Slide 2' },
        { src: 'src/dummy-images/image3.jpg', alt: 'Slide 3' },
        { src: 'src/dummy-images/image4.jpg', alt: 'Slide 4' }

    ];

    return (
        <section className='h-[100%] flex justify-center items-center'>
            <Swiper
            modules={[Pagination,Navigation,Scrollbar,A11y,Autoplay]}
            slidesPerView={1}
            pagination={true}
            autoplay
            navigation={true}
            loop={true}
            className=' md:h-[95%] md:w-[55%]'
        >
            
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                    <img src={slide.src} alt={slide.alt} className="w-full rounded-md object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
        </section>
        
    );
};

export default Carousel;