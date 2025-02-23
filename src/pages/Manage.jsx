import { div } from 'framer-motion/client';
import React from 'react'
import { useState } from "react";


const Manage = () => {

    const [active, setActive] = useState("A");

  return (
    <div className="pt-24 bg-black text-white md:pt-28 font-['Product Sans']">
        
        <div className="flex flex-col items-center rounded-[30px] bg-[#23232333] border border-[#343434] text-white p-10 w-full max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-semibold text-center pb-5 uppercase">Manage Liquidity   </h1>
            <div className="bg-[#232323] w-full p-6 md:p-10 rounded-[30px] mt-6">
                <div className="justify-center items-center flex">
                    <button
                        onClick={() => setActive("A")}
                        className={`px-4 py-2 w-full rounded-bl-[18px] rounded-tl-[18px] transition duration-200 active:scale-95 cursor-pointer ${
                            active === "A" ? "bg-[#4BBEFF] text-white" : "bg-[#3D3D3D] text-white"
                        }`}
                        >
                            Add Liquidity
                    </button>
                    <button
                        onClick={() => setActive("B")}
                        className={`px-4 py-2 w-full rounded-br-[18px] rounded-tr-[18px] transition duration-200 active:scale-95 cursor-pointer ${
                            active === "B" ? "bg-[#4BBEFF] text-white" : "bg-[#3D3D3D] text-white"
                        }`}
                        >
                        Remove Liquidity
                    </button>
                </div>

                <div className="mt-4">
                {active === "A" ? 
                    <div>
                        <p className='text-2xl mb-5'>Add Liquidity </p>
                        <p className='text-xl mb-3'>Liquidity Pool: <span className='text-red-600'>*</span></p>
                        <input type="text" placeholder="Connect Your Wallet" className="p-3 border w-full border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                        <div className="inline-flex space-x-4">
                            <div className="flex-col">
                                <label className="text-lg text-[#232323]"> FU </label>
                                <input type="text" placeholder="Base Amount" className="p-3 border w-full border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                                <label className="text-md text-[#7d7d7d]">Balance: <span>0</span><span> Base</span></label>
                            </div>
                            <div className="flex-col">
                                <label className="text-lg text-[#232323]"> FU </label>
                                <input type="text" placeholder="Qoute Amount" className="p-3 border w-full border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                                <label className="text-md text-[#7d7d7d]">Balance: <span>0</span><span> Qoute</span></label>
                            </div>
                        </div>
                        <div className='relative justify-items-center'>
                            <button className=" hover:bg-[#83f8ff]/20 text-[#83f8ff] mt-6 w-full md:w-auto px-6 py-3 bg-[#383838] rounded-full border border-[#83f8ff] flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 cursor-pointer">
                                Add Liquidity
                            </button>
                            <br />
                            <p>
                                <span>Adding to Liquidity Pool: Base + Qoute </span>
                                <span> </span>
                            </p>
                            <p>
                                <span>Total Fees: </span>
                                <span className='text-[#83f8ff]'>0.1 SOL</span> 
                            </p>
                        </div>
                    </div> 
                    :   
                    <div>
                        <p className='text-2xl mb-5'>Remove Liquidity </p>
                        <p className='text-xl mb-3'>Liquidity Pool: <span className='text-red-600'>*</span></p>
                        <input type="text" placeholder="Connect Your Wallet" className="p-3 border w-full border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                        <div className="flex-col">
                            <label className="text-lg text-[#232323]"> FU </label>
                            <input type="text" placeholder="Base Amount" className="p-3 border w-full border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                            <label className="text-md text-[#7d7d7d]">Balance: <span>0</span><span> Base</span></label>
                        </div>
                        <div className='relative justify-items-center'>
                            <button className=" hover:bg-[#83f8ff]/20 text-[#83f8ff] mt-6 w-full md:w-auto px-6 py-3 bg-[#383838] rounded-full border border-[#83f8ff] flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 cursor-pointer">
                                Withdraw Liquidity
                            </button>
                            <br />
                            <p>
                                <span>Withdrawal Amount: Base + Qoute </span>
                        
                            </p>

                            <p>
                                <span>Total Fees: </span>
                                <span className='text-[#83f8ff]'>0.1 SOL</span> 
                            </p>
                        </div>
                    </div>
                }
                </div>
            </div>
        </div>
        
        <p className="text-4xl md:text-6xl font-semibold text-center uppercase pt-20 pb-10">
            HOW TO MANAGE SOLANA TOKEN LIQUIDITY
        </p>
  
        <div className="relative flex flex-col md:flex-row overflow-hidden items-center justify-between z-5 min-h-screen bg-black ">
            <img 
            src="./leftsystem.svg" 
            alt="Logo" 
            className="hidden md:block relative bottom-90 w-[70%] lg:w-[60%] h-auto mt-6 md:mt-0"
            />
            <div className="relative md:right-70 md:bottom-60 z-10 bg-[#232323] p-6 md:p-8 opacity-90 rounded-[20px] border border-[#343434] text-white shadow-xl max-w-lg w-full md:w-1/2 overflow-y-auto max-h-[80vh]">
                <ol className="list-decimal space-y-3 pl-5 text-xl font-['Product Sans'] leading-relaxed">
                    <li>Connect your Solana wallet.</li>
                    <li>Enter the Liquidity Pool Address (AMM ID)</li>
                    <li>Select the quantity of Base Token you want to add</li>
                    <li>Select the quantity of Quote Token you want to add</li>
                    <li>Click on add liquidity</li>
                    <li>Accept the transaction and wait until the addition of liquidity is completed</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Manage
