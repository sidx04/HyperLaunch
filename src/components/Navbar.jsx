
import { Link } from 'react-router'
import React, { useState } from 'react';


import { MdClose, MdMenu } from 'react-icons/md'


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <nav className='z-100 bg-black text-white fixed top-0 right-0 left-0 border-b border-[#5c5c5c]'>
      <div className='container mx-auto px-4 py-2 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>



          {/* logo */}
          <div>
            <Link to="/" className="flex items-center text-xl font-bold">
              <img className='w-10 h-10' src="./hyprlaunch.svg" alt="HyprLaunch" />
              <span className="ml-3">HyprLaunch</span>
            </Link>
          </div>




          {/* menu */}
          <div className='hidden lg:flex space-x-4 justify-start items-center gap-20 font-semibold'>
          <Link to="/" className='hover:text-gray-500'><span>Home</span></Link>
            <Link to="/createToken" className='hover:text-gray-500'><span>Create Token</span></Link>
            <Link  to="/createLiquidity" className='hover:text-gray-500' ><span>Liquidity Pool</span></Link>
            <Link to="/manageLiquidity" className='hover:text-gray-500' ><span>Manage Liquidity</span></Link>
          </div>




          {/* connect button */}
          <div className='hidden md:flex items-center space-x-4'>
            <Link to="/connectWallet">
              <div className="px-6 py-3 bg-[#232323] rounded-full border border-[#5c5c5c] flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-[#2e2e2e] active:scale-95 cursor-pointer">
                <div className="text-white font-bold ">Connect Wallet</div>
              </div>
            </Link>
          </div>




          {/* mobile menu toggle */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='inline-flex items-center rounded-lg transition-all duration-300 justify-center p-3 focus:outline-none active:scale-95  hover:text-gray-500 hover:bg-gray-700'>
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
              <Link to='/' className='block px-3 py-2 hover:bg-gray-700'>Home</Link>
              <Link to='/createToken' className='block px-3 py-2 hover:bg-gray-700'>Create Token</Link>
              <Link to='/createLiquidity' className='block px-3 py-2 hover:bg-gray-700'>Liquidity Pool</Link>
              <Link to='/manageLiquidity' className='block px-3 py-2 hover:bg-gray-700'>Manage Liquidity</Link>
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
