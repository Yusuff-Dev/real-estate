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

                 <div className={`absolute z-10 ${navigationStyles}`}>
                    <CustomNavigation/>
                 </div>
            </Swiper>
        </>
    )
}

export default CustomSlider