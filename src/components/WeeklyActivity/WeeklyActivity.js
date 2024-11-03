import React from 'react';

import { Data } from '../../data';

import styled from 'styled-components';
import PieChart from '../PieChart/PieChart';
import BarChart from '../BarChart/BarChart';
function WeeklyActivity() {
  const [chartData, setChartData] = React.useState({
    labels: Data.labels.map((label) => label), 
    datasets: [
      {
        label: Data.datasets[0].label,
        data: Data.datasets[0].data,
        backgroundColor: [
          "rgba(75,192,192,1)",
          // &quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  return (
    <>
      <SectionHead>
        <h3>Weekly Activity</h3>
      </SectionHead>
      <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />
    </>
  )
}

const SectionHead = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export default WeeklyActivity;
