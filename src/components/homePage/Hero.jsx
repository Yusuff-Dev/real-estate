import CustomSlider from '../slider/CustomSlider'
import BtnBeigie from '../../UI/BtnBeigie'

function Hero() {
    return (
        <>
            <CustomSlider navigationStyles={"bottom-[340px] left-4 xsm:bottom-[75px] xsm:left-[calc(100%-20px)] xsm:-translate-x-full fx:left-[calc(100%-240px)]"}>
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
            </CustomSlider>
        </>
    )
}

export default Hero