import CTASection from "../components/home/CTASection";
import FeaturedPackages from "../components/home/FeaturedPackages";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import PopularDestinations from "../components/home/PopularDestinations";
import SearchBox from "../components/home/SearchBox";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import TrustStats from "../components/home/TrustStats";
import VisaSection from "../components/home/VisaSection";
import WhyChooseUs from "../components/home/WhyChooseUs";


export default function Home() {
  return (
    <main>
      <Hero />
      <SearchBox />
      <TrustStats />
      <PopularDestinations />
      <FeaturedPackages />
      <Services />
      <WhyChooseUs />
      <VisaSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </main>
  );
}