import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import HabitCard from "./HabitCard";

const HabitsContainer = () => {
  const habits = useSelector((state: RootState) => state.habit);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Your Habits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
};

export default HabitsContainer;
