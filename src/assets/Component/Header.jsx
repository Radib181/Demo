import React from "react";

function Header() {
  return (
    <section className="flex items-center">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Left Section - Header Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="w-[280px] h-[610px] sm:w-[300px] lg:w-[350px] xl:w-[400px] transition-all transform hover:scale-105"
            src="/Headerpic.png"
            alt="Header Image"
          />
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-1/2 space-y-6 lg:space-y-8 px-4">
          
          {/* Logo and Description */}
          <div className="text-center lg:text-left">
            <img className="mx-auto w-44 h-auto sm:w-72 lg:w-80" src="/Logotow.png" alt="Logo" />
            <h4 className="text-lg sm:text-xl lg:text-2xl text-white mt-4 leading-relaxed font-medium font-bold">
              The First Game in Solano Network
              <br />
              Join the fun with Koksal Baba, the internet's favorite meme legend,
              as he takes on the gaming world. Explore our thrilling game, where
              humor meets crypto rewards!
            </h4>
          </div>

          {/* Progress Bar */}
          <div className="flex justify-center lg:justify-start mt-6 lg:mt-0">
            <div>
              <img
                className="w-[300px] sm:w-[400px] lg:w-[500px] h-auto transition-all transform hover:scale-105"
                src='/Progressber.png'
                alt="Progress Bar"
              />
              <h2 className="text-[#FEE125] text-xl sm:text-2xl lg:text-3xl font-bold text-center mt-4 lg:mt-2">
                153 / 10000 $ SOL COLLECTED
              </h2>
            </div>
          </div>

          {/* Buttons and Badge */}
          <div className="flex justify-center lg:justify-start items-center space-x-6 mt-6">
            {/* Badge */}
            <div>
              <img
                className="w-16 sm:w-20 lg:w-24 h-auto transition-all transform hover:scale-105"
                src="/Batch1.png"
                alt="Batch"
              />
            </div>

            {/* Button */}
            <button className="font-extrabold italic text-lg sm:text-xl md:text-2xl bg-[#FFDC1F] px-8 py-3 border-2 rounded-lg border-black shadow-lg transition-transform transform hover:scale-110 hover:bg-[#FFD700] focus:outline-none">
              & Buy Koksal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
