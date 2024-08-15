import Tabs from "../components/Tabs/Tabs"
import Tab from "../components/Tabs/Tab"
import BtnBeigie from '../UI/BtnBeigie'
import slider20 from '../assets/images/slider2.0.webp'
import CustomSlider from "../components/slider/CustomSlider";
import CustomNavigation from "../components/slider/CustomNavigation";

function Home() {
  return (
    <>
      <section>
        <CustomSlider navigationStyles={""}>
          <div className={`bg-[url('./assets/images/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
            <div className='container max-w-[1480px] flex items-end pt-[375px] pb-[70px]'>
              <div className='flex flex-col max-w-[323px] sm:max-w-[716px] font-Jost'>
                <h1 className='heading-1 font-Jost text-white mb-2 sm:mb-3'>Найдите идеальное место для жизни</h1>
                <p className='content text-white/80 mb-[30px] sm:mb-10'>Откройте двери в новое будущее с нами</p>
                <BtnBeigie>Подробнее</BtnBeigie>
              </div>
            </div>
          </div>
          <div className={`bg-[url('./assets/images/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
            <div className='container max-w-[1480px] flex items-end pt-[375px] pb-[70px]'>
              <div className='flex flex-col max-w-[323px] sm:max-w-[716px] font-Jost'>
                <h1 className='heading-1 font-Jost text-white mb-2 sm:mb-3'>Найдите идеальное место для жизни</h1>
                <p className='content text-white/80 mb-[30px] sm:mb-10'>Откройте двери в новое будущее с нами</p>
                <BtnBeigie>Подробнее</BtnBeigie>
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
    </>
  )
}

export default Home

