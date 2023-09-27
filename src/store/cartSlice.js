import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../utils/mockData";

const cartSlice = createSlice({
  name: "cart",
  initialState: mockData,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
      console.log(action);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    updateStatus: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, status: action.payload.message }
          : item
      );
    },
  },
});

export const { addItem, removeItem, updateItem, updateStatus } =
  cartSlice.actions;

export default cartSlice.reducer;
