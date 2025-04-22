import { useMemo } from "react";

const gradientOptions = [
  "from-red-500 to-yellow-500",
  "from-pink-500 to-orange-400",
  "from-purple-500 to-pink-500",
  "from-indigo-500 to-purple-500",
  "from-blue-500 to-green-400",
  "from-green-500 to-lime-400",
  "from-lime-500 to-emerald-400",
  "from-emerald-500 to-teal-400",
  "from-teal-500 to-cyan-400",
  "from-cyan-500 to-sky-400",
  "from-sky-500 to-blue-400",
  "from-yellow-400 to-orange-500",
  "from-orange-500 to-rose-400",
  "from-rose-500 to-pink-500",
  "from-pink-300 to-indigo-300",
];

const directionOptions = [
  "bg-gradient-to-r",
  "bg-gradient-to-l",
  "bg-gradient-to-t",
  "bg-gradient-to-b",
  "bg-gradient-to-tr",
  "bg-gradient-to-tl",
  "bg-gradient-to-br",
  "bg-gradient-to-bl",
];

function getRandomIndex(arrayLength: number) {
  return Math.floor(Math.random() * arrayLength);
}

export function getRandomGradient() {
  const { direction, gradientClasses } = useMemo(() => {
    const dir = directionOptions[getRandomIndex(directionOptions.length)];
    const grad = gradientOptions[getRandomIndex(gradientOptions.length)];
    return { direction: dir, gradientClasses: grad };
  }, []);

  return `${direction} ${gradientClasses}`;
}
