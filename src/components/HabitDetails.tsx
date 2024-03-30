import React from "react";
import { Habit } from "../store/habitSlice";

interface HabitDetailsProps {
  habit: Habit;
  onClose: () => void;
  onDelete: (habit: Habit) => void;
}

const HabitDetails: React.FC<HabitDetailsProps> = ({
  habit,
  onClose,
  onDelete,
}) => {
  const { name, repeat, goal, time, imageUrl } = habit;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Habit Details
        </h2>
        <div className="mb-6">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <div className="text-lg text-gray-800 mb-2">
            <span className="font-bold">Name:</span> {name}
          </div>
          <div className="text-lg text-gray-800 mb-2">
            <span className="font-bold">Repeat:</span> {repeat}
          </div>
          <div className="text-lg text-gray-800 mb-2">
            <span className="font-bold">Goal:</span> {goal} times
          </div>
          <div className="text-lg text-gray-800 mb-4">
            <span className="font-bold">Time:</span> {time}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300 ease-in-out"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={() => {
              onDelete(habit);
              onClose();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
