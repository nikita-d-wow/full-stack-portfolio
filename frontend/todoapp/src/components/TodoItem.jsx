import React from 'react';

function TodoItem({ todo, onRemove, onToggleComplete }) {
  return (
    <li className="bg-transparent border border-gray-400 rounded px-3 py-2 flex justify-between items-center text-white">
      <span
        className={todo.completed ? 'line-through text-gray-400' : 'text-white'}
      >
        {todo.title} {todo.category && `(${todo.category})`}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggleComplete(todo.id)}
          className={`px-2 py-1 rounded text-white transition-colors ${
            todo.completed
              ? 'bg-gradient-to-r from-indigo-300 to-indigo-500 hover:from-indigo-500 hover:to-indigo-700'
              : 'bg-gradient-to-r from-violet-300 to-violet-500 hover:from-violet-500 hover:to-violet-700'
          }`}
        >
          {todo.completed ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={() => onRemove(todo.id)}
          className="px-2 py-1 rounded bg-gradient-to-r from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default React.memo(TodoItem);
