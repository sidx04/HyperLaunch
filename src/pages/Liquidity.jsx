import React from 'react'

const Liquidity = () => {
  return (
  <div className="pt-24 bg-black text-white md:pt-28 pb-10 font-['Product Sans']">
    <div className="flex flex-col items-center rounded-[30px] bg-[#23232333] border border-[#343434] text-white p-10 w-full max-w-6xl mx-auto">
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
          <input type="text" placeholder="1" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
          <label className="text-md text-[#7d7d7d]">Balance: <span>0</span></label>
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-[#232323]"> FU </label>
          <input type="text" placeholder="1" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
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
        <span> </span>
      </p>

      <p>
        <span>Total Fees: </span>
        <span className='text-[#83f8ff]'>0.2 SOL</span> 
      </p>
      </div>


    </div>
    </div>

    <p className="text-4xl md:text-6xl font-semibold text-center uppercase pt-20 pb-10">
      How to use Create Liquidity Pool
    </p>


    <div className='flex flex-col items-center rounded-[30px] bg-[#23232333] border border-[#343434] text-white p-10 mx-auto w-fit h-fit'>
      <ol className="list-decimal space-y-3 pl-5 text-xl text-white font-['Product Sans'] leading-relaxed font-normal">
                          
        <li>Connect your Solana wallet.</li>
        <li>Select the Token pair.</li>
        <li>Set Starting Price.</li>
        <li>Set Minimum Token Quantity that users can buy.</li>
        <li>Set the minimum price change in SOL or USDC.</li>
        <li>Set how much Liquidity you want to add.</li>
        <li>Click on create Liquidity Pool and accept the transaction.</li>
      </ol>

    </div>
    <img src="./leftsystem.svg" alt="" />

  </div>
  )
}

export default Liquidity
