import BtnBeigie from '../../UI/BtnBeigie'
import h3 from '../../assets/images/home/h3.webp'
import h4 from '../../assets/images/home/h4.webp'

function InvestmentsSection() {
  return (
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
  )
}

export default InvestmentsSection