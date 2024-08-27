import { useState } from "react";
import data from "../../utils/aboutData";
import PaginationComponent from "../PaginationComponent";

function Articles() {
    const [items, setItems] = useState(data);
    const [filterBy, setFilterBy] = useState(['Все', 'О недвижимости', 'Инвесторам', 'Покупка недвижимости', 'Обзоры районов']);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const totalItems = 100;

    const totalPages = Math.ceil(totalItems / pageSize);

    if (!items || items.length === 0) return null;

    return (
        <div className='container max-w-[1480px]'>
            <h2 className="heading-2 text-black mb-[25px] sm:mb-10 md:mb-[30px]">Статьи</h2>

            <div className='mb-10 flex items-center justify-between gap-x-3 gap-y-[30px] sm:gap-y-10 flex-wrap'>
                <div className="flex items-center gap-3 flex-wrap">
                    {
                        filterBy.map((item, index) => {
                            return <button key={index} className="hover:text-white hover:bg-beigie-100 hover:border-beigie-100 duration-300 border border-stroke text-black content py-[10px] px-2 sm:py-3 sm:px-[30px]">{item}</button>
                        })
                    }
                </div>

                <div className='relative ml-auto sm:ml-0 group'>
                    <button className='flex items-center gap-2 font-Jost content text-black capitalize group-hover:text-beigie-100 group duration-300 py-2'>
                        Сортировать
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='group-hover:fill-beigie-100 duration-300' d="M3.89336 3.80793L1.60132 6.09998C1.44111 6.25426 1.22678 6.33961 1.00433 6.33768C0.781465 6.33574 0.568275 6.24635 0.410678 6.08875C0.253081 5.93116 0.163688 5.71796 0.161751 5.4951C0.159818 5.27265 0.245169 5.05832 0.399455 4.89811L4.39848 0.899082C4.39849 0.899077 4.39849 0.899072 4.3985 0.899066C4.55789 0.739726 4.77405 0.650214 4.99943 0.650214C5.22481 0.650214 5.44097 0.739726 5.60036 0.899066C5.60037 0.899072 5.60038 0.899077 5.60038 0.899082L9.5994 4.89811C9.75369 5.05832 9.83904 5.27265 9.83711 5.4951C9.83517 5.71796 9.74578 5.93116 9.58818 6.08875C9.43059 6.24635 9.21739 6.33574 8.99453 6.33768C8.77207 6.33961 8.55774 6.25426 8.39752 6.09996L6.1055 3.80793L5.84943 3.55187V3.914V15.5C5.84943 15.7254 5.75988 15.9416 5.60047 16.101C5.44107 16.2604 5.22486 16.35 4.99943 16.35C4.774 16.35 4.5578 16.2604 4.39839 16.101C4.23898 15.9416 4.14943 15.7254 4.14943 15.5V3.914V3.55187L3.89336 3.80793ZM13.8934 13.1921L14.1494 13.4481V13.086V1.5C14.1494 1.27457 14.239 1.05837 14.3984 0.898959C14.5578 0.739554 14.774 0.65 14.9994 0.65C15.2249 0.65 15.4411 0.739554 15.6005 0.898959C15.7599 1.05837 15.8494 1.27457 15.8494 1.5V13.086V13.4481L16.1055 13.1921L18.3966 10.9009C18.3969 10.9006 18.3972 10.9003 18.3975 10.9C18.5578 10.7457 18.7721 10.6604 18.9945 10.6623C19.2174 10.6643 19.4306 10.7537 19.5882 10.9112C19.7458 11.0688 19.8352 11.282 19.8371 11.5049C19.839 11.7273 19.7537 11.9417 19.5994 12.1019C19.5991 12.1022 19.5988 12.1025 19.5985 12.1028L15.6004 16.1009C15.441 16.2603 15.2248 16.3498 14.9994 16.3498C14.774 16.3498 14.5579 16.2603 14.3985 16.1009L10.3995 12.1019C10.2452 11.9417 10.1598 11.7274 10.1618 11.5049C10.1637 11.282 10.2531 11.0688 10.4107 10.9112C10.5683 10.7537 10.7815 10.6643 11.0043 10.6623C11.2268 10.6604 11.4411 10.7457 11.6013 10.9L13.8934 13.1921Z" fill="#333333" stroke="white" strokeWidth="0.3" />
                        </svg>
                    </button>

                    <div className='flex flex-col w-max text-start absolute top-full right-0 sm:left-0 sm:right-auto bg-white h-0 overflow-hidden group-hover:h-auto duration-300 z-10'>
                        <button
                            className='font-Jost body-18 text-black hover:text-beigie-100 hover:bg-beigie-100/10 duration-300 py-[10px] px-4 border border-stroke text-start'>
                            По дате: сначала новые
                        </button>
                        <button
                            className='font-Jost body-18 text-black hover:text-beigie-100 hover:bg-beigie-100/10 duration-300 py-[10px] px-4 border border-stroke text-start'>
                            По дате: сначала старые
                        </button>
                        <button
                            className='font-Jost body-18 text-black hover:text-beigie-100 hover:bg-beigie-100/10 duration-300 py-[10px] px-4 border border-stroke text-start'>
                            По популярности
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-[30px] sm:gap-x-4 sm:gap-y-10 md:gap-x-5 md:gap-y-[50px]">
                {
                    items?.slice(3).map((item) => {
                        return (
                            <div key={item.id} className={`flex flex-col gap-5 typ sm:[&:nth-child(3n+5)]:col-span-2 md:col-span-2 md:[&:nth-child(4)]:col-span-3 md:[&:nth-child(5n)]:col-span-3 md:[&:nth-child(9)]:col-span-3 md:[&:nth-child(0)]:col-span-3`}>
                                <div className='relative h-[300px]'>
                                    <img src={item.img} alt="article 2" className="block w-full h-full object-cover object-center" />
                                    <div className='absolute top-0 left-0 w-full h-full text-white p-3 sm:p-[20px] flex flex-col justify-end bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.12)_71.26%,_rgba(0,_0,_0,_0.4)_100%)] '>
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
                                    </div>

                                </div>

                                <div className="grow flex flex-col justify-between">
                                    <h3 className='mb-1 sm:mb-[10px] subtitle-20 sm:leading-[30px] sm:text-[22px] md:leading-[36.13px] md:text-[25px]'>{item.title}
                                    </h3>

                                    <div>
                                        <button className={`flex items-center gap-1 btn-link text-beigie-100`}>
                                            Подробнее
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className={`stroke-beigie-100`} d="M8.46875 1.375L14.0937 7L8.46875 12.625M13.3125 7L1.90625 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="mt-[60px] sm:mt-20 md:mt-[100px]">
                <PaginationComponent totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize} />
            </div>
        </div>
    )
}

export default Articles

