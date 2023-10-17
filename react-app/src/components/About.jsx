import React from 'react'
import Header from './Header'
import image from '../images/yousufpic.png'
function About() {
  return (
    <div className='flex flex-dol md:flex-row items-center justify-center gap-10 md:gap-20 py-10'>
        <div className='2-full md:w-6/12'>
            <Header>About Me</Header>
            <p className='text-md text-gray-600 dark:text-gray-300'>
            To start with I'm an undergrad student from Milton, ON. I currently attend the
            University of Guelph for a Bachelors Degree in Computer Science. From a young age I have always had a passion for creating things,
            whether they be small or large.  With creating comes designing and with designing comes the ability and process to learn.
            I have always been and always will be open to learning new things, whether they be related to Software or not.
            As an aspiring Software Developer I hope one day to be able to take my passion for creating and learning, and apply it to my future employer. To create things that make a difference.
            </p>

        </div>

        <img className='w-full md:w-60 hidden md:block' src={image} alt="Yousuf Mohiuddin Image"></img>


    </div>
  )
}

export default About;