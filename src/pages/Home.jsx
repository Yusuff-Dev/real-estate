import BlogSection from "../components/homePage/BlogSection"
import Hero from "../components/homePage/Hero"
import AboutSection from "../components/homePage/AboutSection"
import InvestmentsSection from '../components/homePage/InvestmentsSection'
import PropertyManag from '../components/homePage/PropertyManag'
import WhyUs from '../components/homePage/WhyUs'
import MortageSection from '../components/homePage/MortageSection'
import ContactUs from '../components/homePage/ContactUs'
import SettingSection from "../components/homePage/SettingSection"

function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

       <section className="py-[180px] sm:py-[200px] md:py-[250px] bg-white">
        <AboutSection/>
      </section>

      <section className="bg-blue py-[30px] sm:py-[50px] md:py-[80px]">
        <InvestmentsSection/>
      </section>

      <section className="py-[180px] sm:py-[200px] md:py-[250px]">
       <PropertyManag/>
      </section>

      <section>
        <WhyUs/>
      </section>

      <section className="py-[180px] sm:py-[200px] md:py-[250px]">
        <SettingSection/>
      </section>

      <section className="py-[180px] xsm:py-[200px] md:py-[250px]">
        <MortageSection/>
      </section>

      <section>
        <ContactUs/>
      </section>

      <section className="py-[180px] xsm:py-[200px] md:py-[250px]">
        <BlogSection />
      </section>
    </>
  )
}

export default Home

