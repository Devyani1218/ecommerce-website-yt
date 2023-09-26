import Navbar from "./components/Navbar";
import  Hero from "./components/Hero";
import Category from "./components/Category";
import FeaturedSectionFruits from "./components/FeaturedSectionFruits";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import Banner from "./components/Banner";
import BlogSection from "./components/BlogSection";
import Newletter from "./components/Newletter";
import Featuresection from "./components/Featuresection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeaturedSectionFruits />
      <FeatureSectionBreakfast />
      <Banner />
      <BlogSection />
      <Newletter />
      <Featuresection />
      <Footer/>
    </main>
  );
};
export default App;
