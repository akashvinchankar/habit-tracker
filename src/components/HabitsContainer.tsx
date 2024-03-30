import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Habit, deleteHabit } from "../store/habitSlice";
import { RootState } from "../store/store";
import HabitCard from "./HabitCard";
import HabitDetails from "./HabitDetails";

const HabitsContainer = () => {
  const dispatch = useDispatch();
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);
  const habits = useSelector((state: RootState) => state.habit);

  useEffect(() => {
    // Function to fetch random image for each habit
    const fetchRandomImage = async () => {
      try {
        const response = await fetch(
          "https://source.unsplash.com/random/400x300"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        const imageUrl = response.url;
        return imageUrl;
      } catch (error) {
        console.error("Error fetching image:", error);
        return "";
      }
    };

    // Loop through habits and fetch random image for each
    const updateHabitsWithImages = async () => {
      const updatedHabits = await Promise.all(
        habits.map(async (habit) => {
          const imageUrl = await fetchRandomImage();
          return { ...habit, imageUrl };
        })
      );
      // Update state with habits containing images
      setHabitsWithImages(updatedHabits);
    };

    updateHabitsWithImages();
  }, [habits]);

  const [habitsWithImages, setHabitsWithImages] = useState<Habit[]>([]);

  const handleDetailsClick = (habit: Habit) => {
    setSelectedHabit(habit);
  };

  const handleClosePopup = () => {
    setSelectedHabit(null);
  };

  const handleDeleteHabit = (habit: Habit) => {
    dispatch(deleteHabit(habit.id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Habits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {habitsWithImages.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onDetailsClick={() => handleDetailsClick(habit)}
            imageUrl={habit.imageUrl || ""}
          />
        ))}
      </div>
      {selectedHabit && (
        <HabitDetails
          habit={selectedHabit}
          onClose={handleClosePopup}
          onDelete={handleDeleteHabit}
        />
      )}
    </div>
  );
};

export default HabitsContainer;
