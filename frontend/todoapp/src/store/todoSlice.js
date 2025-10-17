import { createSlice } from '@reduxjs/toolkit';
const storedTodos = JSON.parse(localStorage.getItem('todos_v1')) || [];

const initialState = {
  items: storedTodos,
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        ...action.payload,
        id: state.items.length ? state.items[state.items.length - 1].id + 1 : 1,
        isCompleted: false,
      };
      state.items.push(newTask);
      localStorage.setItem('todos_v1', JSON.stringify(state.items));
    },
    editTask: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
      localStorage.setItem('todos_v1', JSON.stringify(state.items));
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('todos_v1', JSON.stringify(state.items));
    },
    toggleTask: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) state.items[index].isCompleted = !state.items[index].isCompleted;
      localStorage.setItem('todos_v1', JSON.stringify(state.items));
    },
    setTasks: (state, action) => {
      state.items = action.payload;
      localStorage.setItem('todos_v1', JSON.stringify(state.items));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetAll: (state) => {
      state.items = [];
      localStorage.setItem('todos_v1', JSON.stringify(state.items));
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTask, setTasks, setFilter, resetAll } =
  todosSlice.actions;
export default todosSlice.reducer;
