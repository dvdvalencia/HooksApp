import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLinghtColors = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLinghtColors>("red");
  const [countdown, setCountdown] = useState(5);

  // Countdown effect
  useEffect(() => {
    if (countdown === 0) return;

    const initervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      console.log("Efecto de limpieza");
      clearInterval(initervalId);
    };
  }, [countdown]);

  //Change light color effect
  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    // TIEMPO DE ESPERA EN VERDE
    // setCountdown(1);

    if (light === "red") {
      setLight("green");
      return;
    }

    // TIEMPO DE ESPERA EN AMARILLO
    // setCountdown(2);

    if (light === "green") {
      setLight("yellow");
      return;
    }

    // TIEMPO DE ESPERA EN ROJO
    // setCountdown(3);

    if (light === "yellow") {
      setLight("red");
      return;
    }
  }, [countdown, light]);

  return {
    // Props
    countdown,
    light,
    colors,

    // Calculations
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",

    // Methods
  };
};
