import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: number;
  name: string;
  repeat: string;
  goal: number;
  time: string;
  imageUrl?: string | undefined;
}

const habitSlice = createSlice({
  name: "habit",
  initialState: [
    {
      id: 1,
      name: "Drink Water",
      repeat: "daily",
      goal: 8,
      time: "morning",
    },
    {
      id: 2,
      name: "Walk",
      repeat: "daily",
      goal: 1,
      time: "morning",
    },
    {
      id: 3,
      name: "Read",
      repeat: "daily",
      goal: 1,
      time: "morning",
    },
  ],
  reducers: {
    addHabit: (state: Habit[], action) => {
      state.push(action.payload);
    },
    deleteHabit: (state: Habit[], action) => {
      return state.filter((habit: Habit) => habit.id !== action.payload);
    },
  },
});

export const { addHabit, deleteHabit } = habitSlice.actions;

export default habitSlice.reducer;
