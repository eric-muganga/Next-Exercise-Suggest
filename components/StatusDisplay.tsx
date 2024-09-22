import React from "react";

export default function StatusDisplay() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-4">
      {/* Status Tags */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div className="px-4 py-2 bg-blue-200 text-black rounded-full">
          Relaxed
        </div>
        <div className="px-4 py-2 bg-orange-200 text-black rounded-full">
          Energized
        </div>
        <div className="px-4 py-2 bg-green-200 text-black rounded-full">
          Focused
        </div>
        <div className="px-4 py-2 bg-blue-300 text-black rounded-full">
          Calm
        </div>
      </div>

      {/* Calories Burnt Card */}
      <div className="flex items-center bg-gray-200 rounded-lg p-4 mt-4 md:mt-0">
        <div className="mr-2">
          {/* Bar chart icon */}
          <div className="flex items-end gap-1">
            <div className="w-2 h-4 bg-blue-300"></div>
            <div className="w-2 h-6 bg-blue-400"></div>
            <div className="w-2 h-8 bg-blue-500"></div>
          </div>
        </div>
        <div className="text-black font-bold">
          <span className="text-sm">CALORIES BURNT</span>
          <br />
          <span className="text-lg">300kcal</span>
        </div>
      </div>
    </div>
  );
}
