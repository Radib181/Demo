import React from "react";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa"; // Importing icons

function Footersection() {
  return (
    <section className="py-10 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 px-6">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-40 h-20 sm:w-56 sm:h-32 cursor-pointer transition-transform transform hover:scale-110"
          />
        </div>

        {/* Rights Reserved Text */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-5xl font-extrabold text-[#4234FE]">
            All rights reserved
          </h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-16">
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
            <div className="flex items-center bg-[#afa8a8] justify-center w-12 h-12 rounded-2xl text-white text-2xl hover:scale-110 transition-transform duration-300">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
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
        </div>
      </div>
    </section>
  );
}

export default Footersection;
