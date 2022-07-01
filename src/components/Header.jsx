import React from 'react'

const Header = () => {
  return (
    <div className='fixed z-50 w-screen bg-slate-400 p-6 px-16'>
        {/* for desktop and tablets*/}
        <div className="hidden md:flex w-full bg-red-600 p-4"></div>


        {/* for mobile */}
        <div className="flex md:hidden w-full bg-blue-500 p-4"></div>
    </div>
  )
}

export default Header