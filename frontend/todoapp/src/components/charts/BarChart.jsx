// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import styled from 'styled-components';
// import { COLORS } from '../../utils/constants';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const ChartContainer = styled.div`
//   background: ${COLORS.white};
//   border-radius: 16px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//   padding: 2rem;
//   max-width: 600px;
//   margin: 2rem auto;
// `;

// const Title = styled.h2`
//   color: ${COLORS.secondary};
//   text-align: center;
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
// `;

// const BarChart = () => {
//   const items = useSelector((state) => state.todos.items);
//   const completed = items.filter((t) => t.isCompleted).length;
//   const active = items.length - completed;

//   const data = {
//     labels: ['Active', 'Completed'],
//     datasets: [
//       {
//         label: 'Todos',
//         data: [active, completed],
//         backgroundColor: [COLORS.mocha, COLORS.cream],
//       },
//     ],
//   };

//   const options = { plugins: { legend: { display: false } } };

//   return (
//     <ChartContainer>
//       <Title>Statistics</Title>
//       <Bar data={data} options={options} />
//     </ChartContainer>
//   );
// };

// export default BarChart;

import React from 'react';
import { useSelector } from 'react-redux';
import ChartWrapper from '../common/ChartWrapper';
import { COLORS } from '../../utils/constants';

const BarChart = () => {
  const items = useSelector((state) => state.todos.items);
  const completed = items.filter((t) => t.isCompleted).length;
  const active = items.length - completed;

  const data = {
    labels: ['Active', 'Completed'],
    datasets: [
      {
        label: 'Todos',
        data: [active, completed],
        backgroundColor: [COLORS.mocha, COLORS.cream],
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
  };

  return <ChartWrapper title="Statistics" data={data} options={options} />;
};

export default BarChart;
