import React from 'react';

function Join() {
  return (
    <section className='bg-[#4434F8] py-12'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
          {/* Telegram Icon */}
          <div className='flex justify-center items-center'>
            <img className='w-60 h-60 md:w-72 md:h-72 rounded-full shadow-lg' src="/Teligram.png" alt="Telegram Icon" />
          </div>

          {/* Main Image and Button */}
          <div className='relative flex flex-col items-center'>
            <img className='w-[260px] md:w-[470px] lg:w-[590px] h-auto rounded-xl' src="/Img3.png" alt="Main Image" />

            {/* Enlarged Button Design */}
            <button className='mt-6 px-8 py-4 sm:px-12 sm:py-6 bg-yellow-500 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4234FE] rounded-full border-4 border-white hover:bg-yellow-600 hover:scale-110 transition-all duration-300 shadow-2xl'>
              JOIN THE KOKSAL <br /> COMMUNITY NOW !
            </button>
          </div>

          {/* Twitter Icon */}
          <div className='flex justify-center items-center'>
            <img className='w-60 h-60 md:w-72 md:h-72 rounded-full shadow-lg' src="/Twtter.png" alt="Twitter Icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
