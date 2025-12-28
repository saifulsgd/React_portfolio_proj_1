

import img1 from "C:/Users/saiful/Desktop/React/react project/my_react_app/src/assets/images/Hero_section.jpg";
import img2 from "C:/Users/saiful/Desktop/React/react project/my_react_app/src/assets/images/web-images-1.jpg";
import img3 from "C:/Users/saiful/Desktop/React/react project/my_react_app/src/assets/images/web-images-2.png";

const ImageGrid = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="text-center">
            <img
              src={img1}
              alt="Image 1"
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">
              Web Design
            </h3>
            <p className="text-gray-600 mt-2">
              Modern and responsive design solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <img
              src={img2}
              alt="Image 2"
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">
              Development
            </h3>
            <p className="text-gray-600 mt-2">
              Fast and scalable web applications.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <img
              src={img3}
              alt="Image 3"
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">
              Marketing
            </h3>
            <p className="text-gray-600 mt-2">
              Grow your business with smart strategies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImageGrid;
