import HabitsContainer from "./HabitsContainer";
import AddHabitModal from "./AddHabitModal";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-8">
        Habit Tracker
      </h1>
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => setShowModal(true)}
        >
          Add Habit
        </button>
      </div>
      {showModal ? (
        <AddHabitModal setShowModal={setShowModal} />
      ) : (
        <div className="flex justify-left m-4">
          <HabitsContainer />
        </div>
      )}
    </>
  );
};

export default Home;
