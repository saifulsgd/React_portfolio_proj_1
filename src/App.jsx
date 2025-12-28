
import Hero from "./components/hero_section/Hero_sec";
import Header_area from "./components/header_area/Header_area";
import  Sec_1 from "./components/section_1/Sec_1";
import ImageGrid from "./components/section_2/Sec_2";
import Sec_3 from "./components/section_3/Sec_3";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";


const App = () => {
  return (
    <>
    <div>
      <Header_area />
        <Hero />
        < Sec_1/>
        <ImageGrid />
        <ImageGrid />
        <Sec_3 />
        <Testimonial />
        <About />
        <Footer />
    </div>
    </>
  );
} ;
export default App;