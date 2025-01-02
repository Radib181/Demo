import React from "react";

function PlayKoksal() {
  return (
    <section className="relative bg-[#FEE125] py-16 px-6 md:px-16 lg:px-28 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center space-y-16 lg:space-y-0 lg:space-x-16">
        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative lg:order-2">
          <div className="relative max-w-full group">
            <img
              className="rounded-lg w-[520px] h-[720px] sm:mx-auto lg:mx-0"
              src="/Img.png"
              alt="Koksal Baba Game"
            />
          </div>
        </div>

        {/* Left Section - Content */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left lg:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-700 leading-tight">
            Play Koksal Baba Game <br />
            <span className="text-blue-700">Your Way!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-extrabold mt-4">
            Download the game on your favorite platform or play directly on the
            web. Start earning $8 as you go and laugh your way to the top!
          </p>

          {/* Download Buttons */}
          <div className="grid grid-cols-2 gap-2 justify-center lg:justify-start mt-4">
            <img className="h-14 w-auto mx-auto lg:mx-0" src="/Googlelogo.png" alt="Company Logo" />
            <img className="h-14 w-auto mx-auto lg:mx-0" src="/koksal website (1) copy.png" alt="Company Logo" />
          </div>
          <div className="grid grid-cols-2 gap-2 justify-center lg:justify-start mt-4">
            <img className="h-14 w-auto mx-auto lg:mx-0" src="/TeiligramLogo.png" alt="Company Logo" />
            <img className="h-16 w-auto mx-auto lg:mx-0" src="/BrowserLogo.png" alt="Company Logo" />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 justify-center lg:justify-start mt-8">
            <img className="h-20 w-auto mx-auto lg:mx-0" src="/watch.png" alt="Watch Trailer" />
            <img className="h-20 w-auto mx-auto lg:mx-0" src="/Youtubre.png" alt="YouTube" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-blue-300 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-300 rounded-full blur-2xl opacity-30"></div>
    </section>
  );
}

export default PlayKoksal;
