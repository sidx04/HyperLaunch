import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="pt-20 bg-black text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 flex flex-col items-center relative">
        <div className="relative flex flex-col items-center text-center">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white font-bold font-['Roboto'] uppercase text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] tracking-widest leading-none">
            HYPRLAUNCH
          </h1>
          <img
            src="./hyprlaunch.svg"
            alt="HyprLaunch Logo"
            className="w-64 sm:w-80 md:w-96 opacity-85"
          />
        </div>

        <div className="absolute top-[70%] left-[7%]  ml-8 text-left max-w-md w-full">
          <p className="text-sm sm:text-base md:text-lg font-normal leading-snug">
            Launch Tokens & Create Liquidity Pools effortlessly! <br /> No coding required.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="/createToken">
              <button className="px-6 py-2 rounded-full bg-[#232323] border border-[#5c5c5c] hover:bg-[#2e2e2e] transition-all duration-300 active:scale-95 text-white font-bold">
                Create Token
              </button>
            </Link>
            <Link to="/createLiquidity">
              <button className="px-6 py-2 rounded-full bg-[#232323] border border-[#5c5c5c] hover:bg-[#2e2e2e] transition-all duration-300 active:scale-95 text-white font-bold">
                Create Liquidity
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
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