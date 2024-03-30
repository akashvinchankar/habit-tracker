import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Habit, addHabit } from "../store/habitSlice";

interface AddHabitModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddHabitModal: React.FC<AddHabitModalProps> = ({ setShowModal }) => {
  const [habit, setHabit] = useState<Habit>({
    id: Math.floor(Math.random() * 1000),
    name: "",
    repeat: "daily",
    goal: 1,
    time: "morning",
  });
  const dispatch = useDispatch();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setHabit((prevHabit) => ({
      ...prevHabit,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(addHabit(habit));
    setHabit({
      id: Math.floor(Math.random() * 1000),
      name: "",
      repeat: "daily",
      goal: 1,
      time: "morning",
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add New Habit</h2>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            type="text"
            id="name"
            name="name"
            value={habit.name}
            placeholder="Eg. Drink Water"
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="repeat"
            >
              Repeat
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded"
              name="repeat"
              id="repeat"
              value={habit.repeat}
              onChange={handleInputChange}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="goal"
            >
              Goal
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded"
              name="goal"
              id="goal"
              value={habit.goal.toString()}
              onChange={handleInputChange}
            >
              <option value="1">1 time a day</option>
              <option value="2">2 times a day</option>
              <option value="3">3 times a day</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="time"
            >
              Time Of Day
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded"
              name="time"
              id="time"
              value={habit.time}
              onChange={handleInputChange}
            >
              <option value="anytime">Anytime</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="start-date"
            >
              Start Date
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded"
              name="start-date"
              id="start-date"
            >
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => {
              setHabit({
                id: Math.floor(Math.random() * 1000),
                name: "",
                repeat: "daily",
                goal: 1,
                time: "morning",
              });
              setShowModal(false);
            }}
          >
            Discard
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              handleSave();
              setShowModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHabitModal;
