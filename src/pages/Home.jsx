import Tabs from "../components/Tabs/Tabs"
import Tab from "../components/Tabs/Tab"
import BtnBeigie from '../UI/BtnBeigie'
import slider20 from '../assets/images/slider2.0.webp'
import h3 from '../assets/images/h3.webp'
import h4 from '../assets/images/h4.webp'
import why1 from '../assets/images/why.png'
import why2 from '../assets/images/why2.png'
import why3 from '../assets/images/why3.png'
import why4 from '../assets/images/why4.png'
import why5 from '../assets/images/why5.png'
import CustomSlider from "../components/slider/CustomSlider";

function Home() {
  return (
    <>
      <section>
        <CustomSlider navigationStyles={"bottom-[340px] left-4 xsm:left-[calc(100%-20px)] xsm:-translate-x-full xsm:bottom-[75px] sm:bottom-[70px] fx:left-[calc(100%-240px)]"}>
          <div className={`bg-[url('./assets/images/hero.webp')] bg-cover bg-no-repeat bg-center darken`}>
            <div className='container max-w-[1480px] flex items-end pt-[375px] pb-[70px]'>
              <div className='flex flex-col md:max-w-[716px] font-Jost'>
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

      <section className="py-[180px] sm:py-[200px] md:py-[250px]">
        <div className="container max-w-[1480px] font-Jost">
          <h2 className="heading-2 max-w-[720px] mb-10 sm:mb-[50px] break-words">
            Что входит в услугу управления недвижимостью
          </h2>

          <div className="text-black accent">
            <ul className="grow grid grid-cols-1 md:grid-cols-2 break-words border-stroke">
              <li className="flex items-center gap-4 py-10 border-t md:border-r">
                <div>
                  <div className="w-[30px] h-[30px] rounded-full bg-beigie-100 flex items-center justify-center">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 5L4.25 8L10.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p>Проверка арендаторов (кредитная история, рекомендации)</p>
              </li>
              <li className="flex items-center gap-4 py-10 border-t md:px-5">
                <div>
                  <div className="w-[30px] h-[30px] rounded-full bg-beigie-100 flex items-center justify-center">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 5L4.25 8L10.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p>Подготовка и подписание договоров аренды</p>
              </li>
              <li className="flex items-center gap-4 py-10 border-t md:border-r">
                <div>
                  <div className="w-[30px] h-[30px] rounded-full bg-beigie-100 flex items-center justify-center">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 5L4.25 8L10.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p>Сбор арендной платы</p>
              </li>
              <li className="flex items-center gap-4 py-10 border-t md:px-5">
                <div>
                  <div className="w-[30px] h-[30px] rounded-full bg-beigie-100 flex items-center justify-center">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 5L4.25 8L10.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p>Обработка запросов и жалоб арендаторов</p>
              </li>
              <li className="flex items-center gap-4 py-10 border-t md:border-r">
                <div>
                  <div className="w-[30px] h-[30px] rounded-full bg-beigie-100 flex items-center justify-center">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 5L4.25 8L10.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p>Контроль соблюдения условий аренды</p>
              </li>
              <li className="flex items-center gap-4 py-10 border-t md:px-5">
                <div>
                  <div className="w-[30px] h-[30px] rounded-full bg-beigie-100 flex items-center justify-center">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 5L4.25 8L10.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p>Проверка арендаторов (кредитная история, рекомендации)</p>
              </li>
              <li className="flex items-center gap-4 py-10 border-t md:border-r">
                <div>
                  <div className="w-[30px] h-[30px] rounded-full bg-beigie-100 flex items-center justify-center">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 5L4.25 8L10.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p>Подготовка и подписание договоров аренды</p>
              </li>
              <li className="flex items-center gap-4 py-10 border-t md:px-5 md:border-b">
                <div>
                  <div className="w-[30px] h-[30px] rounded-full bg-beigie-100 flex items-center justify-center">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 5L4.25 8L10.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p>Сбор арендной платы</p>
              </li>
              <li className="flex items-center gap-4 py-10 border-t md:border-r">
                <div>
                  <div className="w-[30px] h-[30px] rounded-full bg-beigie-100 flex items-center justify-center">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 5L4.25 8L10.75 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p>Обработка запросов и жалоб арендаторов</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-[1480px]">
          <h2 className="heading-2 font-Jost text-balck mb-[25px] sm:mb-10">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 break-all">

            <div className="w-full border border-stroke py-[35px] md:py-[90px] px-4 md:px-[30px] text-black font-Jost sm:-order-2 md:-order-10">
              <h4 className="heading-4 font-Jost mb-2 sm:mb-5">Опыт и профессионализм</h4>
              <p className="content">Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
            </div>

            <div className="sm:-order-2 md:-order-9">
              <img src={why1} alt="why 1 image" className="block w-full h-full object-cover" />
            </div>

            <div className="w-full border border-stroke py-[35px] md:py-[90px] px-4 md:px-[30px] text-black font-Jost md:-order-8">
              <h4 className="heading-4 font-Jost mb-2 sm:mb-5">Прозрачность и доверие</h4>
              <p className="content">Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами</p>
            </div>

            <div className="sm:-order-1 md:-order-7">
              <img src={why2} alt="why 2 image" className="block w-full h-full object-cover" />
            </div>

            <div className="w-full border border-stroke py-[35px] md:py-[90px] px-4 md:px-[30px] text-black font-Jost md:-order-6">
              <h4 className="heading-4 font-Jost mb-2 sm:mb-5">Высокий уровень обслуживания</h4>
              <p className="content">Мы всегда на связи, чтобы помочь вам в любое время</p>
            </div>

            <div className="md:-order-5">
              <img src={why3} alt="why 3 image" className="block w-full h-full object-cover" />
            </div>

            <div className="w-full border border-stroke py-[35px] md:py-[90px] px-4 md:px-[30px] text-black font-Jost sm:order-4 md:-order-4">
              <h4 className="heading-4 font-Jost mb-2 sm:mb-5">Индивидуальный подход</h4>
              <p className="content">Мы разрабатываем персонализированные решения, учитывая уникальные потребности каждого клиента</p>
            </div>

            <div className="sm:order-3 md:order-0">
              <img src={why4} alt="why 4 image" className="block w-full h-full object-cover" />
            </div>

            <div className="w-full border border-stroke py-[35px] md:py-[90px] px-4 md:px-[30px] text-black font-Jost sm:order-5 md:order-">
              <h4 className="heading-4 font-Jost mb-2 sm:mb-5">Комплексное обслуживание</h4>
              <p className="content">Полный спектр услуг, включающий аренду, куплю-продажу, управление и инвестиции в недвижимость.</p>
            </div>

            <div className="sm:order-5">
              <img src={why5} alt="why 5 image" className="block md:hidden w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[180px] xsm:py-[200px] md:py-[250px]">
        <div className="container max-w-[1480px] font-Jost">
          <h2 className="heading-2 font-Jost text-black mb-[25px] md:mb-10">Рассчитайте ипотеку</h2>
          
          <div className="drop-shadow-[0_30px_30px_#0F11120D] bg-white py-5 px-5 sm:flex gap-[30px]">

            <div className="flex flex-col gap-5 font-Jost text-black-60 content grow">
              <div className="flex flex-col md:flex-row gap-5 w-full">
                <div className="w-full">
                  <label className="block label">Стоимость недвижимости (у.е.)</label>
                  <input
                    type="text"
                    // value={propertyValue}
                    // onChange={(e) => setPropertyValue(e.target.value)}
                    className="border border-stroke p-2 w-full mt-1 outline-none"
                    placeholder="Введите стоимость"
                  />
                </div>

                <div className="w-full">
                  <label className="block label">Первоначальный взнос (у.е.)</label>
                  <input
                    type="text"
                    // value={downPayment}
                    // onChange={(e) => setDownPayment(e.target.value)}
                    className="border border-stroke p-2 w-full mt-1 outline-none"
                    placeholder="Введите размер взноса"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5 -w-full">
                <div className="w-full">
                  <label className="block label">Срок в годах</label>
                  <input
                    type="text"
                    // value={termYears}
                    // onChange={(e) => setTermYears(e.target.value)}
                    className="border border-stroke p-2 w-full mt-1 outline-none"
                    placeholder="Введите срок"
                  />
                </div>

                <div className="w-full">
                  <label className="block label">Ставка (%)</label>
                  <input
                    type="text"
                    // value={interestRate}
                    // onChange={(e) => setInterestRate(e.target.value)}
                    className="border border-stroke p-2 w-full mt-1 outline-none"
                    placeholder="Введите размер ставки"
                  />
                </div>
              </div>
              
              <div className="mt-[30px]">
              <BtnBeigie>Рассчитать</BtnBeigie>
              </div>
            </div>

            <div className="flex flex-col gap-5 font-Jost content text-[#B3B3B3] border-t sm:border-l sm:border-t-0 border-stroke mt-[30px] sm:mt-0 py-[30px] sm:py-0 sm:px-10">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="">
                  Ежемесячный платёж:
                  <p className="heading-4 text-black">4 410 у.е.</p>
                </div>
                <div className="">
                  Сумма кредита:
                  <p className="heading-4 text-black">200 000 у.е.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="">
                  Процентная ставка:
                  <p className="heading-4 text-black">24%</p>
                </div>
                <div className="">
                  Дата последнего платежа:
                  <p className="heading-4 text-black">28 июля 2034 г</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

