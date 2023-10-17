import React from 'react'
import {FaGithub} from "react-icons/fa";
import {FaExternalLinkAlt} from "react-icons/fa";
function Project({imageUrl,title,tech,link, showExternalLinkIcon ,externalLink}) {
  return (
    <div className='bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden'>
        <img src={imageUrl} alt={title} className='w-full h-36 md:h-48 object-cover'/>
        <div className='text-gray-900 dark:text-gray-300 p-5 w-full'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
                {title}
            </h3>
            <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                {tech.map(item => (
                    <span key={item} className='inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md'>
                        {item}
                    </span>                    
                ))}
            <a href={link} className='text-3xl'>
                <FaGithub />
            </a>

            {showExternalLinkIcon && (
            <a href={externalLink} className='text-3xl'>
              <FaExternalLinkAlt />
            </a>
          )}
            </p>
            
        </div>
    </div>
  )
}

export default Project