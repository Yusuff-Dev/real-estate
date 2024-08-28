import blog1 from '../../assets/images/home/blog1.webp'
import blog2 from '../../assets/images/home/blog2.webp'
import blog3 from '../../assets/images/home/blog3.webp'
import BtnBeigie from '../../UI/BtnBeigie'

function BlogSection({title}) {
  const data = [
    {
      id: 1,
      img: blog1,
      subtitle: 'Тенденции и прогнозы рынка недвижимости на 2024 год',
      data: '31.07.2024',
      view: 899,
    },
    {
      id: 2,
      img: blog2,
      subtitle: 'Лучшие районы для инвестиций в недвижимость',
      data: '31.07.2024',
      view: 899,
    },
    {
      id: 3,
      img: blog3,
      subtitle: 'Топ-10 новых жилых комплексов',
      data: '31.07.2024',
      view: 899,
    },

    {
      id: 4,
      img: blog1,
      subtitle: 'Элитные апартаменты становятся всёболее популярными',
      data: '31.07.2024',
      view: 899,
    }
  ]
  return (
    <>
      <div className='container max-w-[1480px]'>
        <h2 className='text-black heading-2 font-Jost mb-[30px]'>{title}</h2>
        <div className='grid md:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between'>
          {
            data?.map(item => {
              return <div key={item.id} className='flex flex-col gap-5'>
                <div className='relative'>
                  <img src={item.img} alt="blog 1" className='block object-cover w-full' />
                  <div className='absolute bottom-0 flex w-full justify-between p-5 text-white body-20 font-Jost'>
                    <p>{item.data}</p>
                    <p>{item.view}</p>
                  </div>
                </div>
                <p className='subtitle-24'>{item.subtitle}</p>

                <button className='flex items-center gap-1 btn outline-none bg-transparent text-beigie-100'>Подробнее <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.46875 1.375L14.0937 7L8.46875 12.625M13.3125 7L1.90625 7" stroke="#E1AF93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </button>
              </div>
            })
          }
        </div>

        <div className='hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between'>
          {
            data?.slice(0, 3).map(item => {
              return <div key={item.id} className='flex flex-col gap-5'>
                <div className='relative'>
                  <img src={item.img} alt="blog 1" className='block object-cover w-full' />
                  <div className='absolute bottom-0 flex w-full justify-between p-5 text-white body-20 font-Jost'>
                    <p>{item.data}</p>
                    <p>{item.view}</p>
                  </div>
                </div>
                <p className='subtitle-24'>{item.subtitle}</p>

                <button className='flex items-center gap-1 btn outline-none bg-transparent text-beigie-100'>Подробнее <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.46875 1.375L14.0937 7L8.46875 12.625M13.3125 7L1.90625 7" stroke="#E1AF93" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </button>
              </div>
            })
          }
        </div>

        <div className='flex justify-center mt-[60px] '>
          <BtnBeigie>Все статьи</BtnBeigie>
        </div>
      </div>
    </>
  )
}

export default BlogSection