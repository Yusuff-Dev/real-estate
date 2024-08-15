import Tabs from "../components/Tabs/Tabs"
import Tab from "../components/Tabs/Tab"
import BtnBeigie from '../UI/BtnBeigie'
import slider20 from '../assets/images/slider2.0.webp'
import h3 from '../assets/images/h3.webp'
import h4 from '../assets/images/h4.webp'
import CustomSlider from "../components/slider/CustomSlider";

function Home() {
  return (
    <>
      <section>
        <CustomSlider navigationStyles={"bottom-[340px] left-4 sm:left-[calc(100%-20px)] sm:-translate-x-full sm:bottom-[75px] md:bottom-[70px] fx:left-[calc(100%-240px)]"}>
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

      <section className="py-[180px] sm:py-[200px] md:py-[250px] bg-white">
        <div className="container max-w-[1480px]">
          <div className="flex flex-col md:flex-row gap-y-10 gap-5">
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

          <div className="mt-[35px] sm:mt-10 md:mt-[50px]">
            <CustomSlider navigationStyles={"top-[30px] left-[30px]"}>
              <div className="max-h-screen">
                <img src={slider20} alt="slider image" className="block w-full h-auto object-cover" />
              </div>
              <div className="border max-h-screen">
                <img src={slider20} alt="slider image" className="block w-full h-auto object-cover" />
              </div>
            </CustomSlider>
          </div>
        </div>
      </section>

      <section className="bg-blue py-[30px] sm:py-[50px] md:py-[80px]">
        <div className="container max-w-[1480px]">
          <div className="font-Jost text-black grid grid-cols-1 gap-4 md:grid-cols-[minmax(200px,710px)_minmax(0,487px)] md:justify-between">

            <h2 className="heading-2 break-words md:-order-1 w-full">Инвестиции в недвижимость в Дубае</h2>

            <div className="relative flex items-center gap-3 h-[240px] sm:[350px] md:h-auto  sm:order-1 md:-order-1 md:w-full row-span-2">
              <div className="h-full grow">
                <img src={h3} alt="building 3" className="block h-full object-cover w-full" />
              </div>
              <div className="grow h-full md:w-[227px] md:h-[285px] md:absolute -bottom-20 -left-[100px]">
                <img src={h4} alt="building 4" className="block h-full object-cover w-full" />
              </div>
            </div>

            <div className="content flex flex-col gap-4 z-10">
              <p>
                Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода и увеличения капитала
              </p>
              <p>
                Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и их реализации.
              </p>
              <p>
                Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое качество обслуживания и надежность.
              </p>
              <p>
                Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её сохранность и стабильный доход. Мы берем на себя все аспекты управления, включая подбор и проверку арендаторов, техническое обслуживание, финансовую отчетность и юридическую поддержку.
              </p>
            </div>
          </div>
          <div className="mt-[30px] sm:mt-[50px] md:mt-10">
            <BtnBeigie>Подробнее</BtnBeigie>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

