import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';
import undoReducer from './undoSLice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    undo: undoReducer,
  },
});
