import React from "react";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa"; // Importing icons

const Navber = () => {
  return (
    <section className="container mx-auto -mt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center py-6">
        {/* Left Section - Logo */}
        <div className="mb-4 lg:mb-0 flex items-center">
          <img
            className="w-40 ml-5 h-20 sm:w-56 sm:h-32 cursor-pointer transition-transform transform hover:scale-110"
            src="/Logo.png"
            alt="Logo"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-16">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {/* Telegram Icon */}
            <div className="flex items-center bg-white justify-center w-12 h-12 rounded-lg text-black text-2xl hover:scale-110 transition-transform duration-300">
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </div>

            {/* Discord Icon */}
            <div className="flex items-center bg-[#cfa55d] justify-center w-12 h-12 rounded-lg text-black text-2xl hover:scale-110 transition-transform duration-300">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            </div>

            {/* Twitter Icon */}
            <div className="flex items-center bg-[#903131] justify-center w-12 h-12 rounded-2xl text-white text-2xl hover:scale-110 transition-transform duration-300">
              <img src="/download (2).png" alt="" />
                <FaTwitter />
            
            </div>

            {/* Eggole Image with Gradient Background */}
            <div className="flex items-center bg-red-300 justify-center w-12 h-12 rounded-sm hover:scale-110 transition-transform duration-300">
              <img
                className="h-10 w-10 rounded-full"
                src="/Eggole.jpg"
                alt="Eggole"
              />
            </div>
          </div>

          {/* Button */}
          <div>
            <button className="font-semibold italic container mx-auto text-lg sm:text-xl md:text-2xl bg-[#FFDC1F] px-6 py-3 border-2 rounded-lg border-black shadow-lg hover:bg-[#FFD700] hover:scale-105 transition-all duration-300 focus:outline-none">
              & Buy Koksal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navber;
