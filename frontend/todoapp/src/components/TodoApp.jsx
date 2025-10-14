import TodoItem from './TodoItem';
import useLocalStorage from '../custom hooks/useLocalStorage';
import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');

  const categories = ['Work', 'Personal', 'Shopping', 'Other'];

  const addTodo = () => {
    if (!input.trim()) return setError('Todo title cannot be empty');
    if (!category) return setError('Please select a category');
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title: input.trim(), completed: false, category },
    ]);
    setInput('');
    setCategory('');
    setError('');
  };

  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  const filteredTodos =
    filter === 'All' ? todos : todos.filter((t) => t.category === filter);

  return (
    <div className="flex justify-center px-4 sm:px-0">
      <div className="w-full max-w-xl mt-8 p-6 bg-zinc-700 rounded-3xl shadow-lg flex flex-col">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Todo List
        </h2>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new todo..."
            className="flex-1 border border-gray-400 px-3 py-2 rounded-lg bg-transparent text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-1/2 border border-gray-400 px-3 py-2 rounded-lg bg-transparent text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat} className="text-black">
                {cat}
              </option>
            ))}
          </select>
          <button
            onClick={addTodo}
            className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-blue-600 text-white px-5 py-2 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-colors font-medium"
          >
            Add
          </button>
        </div>

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        {todos.length > 0 && (
          <div className="mb-5 flex justify-end items-center gap-2 flex-wrap">
            <label className="font-medium text-white">Filter:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-400 px-3 py-2 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-black">
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}

        {filteredTodos.length === 0 ? (
          <p className="text-gray-300 text-center">No todos yet.</p>
        ) : (
          <ul className="space-y-2">
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onRemove={removeTodo}
                onToggleComplete={toggleComplete}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
