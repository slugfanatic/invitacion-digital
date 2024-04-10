import { useEffect, useState } from "react";
import ICountdown from "../Interfaces/Hooks/ICountdown";

const useCountdown = (finalDate: Date): ICountdown => {
  const [count, setCount] = useState<ICountdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const divideFunc = (num: number, den: number): number[] => {
    num = Math.floor(num);
    let coc = Math.floor(num / den);
    let resto = num % den;
    return [coc, resto];
  };

  useEffect(() => {
    let endDate = finalDate.valueOf();
    let startDate = new Date().valueOf();
    let remainingTime = Math.floor((endDate - startDate) / 1000);

    const timeFormat = () => {
      let days, hours, minutes, seconds;
      [minutes, seconds] = divideFunc(remainingTime, 60);
      [hours, minutes] = divideFunc(minutes, 60);
      [days, hours] = divideFunc(hours, 24);
      setCount({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    };

    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        timeFormat();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [finalDate]);

  return count;
};

export default useCountdown;
