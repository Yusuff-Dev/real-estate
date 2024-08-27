import Articles from "../components/aboutPage/Articles"
import PopularArticles from "../components/aboutPage/PopularArticles"

function About() {
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

export default About