"use client";

import React from "react";

function HeroSection() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: `url('/hero.png')`, // Update with the correct path to your image
        clipPath: "polygon(0% 0%, 0% 82%, 24% 100%, 100% 84%, 100% 0%, 100% 0%)", // Creates the angled cut
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20">
        <p className="text-lg md:text-2xl font-medium tracking-wide text-white mb-4">
          Trust • Integrity • Reliability
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
          Real Estate Experts in Ionia County and Surrounding Areas
        </h1>
      </div>
      {/* <div
        className="absolute bottom-0 left-0 w-full h-[100px] bg-white"
        style={{
          clipPath: "polygon(0% 1%, 0% 88%, 26% 99%, 100% 84%, 100% 0%, 100% 0%)", // Creates the angled cut
        }}
      ></div> */}
    </div>
  );
}

export default HeroSection;
