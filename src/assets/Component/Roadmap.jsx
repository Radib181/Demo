import React from 'react';

function Roadmap() {
  return (
    <section className="relative py-16 px-6 md:px-16 lg:px-28 bg-[#FEE125] ">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-red-600 text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Our Roadmap -- Journey of $KOKSAL
        </h1>
        <h4 className="text-gray-700 text-lg md:text-xl mx-auto max-w-3xl">
          From launch to global domination, our roadmap ensures steady growth and exciting milestones for both players and investors. Here's what you can expect:
        </h4>
      </div>

      {/* Roadmap Image Section */}
      <div className="relative flex justify-center mb-12">
        <div className="relative w-full">
          <img
            className="w-screen h-auto rounded-lg object-cover"
            src="/Roadmapimg.png"
            alt="Roadmap"
          />
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
