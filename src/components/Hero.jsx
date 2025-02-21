import React from 'react'
import { Link } from 'react-router'



const Hero = () => {
  return (
    <div className='pt-24 bg-black text-white md:pt-28'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-15 relative">
            {/* Logo Wrapper with Relative Position */}
                <div className="relative flex justify-center items-center">


                    {/* Hero Text (Overlay) */}
                    <div className="z-10 absolute text-white font-bold font-['Roboto'] uppercase 
                        text-[7vw] tracking-[3vw]">
                        
                        
                        HYPRLAUNCH


                        
                    </div>

                    {/* Logo */}
                    <img src="./hyprlaunch.svg" alt="HyprLaunch Logo" 
                    className="w-[29.8vw] h-auto max-w-full opacity-65" viewBox="0 0 516 516"/>


                    

                </div>

            {/* Name and Buttons */}
            <div className="absolute top-[65%] left-[9.5%] space-y-[1rem]">
                <div className='tracking-normal font-normal
                        text-[1.8vw] '>
                     Launch Tokens, and Create Liquidity Pool.<br /> 
                     Effortless and no coding required!
                </div>

                <div className='space-x-7 text-[1rem]'>
                <Link to="/createToken">
                    <div className="justify-center inline-flex overflow-hidden rounded-full items-center
                                    gap-2.5 px-4 py-1.5 
                                    bg-[#232323] border border-[#5c5c5c] hover:bg-[#2e2e2e]
                                    transition-all duration-300 active:scale-95 cursor-pointer">

                        <div className="text-white font-bold ">Create Token</div>
                    </div>
                </Link>
                
                <Link to="/manageLiquidity">
                    <div className="justify-center inline-flex overflow-hidden rounded-full items-center
                                    gap-2.5 px-4 py-1.5 
                                    bg-[#232323] border border-[#5c5c5c] hover:bg-[#2e2e2e]
                                    transition-all duration-300 active:scale-95 cursor-pointer">

                        <div className="text-white font-bold ">Create Liquidity </div>
                    </div>
                </Link>
                </div>

            </div>
        </div>

        {/* Our Numbers */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 relative">

            <div className="relative flex justify-center items-center ">
                
                <div className="z-10 pt-4 pb-40 text-white font-semibold font-['Roboto'] uppercase tracking-wider
                        text-[5.5vw] ">
                    OUR NUMBERS
                </div>
                
                

            </div>

            <div className='relative flex justify-center pt-10 items-center space-x-4'>
                <div className='relative'>
                    <img src="./rings.svg" className='w-[15.93vw] max-w-full h-auto 'viewBox="0 0 448 448" alt="" />


                    <div className="absolute top-[45%] left-[3%] w-[12vw] h-[0px] origin-top-left rotate-[-136.48deg] border border-[#5c5c5c]"></div>
                    <div className="absolute top-[20%] left-[75%] w-[9vw] h-[0px] origin-top-left rotate-[-42.39deg] border border-[#5c5c5c]"></div>
                    <div className="absolute bottom-[10%] left-[90%] w-[9vw] h-[0px] origin-top-left rotate-[53.13deg] border border-[#5c5c5c]"></div>
                    <div className="absolute bottom-[25%] right-[20%] w-[10vw] h-[0px] origin-top-left rotate-[151.70deg] border border-[#5c5c5c]"></div>
                    
                    <div className="absolute bottom-[70%] left-[117%] w-auto h-auto px-[2vw] py-[2vw] rounded-2xl border border-[#5c5c5c] flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                        <div className="w-full flex flex-col justify-start items-center gap-4">
                            <div className="text-white text-[2vw] font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-wider">
                            Transactions
                            </div>
                            <div className="text-white text-[5.5vw] font-normal font-['Product Sans'] leading-none">
                            +120k
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-[103%] right-[135%] w-auto h-auto px-[2vw] py-[2vw] rounded-2xl border border-[#5c5c5c] flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                        <div className="w-full flex flex-col justify-start items-center gap-4">
                            <div className="text-white text-[2vw] font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-wider">
                            Volume
                            </div>
                            <div className="text-white text-[5.5vw] font-normal font-['Product Sans'] leading-none">
                            +65M
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-[70%] right-[151%] w-auto h-auto px-[2vw] py-[2vw] rounded-2xl border border-[#5c5c5c] flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                        <div className="w-full flex flex-col justify-start items-center gap-4">
                            <div className="text-white text-[2vw] font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-wider">
                            Total Tokens
                            </div>
                            <div className="text-white text-[5.5vw] font-normal font-['Product Sans'] leading-none">
                            +2500
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-[110%] left-[124%] w-auto h-auto px-[2vw] py-[2vw] rounded-2xl border border-[#5c5c5c] flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                        <div className="w-full flex flex-col justify-start items-center gap-4">
                            <div className="text-white text-[2vw] font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-wider">
                            Users
                            </div>
                            <div className="text-white text-[5.5vw] font-normal font-['Product Sans'] leading-none">
                            +7000
                            </div>
                        </div>
                    </div>

                
                
                
                
                
                </div>        




                
            </div>

            

        </div>

        {/* Some Info */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-50 pb-50 relative">
            <div>


            </div>


        </div>


    </div>
  )
}

export default Hero
