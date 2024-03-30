import AddHabitModal from "./AddHabitModal";
import HabitsContainer from "./HabitsContainer";

const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-8">
        Habit Tracker
      </h1>
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => console.log("Add Habit")}
        >
          Add Habit
        </button>
      </div>
      <div className="flex justify-left m-4">
        <HabitsContainer />
        <AddHabitModal />
      </div>
    </>
  );
};

export default Home;
