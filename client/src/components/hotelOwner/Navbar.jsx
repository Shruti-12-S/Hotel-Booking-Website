import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300'>
      <Link to="/" className="flex items-center gap-2">
        <i className="fi fi-sr-home text-3xl text-black opacity-80"></i>
        <span className="text-3xl font-semibold tracking-wide leading-none text-black opacity-80">
          BookMyStay
        </span>
      </Link>
      <UserButton />
    </div>
  )
}

export default Navbar