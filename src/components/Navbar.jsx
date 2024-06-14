import React from 'react'

const Navbar = () => {
  return (
    <header className='w-[100vw] h-[4rem] flex justify-center items-center bg-white/5 z-10'>
        <nav className='flex justify-between items-center w-[70%] max-sm:justify-center '>
            <div className="logo text-3xl text-gray-100"><span className='text-purple font-bold hover:text-purple'>&lt;</span>Pass <span className='text-purple font-bold hover:text-purple/85'>OP/&gt;</span></div>
            <ul className='flex gap-9 justify-center items-center max-sm:hidden'>
                <li><a  className='text-gray-100 font-semibold p-2 rounded-lg hover:bg-purple hover:text-gray-200' href="/">Home</a></li>
                <li><a className='text-gray-100 font-semibold p-2 rounded-lg hover:bg-purple hover:text-gray-200' href="#">Contact</a></li>
                <li><a className='text-gray-100 font-semibold p-2 rounded-lg hover:bg-purple hover:text-gray-200' href="#">About</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar