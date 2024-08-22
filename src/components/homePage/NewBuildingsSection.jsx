import BtnBeigie from "../../UI/BtnBeigie"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import build1 from '../../assets/images/home/new-buildings/build1.webp'
import build2 from '../../assets/images/home/new-buildings/build2.webp'
import build3 from '../../assets/images/home/new-buildings/build3.webp'
import build4 from '../../assets/images/home/new-buildings/build4.webp'

function NewBuildingsSection() {

    const [swiper, setSwiper] = useState(null);
    const [ml, setMl] = useState(window.outerWidth > 1480 ? (window.outerWidth - 1480) / 2 : 0)
    const [perView, setPerView] = useState(window.outerWidth > 768 ? 3.5 : 2.5);

    window.addEventListener('resize', () => {
        setPerView(window.outerWidth > 768 ? 3.5 : 2.5);
        setMl(window.outerWidth > 1480 ? (window.innerWidth - 1480) / 2 : 0)
    });


    const next = () => {
        swiper.slideNext();
    }

    const prev = () => {
        swiper.slidePrev();
    }

    const slideItems = [
        {
            id: 1,
            img: build1,
            name: 'Safa One',
            price: 1900000,
        },
        {
            id: 2,
            img: build2,
            name: 'Safa Two',
            price: 399000,
        },
        {
            id: 3,
            img: build3,
            name: 'Peninsula Two',
            price: 245000,
        },
        {
            id: 4,
            img: build4,
            name: 'Marina Vista',
            price: 612000,
        }
    ]


    return (
        <>
            <div className="flex items-center justify-between gap-2 container max-w-[1480px] mb-[25px] sm:mb-10 md:mb-[60px]">
                <h2 className="heading-2 font-Jost text-black">Новостройки</h2>
                <div className="xsm:flex items-center gap-2 hidden">
                    <button onClick={prev}
                        className="flex items-center justify-center w-10 h-10 sm:w-[50px] sm:h-[50px] rotate-180  rounded-full border border-black">
                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L9.75 10L1 18.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button onClick={next}
                        className="flex items-center justify-center w-10 h-10 sm:w-[50px] sm:h-[50px] rounded-full border border-black">
                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L9.75 10L1 18.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="pl-4 xsm:pl-5 hidden sm:block" style={{ marginLeft: `${ml}px` }}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={perView}
                    loop={slideItems.length > (perView + 1)}
                    onSwiper={(s) => setSwiper(s)}
                >
                    {
                        slideItems.map((item) => {
                            return <SwiperSlide key={item.id}>
                                <div className={`h-[600px] bg-cover bg-no-repeat bg-center flex flex-col justify-between p-6`} style={{ backgroundImage: `url(${item.img})` }}>
                                    <button className="ml-auto hover:scale-110 duration-300">
                                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6924 21.4829L11.6913 21.4819C8.45781 18.5498 5.8343 16.1662 4.01039 13.9347C2.19472 11.7134 1.25 9.73468 1.25 7.625C1.25 4.17761 3.93832 1.5 7.375 1.5C9.32327 1.5 11.2056 2.41084 12.4309 3.83846L13 4.50157L13.5691 3.83846C14.7944 2.41084 16.6767 1.5 18.625 1.5C22.0617 1.5 24.75 4.17761 24.75 7.625C24.75 9.73468 23.8053 11.7134 21.9896 13.9347C20.1657 16.1662 17.5422 18.5498 14.3087 21.4819L14.3076 21.4829L13 22.6733L11.6924 21.4829Z" stroke="white" strokeWidth="1.5" />
                                        </svg>
                                    </button>
                                    <div className="font-Jost text-white">
                                        <h3 className="heading-3 font-Jost text-white">{item.name}</h3>
                                        <p className="body-20">от ${item.price}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }

                </Swiper>
            </div>

            <div className="sm:hidden flex flex-col gap-3 px-4 xsm:px-5">
                {
                    slideItems.map(item=>{
                        return <div key={item.id} className={`h-[600px] bg-cover bg-no-repeat bg-center flex flex-col justify-between p-6`} style={{ backgroundImage: `url(${item.img})` }}>
                        <button className="ml-auto hover:scale-110 duration-300">
                            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6924 21.4829L11.6913 21.4819C8.45781 18.5498 5.8343 16.1662 4.01039 13.9347C2.19472 11.7134 1.25 9.73468 1.25 7.625C1.25 4.17761 3.93832 1.5 7.375 1.5C9.32327 1.5 11.2056 2.41084 12.4309 3.83846L13 4.50157L13.5691 3.83846C14.7944 2.41084 16.6767 1.5 18.625 1.5C22.0617 1.5 24.75 4.17761 24.75 7.625C24.75 9.73468 23.8053 11.7134 21.9896 13.9347C20.1657 16.1662 17.5422 18.5498 14.3087 21.4819L14.3076 21.4829L13 22.6733L11.6924 21.4829Z" stroke="white" strokeWidth="1.5" />
                            </svg>
                        </button>
                        <div className="font-Jost text-white">
                            <h3 className="heading-3 font-Jost text-white">{item.name}</h3>
                            <p className="body-20">от ${item.price}</p>
                        </div>
                    </div>
                    })
                }
            </div>

            <div className="flex justify-center mt-10 md:mt-[60px]">
                <BtnBeigie>Смотреть все</BtnBeigie>
            </div>
        </>
    )
}

export default NewBuildingsSection