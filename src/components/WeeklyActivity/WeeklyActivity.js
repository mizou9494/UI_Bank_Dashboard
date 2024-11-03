import React from 'react';

import { Data } from '../../data';

import styled from 'styled-components';
import BarChart from '../BarChart/BarChart';
import PolarChart from '../PolarChart/PolarChart';
function WeeklyActivity() {
  const [chartData, setChartData] = React.useState({
    labels: Data.labels.map((label) => label), 
    datasets: [
      {
        label: Data.datasets[0].label,
        data: Data.datasets[0].data,
        backgroundColor: [
          "violet",
          "violet",
          "violet",
          "violet",
          "violet"
        ],
        borderColor: "black",
        borderWidth: 1,
        barThickness: 8,
        borderRadius: 5,
      },
      {
        label: Data.datasets[1].label,
        data: Data.datasets[1].data,
        backgroundColor: [
          "blue",
          "blue",
          "blue",
          "blue",
          "blue"
        ],
        borderColor: "black",
        borderWidth: 1,
        barThickness: 8,
        borderRadius: 5
      }
    ]
  });
  
  return (
    <Wrapper>
      <SectionHead>
        <h3>Weekly Activity</h3>
      </SectionHead>
      <BarChart chartData={chartData} />
      <PolarChart chartData={chartData} />
      {/* <PieChart chartData={chartData} /> */}
    </Wrapper>
  )
}

const SectionHead = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  padding: 0 20px;
`

export default WeeklyActivity;
