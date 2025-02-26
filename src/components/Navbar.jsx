import { Link } from "react-router";
import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        const publicKey = response.publicKey.toString();
        setWalletAddress(publicKey);

        console.log("Connected Wallet Address:", publicKey);

        const res = await fetch(`http://localhost:8080/connect-wallet`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ publicKey }),
        });

        if (res.ok) {
          setRedirectUrl("/");
        }
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install Phantom Wallet!");
    }
  };

  return (
    <nav className="z-100 bg-black text-white fixed top-0 right-0 left-0 border-b border-[#5c5c5c]">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center text-xl font-bold"
            >
              <img
                className="w-10 h-10"
                src="./hyprlaunch.svg"
                alt="HyprLaunch"
              />
              <span className="ml-3">HyprLaunch</span>
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden mx-8 lg:flex space-x-3 justify-start items-center gap-20 font-semibold">
            <Link
              onClick={scrollToTop}
              to="/"
              className="hover:text-gray-500 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Home</span>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/createToken"
              className="hover:text-gray-500 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Create Token</span>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/createLiquidity"
              className="hover:text-gray-500 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Liquidity Pool</span>
            </Link>
            <Link
              onClick={scrollToTop}
              to="/manageLiquidity"
              className="hover:text-gray-500 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Manage Liquidity</span>
            </Link>
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:flex items-center space-x-4">
            {redirectUrl ? (
              <Link to={redirectUrl}>
                <div className="px-6 py-3 bg-[#232323] rounded-full border border-[#5c5c5c] flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-[#2e2e2e] active:scale-95 cursor-pointer">
                  <div className="text-white font-bold">Dashboard</div>
                </div>
              </Link>
            ) : (
              <button onClick={connectWallet}>
                <div className="px-6 py-3 bg-[#232323] rounded-full border border-[#5c5c5c] flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-[#2e2e2e] active:scale-95 cursor-pointer">
                  <div className="text-white font-bold">
                    {walletAddress ? "Connected" : "Connect Wallet"}
                  </div>
                </div>
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center rounded-lg transition-all duration-300 justify-center p-3 focus:outline-none active:scale-95 hover:text-gray-500 hover:bg-gray-700"
            >
              {!isMenuOpen ? (
                <MdMenu className="block w-6 h-6" />
              ) : (
                <MdClose className="block w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 hover:bg-gray-700 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/createToken"
              className="block px-3 py-2 hover:bg-gray-700 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Create Token
            </Link>
            <Link
              to="/createLiquidity"
              className="block px-3 py-2 hover:bg-gray-700 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Liquidity Pool
            </Link>
            <Link
              to="/manageLiquidity"
              className="block px-3 py-2 hover:bg-gray-700 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Manage Liquidity
            </Link>
            {redirectUrl ? (
              <Link to={redirectUrl}>
                <div className="px-4 py-1.5 bg-[#232323] rounded-full border border-[#5c5c5c] flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-[#2e2e2e] active:scale-95 cursor-pointer">
                  <div className="text-white font-bold">Dashboard</div>
                </div>
              </Link>
            ) : (
              <button onClick={connectWallet} className="w-full">
                <div className="px-4 py-1.5 bg-[#232323] rounded-full border border-[#5c5c5c] flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-[#2e2e2e] active:scale-95 cursor-pointer">
                  <div className="text-white font-bold">
                    {walletAddress ? "Connected" : "Connect Wallet"}
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
