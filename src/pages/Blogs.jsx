import React from 'react'
import PopularArticles from '../components/blogPage/PopularArticles'
import Articles from '../components/blogPage/Articles'

function Blogs() {
  return (
    <>
    <section>
      <PopularArticles/>
    </section>
    <section className="py-[120px] sm:py-[150px] md:py-[200px]">
      <Articles/>
    </section>
    </>
  )
}

export default Blogs