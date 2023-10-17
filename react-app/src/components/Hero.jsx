import React from 'react'
import { useEffect, useState } from 'react';
import Typed from 'react-typed'
import Type from 'react-typed'
function Hero() {
    
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
            <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-green-500 font-semibold'>
                <Type 
                strings={["Hey There, Yousuf Here"]}
                typeSpeed={100}
                />
            </h1>
            <h1 className='text-2xl md:text-xl mb-1 md:mb-3 py-4 text-indigo-600 dark:text-green-500 font-semibold'>
                <Typed 
                strings={["I am Yousuf Mohiuddin","I am an aspiring Software Developer"]}
                typeSpeed={120}
                backSpeed={100}
                loop
                />
            </h1>
            <p className='text-md md:text-x; max-w-md mb-3 text-gray-600 dark:text-gray-100'>
                A second year Computer Science Student Studying @ The University of Guelph
            </p>
            <a href='#projects' className='scroll-smooth inline-block px-8 py-3 border border-transparent text-base 
            font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-green-500  dark:text-black dark:hover:bg-green-700'>
                View More
            </a>
        </div>
    </div>
  )
}

export default Hero;