import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BtnBeigie from '../UI/BtnBeigie';
import ButtonUI from '../UI/ButtonUI';

function Slider() {

    return (
        <>
            <Swiper
                navigation={{
                    nextEl: 'swiper-btn-next',
                    prevEl: 'swiper-btn-prev',
                }}
                modules={[Navigation]}
                className="mySwiper">
                <SwiperSlide className={`bg-[url('./assets/images/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
                    <section className='container max-w-[1480px] flex items-end justify-between py-[70px] min-h-[800px]'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='heading-1 font-Jost text-white max-w-[716px]'>Найдите идеальное место для жизни</h1>
                            <p className='text-white/80'>Откройте двери в новое будущее с нами</p>
                            <div className='mt-10'>
                                <BtnBeigie>Подробнее</BtnBeigie>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                    <div className='swiper-btn-prev'>
                        <ButtonUI>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6016 1.5L1.60156 10L10.6016 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonUI>
                    </div>

                    <div className='swiper-btn-next'>
                        <ButtonUI>
                            <svg className='rotate-180' width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6016 1.5L1.60156 10L10.6016 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonUI>
                    </div>
                </div>
                    </section>
                </SwiperSlide>

                
            </Swiper>
        </>
    )
}

export default Slider