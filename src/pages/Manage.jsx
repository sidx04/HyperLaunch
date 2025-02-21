import React from 'react'


const Manage = () => {
  return (
    <div className='pt-24 bg-black text-white md:pt-28'>
        <div></div>
        <div>
            <div className="text-white  text-3xl lg:text-4xl font-bold text-center font-['Roboto'] uppercase">
                HOW TO MANAGE SOLANA TOKEN LIQUIDITY
            </div>
            <div className='p-22 '>
                <div className="inline-block bg-[#dbdada]/5 border border-black backdrop-blur-[25px] mt-4 rounded-[30px] p-6 space-y-4">
                    <ol className="list-decimal space-y-3 pl-5 text-xl text-white font-['Product Sans'] leading-relaxed font-normal">
                        <li>Connect your Solana wallet.</li>
                        <li>Enter the Liquidity Pool Address (AMM ID)</li>
                        <li>Select the quantity of Base Token you want to add</li>
                        <li>Select the quantity of Quote Token you want to add</li>
                        <li>Click on add liquidity</li>
                        <li>Accept the transaction and wait until the
                        addition of liquidity is completed</li>
                    </ol>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Manage
