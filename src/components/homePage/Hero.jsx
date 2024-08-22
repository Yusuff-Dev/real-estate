import { useState } from 'react';
import BtnBeigie from '../../UI/BtnBeigie'
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomNavigation from '../slider/CustomNavigation';

function Hero() {

    const [swiper, setSwiper] = useState(null);

    const next = () => {
        swiper.slideNext();
    }

    const prev = () => {
        swiper.slidePrev();
    }

    const slides = Array.from({ length: 4 }, (_, index) => index + 1);

    return (
        <>
            <Swiper className='relative'
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSwiper={(s) => {
                    setSwiper(s);
                }}
            >

                {
                    slides.map((item, index) => {
                        return <SwiperSlide key={index}>
                            <div className={`bg-[url('./assets/images/home/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
                                <div className='container max-w-[1480px] flex items-end pb-[70px] h-[800px]'>
                                    <div className='flex flex-col md:max-w-[716px] font-Jost'>
                                        <h1 className='heading-1 font-Jost text-white mb-2 sm:mb-3'>Найдите идеальное место для жизни</h1>
                                        <p className='content text-white/80 mb-[30px] sm:mb-10'>Откройте двери в новое будущее с нами</p>
                                        <BtnBeigie>Подробнее</BtnBeigie>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }

                <div className='container max-w-[1480px] absolute bottom-[350px] xsm:bottom-[70px] z-10 left-1/2 -translate-x-1/2 flex xsm:justify-end gap-2 items-center'>
                    <CustomNavigation />
                </div>
            </Swiper>
        </>
    )
}

export default Hero