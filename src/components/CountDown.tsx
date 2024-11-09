import { useState } from "react";

interface PanelProps {
  value: number;
  label: string;
}

const endDate = new Date("2025-01-15");

const calculateTimeLeft = () => {
  const difference = +endDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Panel = ({ value, label }: PanelProps) => (
  <div
    className="flex flex-col items-center w-[10rem] px-2 py-6 rounded-md border-2 bg-[#090907]"
    style={{
      borderImageSlice: 1,
      borderImageSource:
        "linear-gradient(90deg,#1a0042 0%,#934aff 39.57%,#bf94ff 100%)",
      boxShadow: "0 0 5px 0 #bf94ff",
    }}
  >
    <h2 className="text-7xl font-semibold">{value}</h2>
    <p className="text-2xl">{label}</p>
  </div>
);

export const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return (
    <div className="flex justify-center items-center gap-12">
      <Panel value={timeLeft.days} label="Días" />
      <Panel value={timeLeft.hours} label="Horas" />
      <Panel value={timeLeft.minutes} label="Minutos" />
      <Panel value={timeLeft.seconds} label="Segundos" />
    </div>
  );
};
