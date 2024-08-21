import React from 'react'
import Tabs from '../Tabs/Tabs'
import Tab from '../Tabs/Tab'
import CustomSlider from '../slider/CustomSlider'
import slider20 from '../../assets/images/home/slider2.0.webp'


function AboutSection() {
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
    )
}

export default AboutSection