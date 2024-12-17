import React, { useEffect, useRef, useState } from "react";

interface TimerBoxesProps {
  endTime: string;
}

const TimerBoxes: React.FC<TimerBoxesProps> = ({ endTime }) => {
  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(endTime) - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="flex space-x-4 mt-2">
      {Object.values(timeLeft).map((value, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-[#737AB5] text-gray-100 font-bold w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-2xl sm:text-3xl md:text-6xl rounded-lg shadow-lg"
        >
          {value.toString().padStart(2, "0")}
        </div>
      ))}
    </div>
  );
};

export default TimerBoxes;
