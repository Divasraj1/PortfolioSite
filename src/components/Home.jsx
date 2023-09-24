import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
import TypewriterComponent from 'typewriter-effect'

const Home = () => {
    return (
      <section className='text-white home w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
            <h2 className='text-5xl font-montserrat '>I'm a</h2>
            <div className='text-6xl font-montserrat text-transparent bg-clip-text font-bold bg-gradient-to-r from-purple-400 to-pink-600'>
              <TypewriterComponent 
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Youtuber",
                    "Entrepreneur",
                    "Software Engineer"
                  ],
                  autoStart:true,
                  loop: true
                }}
              />
            </div>
            <p className='font-montserrat mt-6 mb-6'>
              I have 1 year of Professional experience of building and designing software.
              Currently, I love to work on web application using technologies like
              React, Express, Nodejs, Mongodb.
            </p>
              <div>
                <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                        bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer'>
                  Portfolio
                  <span className='group-hover:rotate-90 duration-300'>
                    <MdKeyboardArrowRight size={25}/>
                  </span>
                </Link>
              </div>
        </div>
        <div className='flex-1 flex justify-center items-center'>
        <img
          src={HeroImage}
          alt='product detail'
          className='object-contain'
        />
      </div>
      </section>
    )
  }
  
export default Home;
  
  