import React from "react";
import aisaas from "../assets/projects/aisaas.PNG";
import crypto from "../assets/projects/crypto.PNG";
import food from "../assets/projects/food.PNG";
import nike from "../assets/projects/nike.PNG";
import tesla from "../assets/projects/tesla.PNG"

const CompletedProjects = () => {
  const Portfolios = [
    {
      id: 1,
      src: nike,
      demo:'https://rococo-sorbet-6e3dad.netlify.app/'
    },
    {
      id: 2,
      src: tesla,
      demo: 'https://therealtesla.netlify.app/'
    },
    {
      id: 3,
      src: aisaas,
      demo: 'https://ai-saas-mu-seven.vercel.app/'
    },
    {
      id: 4,
      src: food,
      demo: 'https://divasraj1.github.io/theKuchBhiFood/'
    },
    {
      id: 5,
      src: crypto,
      demo: 'https://cryptoworld12.netlify.app/'
    },
  ];

  return (
    <div
      name="Completed Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Completed Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Portfolios.map(({ id, src,demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Divasraj1">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
