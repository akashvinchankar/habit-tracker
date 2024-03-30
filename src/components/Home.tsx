import { useState } from "react";
import AddHabitModal from "./AddHabitModal";
import HabitsContainer from "./HabitsContainer";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mx-auto px-4 mt-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Habit Tracker
      </h1>
      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Add Habit
        </button>
      </div>
      {showModal ? (
        <AddHabitModal setShowModal={setShowModal} />
      ) : (
        <div className="flex justify-center">
          <HabitsContainer />
        </div>
      )}
    </div>
  );
};

export default Home;
