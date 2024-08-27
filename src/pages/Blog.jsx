import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import data from '../utils/aboutData'

function Blog() {
  const params = useParams();
  const id = +params.blogId;

  const blog = useMemo(() => data?.find((f) => f.id === id), [id, data]);

  return (
    <div className='container max-w-[954px]'>
      <div className='flex items-center gap-2 body-20'>
        <div className="text-beigie-100 pr-5">{blog.data}</div>
        <div className='flex items-center gap-2 border-l border-stroke pl-5'>
          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.275 12.796C1.425 11.692 1 11.139 1 9.5C1 7.86 1.425 7.309 2.275 6.204C3.972 4 6.818 1.5 11 1.5C15.182 1.5 18.028 4 19.725 6.204C20.575 7.31 21 7.861 21 9.5C21 11.14 20.575 11.691 19.725 12.796C18.028 15 15.182 17.5 11 17.5C6.818 17.5 3.972 15 2.275 12.796Z" stroke="#B3B3B3" strokeWidth="1.5" />
            <path d="M14 9.5C14 10.2956 13.6839 11.0587 13.1213 11.6213C12.5587 12.1839 11.7956 12.5 11 12.5C10.2044 12.5 9.44129 12.1839 8.87868 11.6213C8.31607 11.0587 8 10.2956 8 9.5C8 8.70435 8.31607 7.94129 8.87868 7.37868C9.44129 6.81607 10.2044 6.5 11 6.5C11.7956 6.5 12.5587 6.81607 13.1213 7.37868C13.6839 7.94129 14 8.70435 14 9.5Z" stroke="#B3B3B3" strokeWidth="1.5" />
          </svg>
          <span className='text-[#B3B3B3]'>{blog.view}</span>
        </div>
      </div>

      <div>
        <h2 className='heading-2 capitalize text-black mb-[25px] sm:mb-10'>{blog.title} page</h2>
        <img src={blog.img} alt={blog.title} />

        <p className='mt-[25px] sm:mt-10 content text-black'>В последние годы современные жилые комплексы становятся не просто местом для проживания, а настоящими центрами удобства и комфорта. Архитекторы и девелоперы все больше внимания уделяют созданию условий, которые способствуют улучшению качества жизни и удовлетворению потребностей жителей.</p>
      </div>
    </div>
  )
}

export default Blog