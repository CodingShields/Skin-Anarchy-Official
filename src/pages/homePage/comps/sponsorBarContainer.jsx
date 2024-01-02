import React, { useEffect, useState } from "react";

const SponsorBarContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 bg-gray-100 h-fit">
      <h1 className="text-4xl font-bold text-center text-black">
        Take a Look At Our Sponsors
      </h1>
      <div className="relative flex w-full overflow-x-hidden">
        <div class="py-12 animate-marquee whitespace-nowrap">
          <span class="text-4xl mx-4">Marquee Item 1</span>
          <span class="text-4xl mx-4">Marquee Item 2</span>
          <span class="text-4xl mx-4">Marquee Item 3</span>
          <span class="text-4xl mx-4">Marquee Item 4</span>
          <span class="text-4xl mx-4">Marquee Item 6</span>
        </div>

        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="text-4xl mx-4">Marquee Item 1</span>
          <span class="text-4xl mx-4">Marquee Item 2</span>
          <span class="text-4xl mx-4">Marquee Item 3</span>
          <span class="text-4xl mx-4">Marquee Item 4</span>
          <span class="text-4xl mx-4">Marquee Item 5</span>
        </div>
      </div>
    </div>
  );
};

export default SponsorBarContainer;
