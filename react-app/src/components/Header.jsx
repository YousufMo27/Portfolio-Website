import React from 'react'

function Header({children, id}) {
  return (
    <h1 id={id && id} className='text-3xl font-bold mb-5 text-indigo-600   dark:text-green-500'>
        {children}
    </h1>
  )
}

export default Header