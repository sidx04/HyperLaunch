import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="sm:pt-10 bg-black text-white relative">
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center h-screen">
        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:gap-4 w-full">
          <div className="relative order-1 mb-8 lg:mb-0">
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white font-bold font-['Roboto'] uppercase 
              text-[10vw] md:text-[9vw] tracking-widest leading-none whitespace-nowrap">
              HYPRLAUNCH
            </h1>
            <img
              src="./hyprlaunch.svg"
              alt="HyprLaunch Logo"
              className="w-64 md:w-80 lg:w-96 opacity-65"
            />
          </div>

          <div className=" flex-col hidden pt-2 md:block lg:items-start text-center max-w-xs z-20 
                           md:text-left md:absolute md:left-[12%] md:top-[55%]
                           lg:text-left lg:absolute lg:left-[13%] lg:top-[65%]
                           xl:text-left xl:absolute xl:left-[8%] xl:top-[70%]
                           2xl:text-left 2xl:absolute 2xl:left-[13%] 2xl:top-[65%]"
                           >


            <p className="text-sm md:text-base font-semibold text-white mb-6">
              Launch Tokens & Create Liquidity Pools effortlessly!
              <br />
              No coding required. 
            </p>
            
            <div className="inline-flex sm:flex-row gap-3 w-full sm:w-auto">
              <button 
                onClick={() => {}} 
                className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#232323] border border-[#5c5c5c] hover:bg-[#2e2e2e] transition-all duration-300 active:scale-95 text-white text-sm font-bold"
              >
                Create Token
              </button>
              <button 
                onClick={() => {}} 
                className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#232323] border border-[#5c5c5c] hover:bg-[#2e2e2e] transition-all duration-300 active:scale-95 text-white text-sm font-bold"
              >
                Create Liquidity
              </button>
            </div>
          </div>

        </div>

        <div className=" flex-col block md:hidden items-center lg:items-start text-center max-w-xs z-20">
            <p className="text-sm md:text-base text-white mb-6">
              Launch Tokens & Create Liquidity Pools effortlessly!
              <br />
              No coding required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button 
                onClick={() => {}} 
                className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#232323] border border-[#5c5c5c] hover:bg-[#2e2e2e] transition-all duration-300 active:scale-95 text-white text-sm font-bold"
              >
                Create Token
              </button>
              <button 
                onClick={() => {}} 
                className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#232323] border border-[#5c5c5c] hover:bg-[#2e2e2e] transition-all duration-300 active:scale-95 text-white text-sm font-bold"
              >
                Create Liquidity
              </button>
            </div>
          </div>
      

        
      </div>
    </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <h2 className="text-white font-semibold uppercase text-4xl sm:text-5xl tracking-wider">
          Our Numbers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {[
            { title: "Transactions", value: "+120k" },
            { title: "Volume", value: "+65M" },
            { title: "Total Tokens", value: "+2500" },
            { title: "Users", value: "+7000" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-6 py-4 border border-[#5c5c5c] rounded-xl"
            >
              <p className="text-xl sm:text-2xl font-semibold">{stat.title}</p>
              <h3 className="text-4xl sm:text-5xl font-bold">{stat.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;