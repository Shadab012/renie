import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='headerMain shadow sticky z-50 top-0 border border-black flex items-center'>
      <nav className='bg-white border-gray-200  py-2.5 w-10/12 mx-auto'>
        <div className='flex flex-wrap justify-between items-center  w-full'>
          <Link to='/' className='headerLogo flex items-center'>
            <img src={logo} className='mr-3 h-12' alt='Logo' />
          </Link>
          <div className='headerButton flex items-center  justify-center border md:order-2 hidden lg:block'>
            <Link
              to='#'
              className='text-white text-xl hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  focus:outline-none'
            >
              Connect with an expert
            </Link>
          </div>
          {/* button added here */}
          <div className='block lg:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400'
            >
              <svg
                className={`fill-current h-3 w-3 ${
                  isOpen ? 'hidden' : 'block'
                }`}
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${
                  isOpen ? 'block' : 'hidden'
                }`}
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
              </svg>
            </button>
          </div>
          {/* Ends Here */}
          <div
            className={`w-full block flex-grow lg:flex justify-center lg:items-center lg:w-auto ${
              isOpen ? 'block' : 'hidden'
            }`}
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <NavLink
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  to='/'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 text-xl text-black ${
                      isActive ? 'primary-color ' : 'text-gray-500'
                    } border-b border-gray-100 
                                        hover:bg-gray-50
                                     lg:hover:bg-transparent lg:border-0
                                         hover:primary-color lg:p-0`
                  }
                >
                  Renie Bin
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  to='/about'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 text-xl text-black${
                      isActive ? 'primary-color' : 'text-gray-500'
                    } border-b border-gray-100 
                                        hover:bg-gray-50
                                     lg:hover:bg-transparent lg:border-0
                                         hover:primary-color lg:p-0`
                  }
                >
                  Renie Hub
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  to='/contact'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 text-xl text-black 
                                        ${
                                          isActive
                                            ? 'primary-color '
                                            : 'text-gray-500'
                                        } border-b border-gray-100 
                                        hover:bg-gray-50
                                     lg:hover:bg-transparent lg:border-0
                                         hover:primary-color lg:p-0`
                  }
                >
                  Renie App
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  to='/projects'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  text-xl text-black
                                        ${
                                          isActive
                                            ? 'primary-color'
                                            : 'text-gray-500'
                                        } border-b border-gray-100 
                                        hover:bg-gray-50
                                     lg:hover:bg-transparent lg:border-0
                                         hover:primary-color lg:p-0`
                  }
                >
                  Ads that matter
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  to='/projects'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200  text-xl text-black
                                        ${
                                          isActive
                                            ? 'primary-color'
                                            : 'text-gray-500'
                                        } border-b border-gray-100 
                                        hover:bg-gray-50
                                     lg:hover:bg-transparent lg:border-0
                                         hover:primary-color lg:p-0`
                  }
                >
                  Media Hub
                </NavLink>
              </li>
              <div className='headerButton w-max flex items-center  justify-center border  block lg:hidden'>
                <Link
                  to='#'
                  className='text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  focus:outline-none'
                >
                  Connect with an expert
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
