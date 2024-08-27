import React from 'react'
import PopularArticles from '../components/aboutPage/PopularArticles'
import Articles from '../components/aboutPage/Articles'

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