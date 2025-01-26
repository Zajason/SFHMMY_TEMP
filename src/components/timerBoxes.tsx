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
    <div className="flex space-x-2 mt-2">
      {Object.values(timeLeft).map((value, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-[#737AB5] text-gray-100 font-bold w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-lg sm:text-xl md:text-2xl rounded-lg shadow-lg"
        >
          {value.toString().padStart(2, "0")}
        </div>
      ))}
    </div>
  );
};

export default TimerBoxes;
