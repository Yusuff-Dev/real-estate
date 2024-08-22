import Tabs from '../Tabs/Tabs'
import Tab from '../Tabs/Tab'
import slider20 from '../../assets/images/home/slider2.0.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import CustomNavigation from '../slider/CustomNavigation'


function AboutSection() {
    const slides = Array.from({ length: 10 }, (_, index) => index + 1);
    return (

        <div className="container max-w-[1480px]">
            <div className="flex flex-col md:flex-row gap-y-10 gap-5">
                <h2 className="heading-2 font-Jost text-black basis-1/2">О компании <p className="text-beigie-100">RMC DE LUXE</p></h2>

                <div className="font-Jost text-black content basis-1/2">
                    <Tabs>
                        <Tab title="Аренда">
                            <p className="mb-8">
                                Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды — от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности
                            </p>
                            <p>
                                Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков
                            </p>
                        </Tab>
                        <Tab title="Купля - продажа">
                            <p>
                                Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков
                            </p>
                        </Tab>
                        <Tab title="Управление">
                            <p className="mb-8">
                                Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды — от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности
                            </p>
                        </Tab>
                    </Tabs>
                </div>
            </div>

            <div className="mt-[35px] sm:mt-10 md:mt-[50px]">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    className='relative'
                >
                    {
                        slides.map((item, index) => <SwiperSlide key={index}>
                            <div className="max-h-screen">
                                <img src={slider20} alt="slider image" className="block w-full h-auto object-cover" />
                            </div>
                        </SwiperSlide>)
                    }

                    <div className='absolute top-[30px] left-[30px] z-10'>
                        <CustomNavigation />
                    </div>
                </Swiper>
            </div>

        </div>
    )
}

export default AboutSection