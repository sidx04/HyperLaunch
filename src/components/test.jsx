import { Link } from "react-router";
import { FaUserCircle } from "react-icons/fa";

export function Navbar1({ activeSection, scrollToSection }) {
  return (
    <nav className="fixed top-0 w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo */}

          <Link to="/" className="flex items-center">
            <img
              className="w-10 h-10"
              src="./hyprlaunch.svg"
              alt="HyprLaunch"
            />
            <span className="text-white ml-3 font-bold text-xl">
              HyprLaunch
            </span>
            {/* <span className="ml-3">HyprLaunch</span> */}
          </Link>

          {/* Middle - Navigation Links */}
          <div className="hidden md:flex space-x-6 mx-auto">
            {["home", "about", "services", "gallery", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`${
                    activeSection === section ? "text-red-500" : "text-gray-600"
                  } hover:text-red-500 capitalize`}
                >
                  {section}
                </button>
              )
            )}
          </div>

          {/* Rightmost - Join Now Button & Account Icon */}
          <div className="flex items-center space-x-6 ml-auto">
            <button className="bg-[#232323] border-[#5c5c5c] text-white px-6 py-2 rounded-full hover:bg-[#2e2e2e]">
              Connect Button
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
