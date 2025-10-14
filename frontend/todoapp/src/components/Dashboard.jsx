import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard({ todos }) {
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((t) => t.completed).length;
    const pending = total - completed;

    const categoryCount = todos.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + 1;
      return acc;
    }, {});

    return { total, completed, pending, categoryCount };
  }, [todos]);

  const data = {
    labels: ['Completed', 'Pending', ...Object.keys(stats.categoryCount)],
    datasets: [
      {
        label: 'Todo Statistics',
        data: [
          stats.completed,
          stats.pending,
          ...Object.values(stats.categoryCount),
        ],
        backgroundColor: [
          '#34d399',
          '#f87171',
          '#60a5fa',
          '#facc15',
          '#f472b6',
        ],
      },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto p-6 w-full bg-zinc-700 flex flex-col rounded-3xl shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Dashboard
      </h2>
      <Bar data={data} />
      <div className="mt-4 text-center text-white">
        <p>Total Todos: {stats.total}</p>
      </div>
    </div>
  );
}
