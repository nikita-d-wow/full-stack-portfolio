import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import TodoApp from './components/TodoApp';
import About from './components/About';
import Home from './components/Home';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const activeStyle =
    'bg-stone-600 text-white px-3 py-1 rounded transition font-semibold';
  const defaultStyle =
    'text-gray-800 hover:text-white hover:bg-stone-600 px-3 py-1 rounded transition font-semibold';

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-800 via-slate-700 to-stone-500 flex flex-col">
      <header className="bg-slate-300 shadow-md w-full px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-gray-800">Todo App</h1>
        <nav className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
          >
            Todos
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
          >
            About
          </NavLink>
        </nav>
      </header>

      <main className="flex justify-center items-start flex-1 p-8">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoApp />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  );
}
