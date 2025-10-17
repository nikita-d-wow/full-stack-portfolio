import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Todo from './components/pages/Todo';
import ErrorBoundary from './components/ErrorBoundary';
import { ROUTES } from './utils/routes';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.TODO} element={<Todo />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
