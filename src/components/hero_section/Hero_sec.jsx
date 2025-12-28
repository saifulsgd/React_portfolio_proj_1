
import heroImg from "C:/Users/saiful/Desktop/React/react project/my_react_app/src/assets/images/Hero_section _pic.jpg";

const Hero = () => {
  return (
        <section className="relative w-full h-[80vh]">
      
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay  */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Build Your Dream Website
        </h1>
        <p className="mt-4 max-w-xl">
          We create modern, fast and responsive websites for your business.
        </p>

        <button className="mt-6 bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

    </section>
  );
};

export default Hero;