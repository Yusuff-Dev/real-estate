import Articles from "../components/aboutPage/Articles"
import PopularArticles from "../components/aboutPage/PopularArticles"

function About() {
  return (
    <div className='container max-w-[1480px]'>
      <h1 className='heading-1 capitalize'>{location.pathname.slice(1)} page</h1>
      <p className='heading-3'>Coming soon...</p>
    </div>
  )
}

export default About