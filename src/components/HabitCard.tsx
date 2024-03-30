import React from "react";
import { Habit } from "../store/habitSlice";

interface HabitCardProps {
  habit: Habit;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  const { name, repeat, goal, time } = habit;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="text-gray-700 text-base mb-2">Repeat: {repeat}</div>
        <div className="text-gray-700 text-base mb-2">Goal: {goal} times</div>
        <div className="text-gray-700 text-base">Time: {time}</div>
      </div>
    </div>
  );
};

export default HabitCard;
