import React from "react";
import { Meteors } from "../components/meteorAnimation.tsx";
import TimerBoxes from "../components/timerBoxes"; // New TimerBoxes component

const IndexPage: React.FC = () => {
  return (
    <div className="relative bg-gray-900 h-screen w-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <Meteors /> {/* Background animation runs smoothly */}
      <div className="flex flex-col items-center -mt-40">
        <img
          src="/images/Official Logo ΣΦΗΜΜΥ 16 for dark.png"
          alt="ΣΦΗΜΜΥ Logo"
          className="h-[600px] mb-4"
        />
        <h1 className="text-4xl mb-4">We are coming soon</h1>
        <TimerBoxes endTime="2025-04-25" /> {/* Timer logic runs separately */}
      </div>
    </div>
  );
};

export default IndexPage;
