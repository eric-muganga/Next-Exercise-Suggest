import ImageGrid from "@/components/ImageGrid";
import StatusDisplay from "@/components/StatusDisplay";
import { images } from "@/data";
import Image from "next/image";
import React from "react";

export default function HeroSec() {
  return (
    <section id="hero" className="p-4 lg:p-16">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
              Find Your Perfect Workout Based on{" "}
              <span className="text-[#354AD9]">Your Mood</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold">
              Discover personalized workout routines that match how you feel
              today.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <ImageGrid />
          </div>
        </div>
        <StatusDisplay />
      </div>
    </section>
  );
}
