import React from "react";
import { Habit } from "../store/habitSlice";

interface HabitCardProps {
  habit: Habit;
  onDetailsClick: () => void;
  imageUrl: string;
}

const HabitCard: React.FC<HabitCardProps> = ({
  habit,
  onDetailsClick,
  imageUrl,
}) => {
  const { name } = habit;

  return (
    <div
      className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      onClick={onDetailsClick}
    >
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
      </div>
    </div>
  );
};

export default HabitCard;
