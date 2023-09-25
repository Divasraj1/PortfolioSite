import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import reacticon from "../assets/react.png";
import expressicon from "../assets/express.png";
import mongodbicon from "../assets/mongodb.png";
import reduxicon from "../assets/redux.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      name: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      name: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      name: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reacticon,
      name: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      name: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: github,
      name: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: expressicon,
      name: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: reduxicon,
      name: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 9,
      src: mongodbicon,
      name: "MongoDB",
      style: "shadow-green-400",
    },
  ];

  return (
    <section name="experience" className="bg-black mx-auto text-white p-4 px-4">
      <div className="max-w-screen-lg mx-auto p-4">
        <h3 className="text-4xl font-bold inline border-b-4 border-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience</h3>
        <h3 className="text-lg py-3">Technologies I have worked With</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 flex-1 duration-500 py-2 rounded-full ${style}`}
            >
              <img src={src} alt={title} className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

    // return (
    //   <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
    //       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
    //           <div>
    //               <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Experience</p>
    //               <p className='py-6'>These are the Technologies I have worked with</p>
    //           </div>
    //           <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

    //           {
    //               techs.map(({id,src,title,style}) => (
    //                   <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full ${style}`}>
    //               <img src={src} alt={title} className="w-20 h-20 mx-auto"/>
    //               <p className='mt-4'>{title}</p>
    //           </div>
    //               ))
    //           }

    //       </div>

    //       </div>

    //    </div>
    //  )
};

export default Experience;
