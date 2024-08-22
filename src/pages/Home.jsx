import BlogSection from "../components/homePage/BlogSection"
import Hero from "../components/homePage/Hero"
import AboutSection from "../components/homePage/AboutSection"
import InvestmentsSection from '../components/homePage/InvestmentsSection'
import PropertyManag from '../components/homePage/PropertyManag'
import WhyUs from '../components/homePage/WhyUs'
import MortageSection from '../components/homePage/MortageSection'
import ContactUs from '../components/homePage/ContactUs'
import NewBuildingsSection from "../components/homePage/NewBuildingsSection"

function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

       <section className="py-[120px] sm:py-[150px] md:py-[200px]">
        <AboutSection/>
      </section>

      <section className="bg-blue py-[30px] sm:py-[50px] md:py-[80px]">
        <InvestmentsSection/>
      </section>

      <section className="py-[120px] sm:py-[150px] md:py-[200px]">
       <PropertyManag/>
      </section>

      <section>
        <WhyUs/>
      </section>

      <section className="py-[120px] sm:py-[150px] md:py-[200px]">
        <NewBuildingsSection/>
      </section>

      <section>
        <MortageSection/>
      </section>

      <section>
        <ContactUs/>
      </section>

      <section className="py-[120px] sm:py-[150px] md:py-[200px]">
        <BlogSection />
      </section>
    </>
  )
}

export default Home

