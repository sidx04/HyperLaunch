import { div, span } from 'framer-motion/client'
import React from 'react'

const Liquidity = () => {
  return (
  <div className="pt-28 bg-black text-white relative font-['Product Sans']">
    <div className="flex flex-col rounded-[30px] bg-[#23232333] border border-[#343434] text-white p-8 w-auto xl:mx-auto max-w-6xl mx-3 relative">
    <h1 className="text-3xl md:text-5xl font-semibold text-center uppercase">Create Solana Liquidity Pool</h1>
    <p className="text-md md:text-xl text-gray-400 text-center mt-4">Easily create a Liquidity Pool for any Solana Token with ease.</p>

    <div className="bg-[#232323] w-full p-6 md:p-10 rounded-[30px] mt-6">
      <h2 className="text-2xl md:text-3xl font-semibold">Create Liquidity Pool</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col">
          <label className="text-lg">Base Token <span className='text-red-600'>*</span></label>
          <input type="text" placeholder="Connect your wallet" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">Quote Token <span className='text-red-600'>*</span></label>
          <input type="text" placeholder="Connect your wallet" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col">
          <label className="text-lg">Add Liquidity</label>
          <input type="text" placeholder="1 Base" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
          <label className="text-md text-[#7d7d7d]">Balance: <span>0</span></label>
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-[#232323]"> FU </label>
          <input type="text" placeholder="1 Qoute"
          className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
          <label className="text-md text-[#7d7d7d]">Balance: <span>0</span></label>
        </div>
      </div>

      <div className="mt-6 text-left space-y-2">
        <p className="text-md">Launch Price: <span className="text-[#83f8ff]">0.00 Base/Quote</span></p>
        {/* <p className="text-md">Total Fees: <span className="text-[#83f8ff]">0.2 SOL</span></p> */}
      </div>

      <div className='relative justify-items-center'>
      <button className=" hover:bg-[#83f8ff]/20 text-[#83f8ff] mt-6 w-full md:w-auto px-6 py-3 bg-[#383838] rounded-full border border-[#83f8ff] flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 cursor-pointer">
        Create Liquidity Pool
      </button>
      <br />
      <p>
        <span>Adding to Liquidity Pool: </span>
        <span>0 </span><span>Base + </span><span>0</span><span> Quote</span>
      </p>

      <p>
        <span>Total Fees: </span>
        <span className='text-[#83f8ff]'>0.2 SOL</span> 
      </p>
      </div>


    </div>
    </div>

    <p className="text-4xl md:text-6xl font-semibold text-center uppercase pt-20 pb-30 z-10">
      How to use Create Liquidity Pool
    </p>

    <div className="flex flex-col md:flex-row items-center overflow-hidden justify-between sm:h-auto sm:pb-10 md:pb-0 bg-black">
  
      <img 
        src="./leftsystem.svg" 
        alt="Logo" 
        className="hidden md:block relative bottom-90 w-[70%] lg:w-[60%] h-auto mt-6 md:mt-0"
      />

  <div className="relative md:right-70 md:bottom-60 z-10 bg-[#232323] p-6 md:p-8 opacity-90 rounded-[20px] border border-[#343434] text-white shadow-xl max-w-lg w-full md:w-1/2 overflow-y-auto max-h-[80vh]">
    <ol className="list-decimal space-y-3 pl-5 text-xl font-['Product Sans'] leading-relaxed">
      <li>Connect your Solana wallet.</li>
      <li>Select the Token pair.</li>
      <li>Set Starting Price.</li>
      <li>Set Minimum Token Quantity that users can buy.</li>
      <li>Set the minimum price change in SOL or USDC.</li>
      <li>Set how much Liquidity you want to add.</li>
      <li>Click on create Liquidity Pool and accept the transaction.</li>
    </ol>
  </div>

</div>

  </div>
  )
}

export default Liquidity
