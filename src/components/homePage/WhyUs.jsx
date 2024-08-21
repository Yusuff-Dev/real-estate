import why1 from '../../assets/images/home/why1.webp'
import why2 from '../../assets/images/home/why2.webp'
import why3 from '../../assets/images/home/why3.webp'
import why4 from '../../assets/images/home/why4.webp'
import why5 from '../../assets/images/home/why5.webp'

function WhyUs() {
    return (
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
    )
}

export default WhyUs