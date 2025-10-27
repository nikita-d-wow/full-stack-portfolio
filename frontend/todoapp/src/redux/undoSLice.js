import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastDeleted: null,
};

export const undoSlice = createSlice({
  name: 'undo',
  initialState,
  reducers: {
    setLastDeleted: (state, action) => {
      state.lastDeleted = action.payload;
    },
    clearLastDeleted: (state) => {
      state.lastDeleted = null;
    },
  },
});

export const { setLastDeleted, clearLastDeleted } = undoSlice.actions;
export default undoSlice.reducer;
