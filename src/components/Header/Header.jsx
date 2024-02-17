import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='shadow sticky z-50 top-0'>
          <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
              <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                  <Link to ='/' className='flex items-center'>
                      <img src='https://flowbite.com/docs/images/logo.svg' className='mr-3 h-6 sm:h-9' alt='Flowbite Logo' />
                      <span className='self-center text-xl font-semibold whitespace-nowrap'>Flowbite</span>
                  </Link>
                  <div className='flex items-center'>
                      <Link to ='/about' className='text-gray-600 hover:text-blue-600'>About</Link>
                  </div>
                  <div className='flex items-center'>
                      <Link to ='/contact' className='text-gray-600 hover:text-blue-600'>Contact</Link>
                  </div>
                  <div className='flex items-center'>

                    <ul>
                      <li>
                            {/* <Link to = '/' className='text-gray-600 hover:text-blue-600'></Link> */}
                            <NavLink to ='/' className={({ isActive, isPending }) =>
                              isActive
                                  ? 'text-red-600 hover:text-blue-600'
                                  : 'text-gray-600 hover:text-blue-600'

                            }>Home</NavLink>
                      </li>
                      <li>
                            {/* <Link to = '/' className='text-gray-600 hover:text-blue-600'></Link> */}
                            <NavLink to ='/login' className={({ isActive, isPending }) =>
                              isActive
                                  ? 'text-red-600 hover:text-blue-600'
                                  : 'text-gray-600 hover:text-blue-600'

                            }>Login</NavLink>
                      </li>
                    </ul>
                  </div>
              </div>
          </nav>
      </header>
    </div>
  )
}

export default Header
