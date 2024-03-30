import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: number;
  name: string;
  repeat: string;
  goal: number;
  time: string;
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
    addHabit: (state: unknown[], action) => {
      state.push(action.payload);
    },
  },
});

export const { addHabit } = habitSlice.actions;

export default habitSlice.reducer;
