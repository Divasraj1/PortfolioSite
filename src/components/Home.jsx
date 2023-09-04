import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
import TypewriterComponent from 'typewriter-effect'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full w-2/3'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a</h2>
                <div className="text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
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
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 1 year of Professional experience of building and designing software.
                    Currently, I love to work on web application using technologies like
                    React,Express,Nodejs,Mongodb.
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
            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 h-100 md:w-full shadow-md hover:scale-105 duration-500 py-2 shadow-blue-600' />
            </div>
        </div>
    </div>
  )
}

export default Home