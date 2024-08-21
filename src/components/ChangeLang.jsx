function ChangeLang() {
    return (
        <div className="relative">
            <select className="border border-stroke h-10 md:h-[50px] rounded-full outline-none px-4 font-Jost content text-black appearance-none w-20">
                <option value="ru">Ru</option>
                <option value="uz">Uz</option>
            </select>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none">
                <svg className="w-[20px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 8L10.5 13L15.5 8" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default ChangeLang