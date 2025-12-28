

const Testimonial = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32">
      
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] 
          -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] 
          stroke-gray-800"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">

        {/* Left Text */}
        <div>
          <p className="text-base font-semibold text-indigo-400">
            Deploy faster
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A better workflow
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
            At arcu, sit dui mi, nibh dui, diam eget aliquam.
          </p>

          {/* Feature List */}
          <ul className="mt-10 space-y-6 text-gray-400">
            {[
              {
                title: "Push to deploy",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
              },
              {
                title: "SSL certificates",
                text: "Anim aute id magna aliqua ad ad non deserunt sunt."
              },
              {
                title: "Database backups",
                text: "Ac tincidunt sapien vehicula erat auctor pellentesque."
              }
            ].map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-indigo-400 font-bold">✔</span>
                <span>
                  <strong className="text-white">
                    {item.title}.
                  </strong>{" "}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative lg:sticky lg:top-20">
          <img
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            alt="Project preview"
            className="rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;