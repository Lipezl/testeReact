import { useState, useEffect, useCallback } from "react";

const startDate = new Date("2025-01-30T00:00:00");

export default function TimeCounter() {

  const getTimeTogether = useCallback(() => {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (months < 0) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += lastMonth;
    }

    return {
      years,
      months,
      days,
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  }, []);

  const [timeTogether, setTimeTogether] = useState(getTimeTogether());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeTogether(getTimeTogether());
    }, 1000);
    return () => clearInterval(interval);
  }, [getTimeTogether]);

  return (
    <p className="text-xl contador">
      {timeTogether.years > 0 && `${timeTogether.years} ${timeTogether.years === 1 ? "ano" : "anos"}, `}
      {timeTogether.months > 0 && `${timeTogether.months} ${timeTogether.months === 1 ? "mês" : "meses"}, `}
      {timeTogether.days > 0 && `${timeTogether.days} ${timeTogether.days === 1 ? "dia" : "dias"}, `}
      {timeTogether.hours} horas, {timeTogether.minutes} minutos e {timeTogether.seconds} segundos
    </p>
  );
}
