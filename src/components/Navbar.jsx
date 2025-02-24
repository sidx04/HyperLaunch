
import { Link } from 'react-router'
import React, { useState } from 'react';


import { MdClose, MdMenu } from 'react-icons/md'


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling to top
  };

  

  return (
    <nav className='z-100 bg-black text-white fixed top-0 right-0 left-0 border-b border-[#5c5c5c]'>
      <div className='px-4 py-2 sm:px-6 lg:px-8'>
        <div className='flex h-14 items-center justify-between gap-8 px-4 sm:px-6'>



          {/* logo */}
          <div>
            <a href="/" onClick={scrollToTop} className="shrink-0 flex items-center text-xl font-bold">
              <img className='w-10 h-10' src="./hyprlaunch.svg" alt="HyprLaunch" />
              <span className="ml-3">HyprLaunch</span>
            </a>
          </div>




          {/* menu */}
          <div className='mx-5 font-semibold flex items-center gap-6 max-md:hidden lg:gap-8 xl:gap-12 2xl:gap-16'>
          <Link onClick={scrollToTop} to="/" className='hover:text-gray-500 font-bold transition-all duration-300 active:scale-95 cursor-pointer'><span>Home</span></Link>
            <Link onClick={scrollToTop} to="/createToken" className='hover:text-gray-500 font-bold transition-all duration-300 active:scale-95 cursor-pointer'><span>Create Token</span></Link>
            <Link onClick={scrollToTop} to="/createLiquidity" className='hover:text-gray-500 font-bold transition-all duration-300 active:scale-95 cursor-pointer' ><span>Liquidity Pool</span></Link>
            <Link onClick={scrollToTop} to="/manageLiquidity" className='hover:text-gray-500 font-bold transition-all duration-300 active:scale-95 cursor-pointer' ><span>Manage Liquidity</span></Link>
          </div>




          {/* connect button */}
          <div className='font-semibold flex items-center max-md:hidden'>
            <button>
              <div className="px-6 py-2 bg-[#232323] rounded-full border border-[#5c5c5c] flex items-center justify-center gap-2.5 
                              transition-all duration-300 hover:bg-[#2e2e2e] active:scale-95 cursor-pointer">
                <div className="text-white font-bold ">Connect Wallet</div>
              </div>
            </button>
          </div>




          {/* mobile menu toggle */}
          <div className='md:hidden flex items-center justify-self-end'>
            <button onClick={toggleMenu} className='rounded-lg transition-all duration-300 p-3 focus:outline-none active:scale-95  hover:text-gray-500 hover:bg-gray-700'>
              {
                !isMenuOpen ? (<MdMenu className='block w-6 h-6'/>) : (<MdClose className='block w-6 h-6'/>)
              }
            </button> 
          </div>



        </div>
      </div>
      
      {/* mobile menu */}
      {
        isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link to='/' className='block px-3 py-2 hover:bg-gray-700 transition-all duration-300 active:scale-95 cursor-pointer'>Home</Link>
              <Link to='/createToken' className='block px-3 py-2 hover:bg-gray-700 transition-all duration-300 active:scale-95 cursor-pointer'>Create Token</Link>
              <Link to='/createLiquidity' className='block px-3 py-2 hover:bg-gray-700 transition-all duration-300 active:scale-95 cursor-pointer'>Liquidity Pool</Link>
              <Link to='/manageLiquidity' className='block px-3 py-2 hover:bg-gray-700 transition-all duration-300 active:scale-95 cursor-pointer'>Manage Liquidity</Link>
              <Link to="/connectWallet">
                <div className="px-4 py-1.5 bg-[#232323] rounded-full border border-[#5c5c5c] flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-[#2e2e2e] active:scale-95 cursor-pointer">
                  <div className="text-white font-bold ">Connect Wallet</div>
                </div>
              </Link>

              
            </div>

          </div>
        )
      }

    </nav>
  )
}

export default NavBar
