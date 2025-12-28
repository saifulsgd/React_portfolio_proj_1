

import aboutImg from "C:/Users/saiful/Desktop/React/react project/my_react_app/src/assets/images/about.jfif";

const About = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div>
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About Us
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a creative digital agency helping businesses grow with
              modern web solutions. Our team focuses on clean design, fast
              performance and user-friendly experiences.
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              With years of experience, we deliver high-quality projects that
              meet client goals and create real impact.
            </p>

            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;