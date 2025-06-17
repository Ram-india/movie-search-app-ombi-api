import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header className='bg-gray-600 p-4 text-white sticky top-0 z-50 '>
    <div className='container mx-auto flex justify-between'>
        <a className='text-xl font-bold' href='#'>Movie Finder</a>
        <nav>
            <Link to='/' className='mr-4'>Search</Link>
            <Link to='/favorites'>Favorites</Link>
        </nav>
    </div>

   </header>
  )
}

export default Header