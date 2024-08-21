import { useState } from 'react';
import BtnBeigie from '../../UI/BtnBeigie'

function MortageSection() {
    const [propertyValue, setPropertyValue] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [termYears, setTermYears] = useState('');
    const [interestRate, setInterestRate] = useState('');
    return (
        <div className="container max-w-[1480px] font-Jost">
            <h2 className="heading-2 font-Jost text-black mb-[25px] md:mb-10">Рассчитайте ипотеку</h2>

            <div className="drop-shadow-[0_30px_30px_#0F11120D] bg-white py-5 px-5 sm:flex gap-[30px]">

                <div className="flex flex-col gap-5 font-Jost text-black-60 content grow">
                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <div className="w-full">
                            <label className="block label">Стоимость недвижимости (у.е.)</label>
                            <input
                                type="text"
                                value={propertyValue}
                                onChange={(e) => setPropertyValue(e.target.value)}
                                className="border border-stroke p-2 w-full mt-1 outline-none"
                                placeholder="Введите стоимость"
                            />
                        </div>

                        <div className="w-full">
                            <label className="block label">Первоначальный взнос (у.е.)</label>
                            <input
                                type="text"
                                value={downPayment}
                                onChange={(e) => setDownPayment(e.target.value)}
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
                                value={termYears}
                                onChange={(e) => setTermYears(e.target.value)}
                                className="border border-stroke p-2 w-full mt-1 outline-none"
                                placeholder="Введите срок"
                            />
                        </div>

                        <div className="w-full">
                            <label className="block label">Ставка (%)</label>
                            <input
                                type="text"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
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
    )
}

export default MortageSection