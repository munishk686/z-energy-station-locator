import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import FuelUpdateSection from "../../components/FuelUpdateSection/FuelUpdateSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import FindZSection from "../../components/FindZSection/FindZSection";
import MakeMostOfZ from "../../components/MakeMostOfZ/MakeMostOfZ";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FuelUpdateSection />
        <ServicesSection />
        <FindZSection />
        <MakeMostOfZ />
      </main>
      <Footer />
    </>
  );
}

export default Home;