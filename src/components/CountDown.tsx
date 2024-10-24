import { useState } from "react"

const endDate = new Date('2025-01-15');

const calculateTimeLeft = () => {
  const difference = +endDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

export const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return (
    <div className="flex gap-12">
      <div className="flex flex-col items-center w-[10rem] bg-gradient-to-b from-[#5A3F66] to-[#FFF0] px-2 py-6 rounded-md">
        <h2 className="text-7xl font-semibold">{timeLeft.days}</h2>
        <p className="text-2xl">Días</p>
      </div>

      <div className="flex flex-col items-center w-[10rem] bg-gradient-to-b from-[#5A3F66] to-[#FFF0] px-2 py-6 rounded-md">
        <h2 className="text-7xl font-semibold">{timeLeft.hours}</h2>
        <p className="text-2xl">Horas</p>
      </div>

      <div className="flex flex-col items-center w-[10rem] bg-gradient-to-b from-[#5A3F66] to-[#FFF0] px-2 py-6 rounded-md">
        <h2 className="text-7xl font-semibold">{timeLeft.minutes}</h2>
        <p className="text-2xl">Minutos</p>
      </div>

      <div className="flex flex-col items-center w-[10rem] bg-gradient-to-b from-[#5A3F66] to-[#FFF0] px-2 py-6 rounded-md">
        <h2 className="text-7xl font-semibold">{timeLeft.seconds}</h2>
        <p className="text-2xl">Segundos</p>
      </div>
    </div>
  )
}