import MoreDetails from '../../UI/MoreDetails'
import article1 from '../../assets/images/about/article1.webp'
import article2 from '../../assets/images/about/article2.webp'
import article3 from '../../assets/images/about/article3.webp'

function PopularArticles() {
    return (
        <div className='container max-w-[1480px]'>
            <h2 className='heading-2 text-black mb-[25px] sm:mb-10 md:mb-[30px]'>Популярные статьи</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-Jost'>
                <div className='sm:col-span-2 md:row-span-2 relative flex'>
                    <img src={article1} alt="article 1" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black/40 text-white p-3 sm:p-[30px] flex flex-col justify-between'>
                        <div className='flex items-center justify-between'>
                            <p>01.08.2024</p>
                            <div className='flex items-center gap-2'>
                                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.275 12.796C1.425 11.692 1 11.139 1 9.5C1 7.86 1.425 7.309 2.275 6.204C3.972 4 6.818 1.5 11 1.5C15.182 1.5 18.028 4 19.725 6.204C20.575 7.31 21 7.861 21 9.5C21 11.14 20.575 11.691 19.725 12.796C18.028 15 15.182 17.5 11 17.5C6.818 17.5 3.972 15 2.275 12.796Z" stroke="white" strokeWidth="1.5" />
                                    <path d="M14 9.5C14 10.2956 13.6839 11.0587 13.1213 11.6213C12.5587 12.1839 11.7956 12.5 11 12.5C10.2044 12.5 9.44129 12.1839 8.87868 11.6213C8.31607 11.0587 8 10.2956 8 9.5C8 8.70435 8.31607 7.94129 8.87868 7.37868C9.44129 6.81607 10.2044 6.5 11 6.5C11.7956 6.5 12.5587 6.81607 13.1213 7.37868C13.6839 7.94129 14 8.70435 14 9.5Z" stroke="white" strokeWidth="1.5" />
                                </svg>
                                <span>235</span>
                            </div>
                        </div>

                        <div>
                            <h3 className='subtitle-20 sm:heading-3 sm:text-[30px] sm:leading-[43.35px] sm:font-semibold md:font-[35px] md:leading-[50.58px] mb-1 sm:mb-[10px]'>Современные жилые комплексы предлагают расширенные удобства для жителей</h3>
                            <MoreDetails color={'white'} />
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src={article2} alt="article 2" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black/40 text-white p-3 sm:p-[30px] flex flex-col justify-between'>
                        <div className='flex items-center justify-between'>
                            <p>31.07.2024</p>
                            <div className='flex items-center gap-2'>
                                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.275 12.796C1.425 11.692 1 11.139 1 9.5C1 7.86 1.425 7.309 2.275 6.204C3.972 4 6.818 1.5 11 1.5C15.182 1.5 18.028 4 19.725 6.204C20.575 7.31 21 7.861 21 9.5C21 11.14 20.575 11.691 19.725 12.796C18.028 15 15.182 17.5 11 17.5C6.818 17.5 3.972 15 2.275 12.796Z" stroke="white" strokeWidth="1.5" />
                                    <path d="M14 9.5C14 10.2956 13.6839 11.0587 13.1213 11.6213C12.5587 12.1839 11.7956 12.5 11 12.5C10.2044 12.5 9.44129 12.1839 8.87868 11.6213C8.31607 11.0587 8 10.2956 8 9.5C8 8.70435 8.31607 7.94129 8.87868 7.37868C9.44129 6.81607 10.2044 6.5 11 6.5C11.7956 6.5 12.5587 6.81607 13.1213 7.37868C13.6839 7.94129 14 8.70435 14 9.5Z" stroke="white" strokeWidth="1.5" />
                                </svg>
                                <span>899</span>
                            </div>
                        </div>

                        <div>
                            <h3 className='mb-1 sm:mb-[10px] subtitle-20 sm:leading-[30px] sm:text-[22px] md:leading-[36.13px] md:text-[25px]'>Рынок новостроек демонстрирует стабильный рост</h3>
                            <MoreDetails color={'white'} />
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src={article3} alt="article 3" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black/40 text-white p-3 sm:p-[30px] flex flex-col justify-between'>
                        <div className='flex items-center justify-between'>
                            <p>30.07.2024</p>
                            <div className='flex items-center gap-2'>
                                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.275 12.796C1.425 11.692 1 11.139 1 9.5C1 7.86 1.425 7.309 2.275 6.204C3.972 4 6.818 1.5 11 1.5C15.182 1.5 18.028 4 19.725 6.204C20.575 7.31 21 7.861 21 9.5C21 11.14 20.575 11.691 19.725 12.796C18.028 15 15.182 17.5 11 17.5C6.818 17.5 3.972 15 2.275 12.796Z" stroke="white" strokeWidth="1.5" />
                                    <path d="M14 9.5C14 10.2956 13.6839 11.0587 13.1213 11.6213C12.5587 12.1839 11.7956 12.5 11 12.5C10.2044 12.5 9.44129 12.1839 8.87868 11.6213C8.31607 11.0587 8 10.2956 8 9.5C8 8.70435 8.31607 7.94129 8.87868 7.37868C9.44129 6.81607 10.2044 6.5 11 6.5C11.7956 6.5 12.5587 6.81607 13.1213 7.37868C13.6839 7.94129 14 8.70435 14 9.5Z" stroke="white" strokeWidth="1.5" />
                                </svg>
                                <span>500</span>
                            </div>
                        </div>

                        <div>
                        <h3 className='mb-1 sm:mb-[10px] subtitle-20 sm:leading-[30px] sm:text-[22px] md:leading-[36.13px] md:text-[25px]'>Цены на квартиры в новостройках продолжают расти</h3>
                            <MoreDetails color={'white'} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PopularArticles