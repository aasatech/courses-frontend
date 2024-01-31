import React from "react";

const CardDetail = ({ data }) => {
  return (
    <div className="p-5 relative flex flex-col bg-clip-border rounded-xl bg-white text-black shadow-gray-900/20 shadow-md w-full ">
      <div>
        <video className="h-full w-full rounded-lg" controls>
          <source
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="">
        <div className="block my-4 font-sans text-lg antialiased font-bold leading-normal text-black">
          {data.name}
        </div>
        <div className="block font-sans text-2xl antialiased font-bold leading-normal text-pink-500 ">
          Free
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-px my-6 bg-pink-500 border-0 " />
          <span className="absolute px-3 font-medium text-black -translate-x-1/2 bg-white left-1/2">
            Course Feature
          </span>
        </div>
        <div className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="p-1 border-2 rounded-full border-pink-500 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                5 team members
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border-2 rounded-full border-pink-500 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                200+ components
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border-2 rounded-full border-pink-500 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                40+ built-in pages
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border-2 rounded-full border-pink-500 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                1 year free updates
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border-2 rounded-full border-pink-500 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                Life time technical support
              </p>
            </li>
          </ul>
        </div>
        <div className="p-0 mt-5">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-pink-600 text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            type="button"
          >
            Entroll now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
