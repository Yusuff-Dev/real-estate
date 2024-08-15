import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CustomNavigation from './CustomNavigation';

function CustomSlider({ loop, sb, sp, children, navigationStyles }) {
    return (
        <>
            <Swiper className='relative'
                spaceBetween={sb || 0}
                slidesPerView={sp || 1}
                loop={children.length ? true : false || loop}
            >
                 {
                    children.length ? children.map((child, index) => {
                        return (
                            <SwiperSlide key={index}>{child}</SwiperSlide>
                        )
                    }) : <SwiperSlide>{children}</SwiperSlide>
                 }

                 <div className={`absolute z-10 ${navigationStyles} bottom-[340px] left-4 sm:left-[calc(100%-20px)] sm:-translate-x-full sm:bottom-[75px] md:bottom-[70px] fx:left-[calc(100%-240px)]`}>
                    <CustomNavigation/>
                 </div>
            </Swiper>
        </>
    )
}

export default CustomSlider