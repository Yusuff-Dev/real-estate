import { useState } from 'react'
import data from '../../utils/aboutData'

const MoreDetails = <div>
    <button className={`flex items-center gap-1 text-[14px] sm:text-[20px] text-beigie-100 font-semibold`}>
        Подробнее
        <svg className='hidden sm:block' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`stroke-beigie-100`} d="M8.46875 1.375L14.0937 7L8.46875 12.625M13.3125 7L1.90625 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <svg className='sm:hidden' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='stroke-beigie-100' d="M6.375 1.5L10.875 6L6.375 10.5M10.25 6L1.125 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
</div>

function PopularArticles() {
    const [items, setItems] = useState(data);

    if (!items || items.length === 0) return null;

    const filteredItem = items.sort((a, b) => b.view - a.view).slice(0, 3).reverse();

    return (
        <div className='container max-w-[1480px]'>
            <h2 className='heading-2 text-black mb-[25px] sm:mb-10 md:mb-[30px]'>Популярные статьи</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5'>
                {
                    filteredItem?.map(item => {
                        return (
                            <div key={item.id} className='relative flex md:[&:nth-child(1)]:row-span-2 md:[&:nth-child(1)]:col-span-2 sm:[&:nth-child(1)]:col-span-2'>
                                <img src={item.img} alt={item.title} />

                                <div className='absolute top-0 left-0 w-full h-full bg-black/40 text-white p-3 sm:p-[30px] flex flex-col justify-between'>
                                    <div className='flex items-center justify-between'>
                                        <p>{item.data}</p>
                                        <div className='flex items-center gap-2'>
                                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.275 12.796C1.425 11.692 1 11.139 1 9.5C1 7.86 1.425 7.309 2.275 6.204C3.972 4 6.818 1.5 11 1.5C15.182 1.5 18.028 4 19.725 6.204C20.575 7.31 21 7.861 21 9.5C21 11.14 20.575 11.691 19.725 12.796C18.028 15 15.182 17.5 11 17.5C6.818 17.5 3.972 15 2.275 12.796Z" stroke="white" strokeWidth="1.5" />
                                                <path d="M14 9.5C14 10.2956 13.6839 11.0587 13.1213 11.6213C12.5587 12.1839 11.7956 12.5 11 12.5C10.2044 12.5 9.44129 12.1839 8.87868 11.6213C8.31607 11.0587 8 10.2956 8 9.5C8 8.70435 8.31607 7.94129 8.87868 7.37868C9.44129 6.81607 10.2044 6.5 11 6.5C11.7956 6.5 12.5587 6.81607 13.1213 7.37868C13.6839 7.94129 14 8.70435 14 9.5Z" stroke="white" strokeWidth="1.5" />
                                            </svg>
                                            <span>{item.view}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className={`text-[20px] leading-[26px] font-semibold sm:text-[22px] sm:leading-[30px] md:font-[25px] md:leading-[36.13px] mb-1 sm:mb-[10px] ${item.isActive ? 'sm:font-bold sm:text-[30px] sm:leading-[43.35px] md:text-[35px] md:leading-[50.58px]':""}`}>{item.title}</h3>
                                        {MoreDetails}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopularArticles