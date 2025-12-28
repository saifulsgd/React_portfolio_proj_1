

import project1 from "C:/Users/saiful/Desktop/React/react project/my_react_app/src/assets/images/project1.jpg";
import project2 from "C:/Users/saiful/Desktop/React/react project/my_react_app/src/assets/images/project3.jpg";
import project3 from "C:/Users/saiful/Desktop/React/react project/my_react_app/src/assets/images/project2.png";

const Sec_3 = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Portfolio
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Some of our recent works that showcase our skills and experience.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Portfolio Item 1 */}
          <div className="group rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={project1}
              alt="Project 1"
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Business Website
              </h3>
              <p className="text-gray-600 mt-2">
                Modern responsive website for a corporate client.
              </p>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="group rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={project2}
              alt="Project 2"
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                E-commerce Store
              </h3>
              <p className="text-gray-600 mt-2">
                Online store with clean UI and fast performance.
              </p>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="group rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={project3}
              alt="Project 3"
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                Landing Page
              </h3>
              <p className="text-gray-600 mt-2">
                High-converting landing page for marketing campaign.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sec_3;