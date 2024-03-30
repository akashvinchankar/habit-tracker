import { createSlice } from "@reduxjs/toolkit";

const habitSlice = createSlice({
  name: "habit",
  initialState: [
    {
      name: "Drink Water",
      repeat: "daily",
      goal: 8,
      time: "morning",
    },
    {
      name: "Walk",
      repeat: "daily",
      goal: 1,
      time: "morning",
    },
    {
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
