import React from 'react'

const Liquidity = () => {
  return (
    <div className='pt-24 bg-black text-white md:pt-28'>
    <div className="flex flex-col items-center bg-[#23232333] border border-[#343434] text-white p-10 rounded-2xl w-full max-w-6xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-semibold text-center uppercase">Create Solana Liquidity Pool</h1>
    <p className="text-lg md:text-2xl text-gray-400 text-center mt-4">Easily create a Liquidity Pool for any Solana Token with ease.</p>

    <div className="bg-[#232323] w-full p-6 md:p-10 rounded-xl mt-6">
      <h2 className="text-2xl md:text-3xl font-semibold">Create Liquidity Pool</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col">
          <label className="text-lg">Base Token *</label>
          <input type="text" placeholder="Connect your wallet" className="p-3 border border-gray-600 rounded-md bg-gray-700 mt-2" />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">Quote Token *</label>
          <input type="text" placeholder="Connect your wallet" className="p-3 border border-gray-600 rounded-md bg-gray-700 mt-2" />
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">1</span>
          <span className="text-lg">Base</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">1</span>
          <span className="text-lg">Quote</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg">Balance: 0</p>
        <p className="text-lg">Launch Price: <span className="text-blue-400">0.00 Base/Quote</span></p>
        <p className="text-lg">Total Fees: <span className="text-blue-400">0.2 SOL</span></p>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg mt-6 w-full md:w-auto">
        Create Liquidity Pool
      </button>
    </div>
  </div>
  </div>
  )
}

export default Liquidity
