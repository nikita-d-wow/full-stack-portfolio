// src/components/common/ChartWrapper.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ChartContainer = styled.div`
  background: ${COLORS.white};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  max-width: 600px;
  margin: 2rem auto;
`;

const Title = styled.h2`
  color: ${COLORS.secondary};
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export default function ChartWrapper({ title, data, options }) {
  return (
    <ChartContainer>
      {title && <Title>{title}</Title>}
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}
