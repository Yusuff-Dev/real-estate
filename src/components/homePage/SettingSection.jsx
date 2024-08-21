import CustomSlider from "../slider/CustomSlider"
import BtnBeigie from "../../UI/BtnBeigie"
import { useEffect, useRef } from "react";

function SettingSection() {
    const ref = useRef(null);

    const changePadding = (size) => {
        let m = 0;
        if (size > 1480) m = (size - 1480) / 2;

        if (ref.current) {
            ref.current.style.marginLeft = `${m}px`
        }
    }

    useEffect(() => {
        changePadding(window.outerWidth);
    }, [window.outerWidth])


    window.addEventListener("resize", () => {
        changePadding(window.outerWidth)
    });

    const perView = () => {
        let sp = 2.5;
        if (window.outerWidth > 768) {
            sp = 3.5
        }

        return sp
    }

    return (
        <div ref={ref} className={`pl-4 sm:pl-5`}>
            <h2 className="heading-2 font-Jost text-black mb-[25px] sm:mb-10 md:mb-[60px]">Новостройки</h2>
            <CustomSlider
                navigationStyles={"top-[30px] left-[30px]"} sb={20} sp={perView()}
            >
                <div className={`bg-[url('./assets/images/home/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
                    <div className='container max-w-[1480px] flex items-end pb-[70px] h-[800px]'>
                        <div className='flex flex-col md:max-w-[716px] font-Jost'>
                            <h1 className='heading-1 font-Jost text-white mb-2 sm:mb-3'>Найдите идеальное место для жизни</h1>
                            <p className='content text-white/80 mb-[30px] sm:mb-10'>Откройте двери в новое будущее с нами</p>
                            <BtnBeigie>Подробнее</BtnBeigie>
                        </div>
                    </div>
                </div>
                <div className={`bg-[url('./assets/images/home/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
                    <div className='container max-w-[1480px] flex items-end pb-[70px] h-[800px]'>
                        <div className='flex flex-col max-w-[323px] w-full md:max-w-[716px] font-Jost'>
                            <h1 className='heading-1 font-Jost text-white mb-2 sm:mb-3'>Найдите идеальное место для жизни</h1>
                            <p className='content text-white/80 mb-[30px] sm:mb-10'>Откройте двери в новое будущее с нами</p>
                            <BtnBeigie>Подробнее</BtnBeigie>
                        </div>
                    </div>
                </div>
                <div className={`bg-[url('./assets/images/home/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
                    <div className='container max-w-[1480px] flex items-end pb-[70px] h-[800px]'>
                        <div className='flex flex-col max-w-[323px] w-full md:max-w-[716px] font-Jost'>
                            <h1 className='heading-1 font-Jost text-white mb-2 sm:mb-3'>Найдите идеальное место для жизни</h1>
                            <p className='content text-white/80 mb-[30px] sm:mb-10'>Откройте двери в новое будущее с нами</p>
                            <BtnBeigie>Подробнее</BtnBeigie>
                        </div>
                    </div>
                </div>
                <div className={`bg-[url('./assets/images/home/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
                    <div className='container max-w-[1480px] flex items-end pb-[70px] h-[800px]'>
                        <div className='flex flex-col max-w-[323px] w-full md:max-w-[716px] font-Jost'>
                            <h1 className='heading-1 font-Jost text-white mb-2 sm:mb-3'>Найдите идеальное место для жизни</h1>
                            <p className='content text-white/80 mb-[30px] sm:mb-10'>Откройте двери в новое будущее с нами</p>
                            <BtnBeigie>Подробнее</BtnBeigie>
                        </div>
                    </div>
                </div>
                <div className={`bg-[url('./assets/images/home/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
                    <div className='container max-w-[1480px] flex items-end pb-[70px] h-[800px]'>
                        <div className='flex flex-col max-w-[323px] w-full md:max-w-[716px] font-Jost'>
                            <h1 className='heading-1 font-Jost text-white mb-2 sm:mb-3'>Найдите идеальное место для жизни</h1>
                            <p className='content text-white/80 mb-[30px] sm:mb-10'>Откройте двери в новое будущее с нами</p>
                            <BtnBeigie>Подробнее</BtnBeigie>
                        </div>
                    </div>
                </div>
                <div className={`bg-[url('./assets/images/home/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
                    <div className='container max-w-[1480px] flex items-end pb-[70px] h-[800px]'>
                        <div className='flex flex-col max-w-[323px] w-full md:max-w-[716px] font-Jost'>
                            <h1 className='heading-1 font-Jost text-white mb-2 sm:mb-3'>Найдите идеальное место для жизни</h1>
                            <p className='content text-white/80 mb-[30px] sm:mb-10'>Откройте двери в новое будущее с нами</p>
                            <BtnBeigie>Подробнее</BtnBeigie>
                        </div>
                    </div>
                </div>
                <div className={`bg-[url('./assets/images/home/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
                    <div className='container max-w-[1480px] flex items-end pb-[70px] h-[800px]'>
                        <div className='flex flex-col max-w-[323px] w-full md:max-w-[716px] font-Jost'>
                            <h1 className='heading-1 font-Jost text-white mb-2 sm:mb-3'>Найдите идеальное место для жизни</h1>
                            <p className='content text-white/80 mb-[30px] sm:mb-10'>Откройте двери в новое будущее с нами</p>
                            <BtnBeigie>Подробнее</BtnBeigie>
                        </div>
                    </div>
                </div>
            </CustomSlider>
        </div>
    )
}

export default SettingSection