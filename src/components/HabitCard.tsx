import React from "react";
import { Habit } from "../store/habitSlice";

interface HabitCardProps {
  habit: Habit;
  onDetailsClick: () => void;
  onDeleteClick: () => void; // Function to handle delete click
  imageUrl: string;
}

const HabitCard: React.FC<HabitCardProps> = ({
  habit,
  onDetailsClick,
  onDeleteClick,
  imageUrl,
}) => {
  const { name } = habit;

  return (
    <div
      className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl relative"
      onClick={onDetailsClick}
    >
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        <div className="absolute bottom-2 right-2">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent click propagation to the card
              onDeleteClick();
            }}
            className="text-red-500 hover:text-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
