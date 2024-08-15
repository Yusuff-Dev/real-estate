import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CustomNavigation from './CustomNavigation';

function CustomSlider({ loop, sb, sp, children, r, l, t, b }) {
    console.log(r)
    return (
        <>
            <Swiper className='relative'
                spaceBetween={sb || 0}
                slidesPerView={sp || 1}
                loop={loop || true}
            >
                {
                    children.map((child, index) => {
                        return (
                            <SwiperSlide key={index}>{child}</SwiperSlide>
                        )
                    })
                }

                <CustomNavigation r={r} l={l} t={t} b={b}/>
            </Swiper>
        </>
    )
}

export default CustomSlider