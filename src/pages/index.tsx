import React from "react";
import { Meteors } from "../components/meteorAnimation.tsx";
import TimerBoxes from "../components/timerBoxes";

const IndexPage: React.FC = () => {

  return (
    <div className="relative bg-gray-900 h-screen w-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <Meteors />
      <div className="flex flex-col items-center -mt-20">
        <img
          src="/images/Official Logo ΣΦΗΜΜΥ 16 for dark.png"
          alt="ΣΦΗΜΜΥ Logo"
          className="h-96 lg:h-[400px] mb-4"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">
          We are coming soon
        </h1>
        <TimerBoxes endTime="2025-04-25" />
        <div className="mt-8 flex gap-4">
          {/* Call for Papers Button */}
          <a
            href="https://papers.sfhmmy.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-md bg-[#7486cb] hover:bg-[#6778b7] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Call for Papers
          </a>
          {/* PreΣΦΗΜΜΥ Button */}
          <a
            href="https://presfhmmy.sfhmmy.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-md bg-[#77bb4e] hover:bg-[#6aa944] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            PreΣΦΗΜΜΥ
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
