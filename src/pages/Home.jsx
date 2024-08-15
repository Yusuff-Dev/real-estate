import Tabs from "../components/Tabs/Tabs"
import Tab from "../components/Tabs/Tab"
import BtnBeigie from '../UI/BtnBeigie'
import slider20 from '../assets/images/slider2.0.webp'
import CustomSlider from "../components/slider/CustomSlider";

function Home() {
  return (
    <main>
      <section>
        <CustomSlider b={"70"} l={"70"}>
          <div className={`bg-[url('./assets/images/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
            <div className='container max-w-[1480px] flex justify-between content-start pb-[70px] min-h-[800px] flex-wrap-reverse gap-[30px]'>

              <div className='flex flex-col gap-5 max-w-[716px]'>
                <h1 className='heading-1 font-Jost text-white'>Найдите идеальное место для жизни</h1>
                <p className='text-white/80'>Откройте двери в новое будущее с нами</p>
                <div className='mt-10'>
                  <BtnBeigie>Подробнее</BtnBeigie>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-[url('./assets/images/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
            <div className='container max-w-[1480px] flex justify-between content-start pb-[70px] min-h-[800px] flex-wrap-reverse gap-[30px]'>

              <div className='flex flex-col gap-5 max-w-[716px]'>
                <h1 className='heading-1 font-Jost text-white'>Найдите идеальное место для жизни</h1>
                <p className='text-white/80'>Откройте двери в новое будущее с нами</p>
                <div className='mt-10'>
                  <BtnBeigie>Подробнее</BtnBeigie>
                </div>
              </div>
            </div>
          </div>
        </CustomSlider>
      </section>
      <section className="py-[250px] bg-white">
        <div className="container max-w-[1480px] flex flex-col md:flex-row gap-y-10 gap-5">
          <h2 className="heading-2 font-Jost text-black basis-1/2">О компании <p className="text-beigie-100">RMC DE LUXE</p></h2>

          {/* ======= tabs ======= */}
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
      </section>
    </main>
  )
}

export default Home

/*
<SwiperSlide className={`bg-[url('./assets/images/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
            <div className='container max-w-[1480px] flex justify-between content-start pb-[70px] min-h-[800px] flex-wrap-reverse gap-[30px]'>

              <div className='flex flex-col gap-5 max-w-[716px]'>
                <h1 className='heading-1 font-Jost text-white'>Найдите идеальное место для жизни</h1>
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

            </div>
          </SwiperSlide>
*/