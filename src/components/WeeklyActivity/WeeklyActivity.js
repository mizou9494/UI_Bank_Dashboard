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
          "#000000"
        ],
        borderColor: "black",
        borderWidth: 2
      },
      {
        label: Data.datasets[1].label,
        data: Data.datasets[1].data,
        backgroundColor: [
          "rgba(75,192,192,1)",
          // &quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#ffffff"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  
  return (
    <Wrapper>
      <SectionHead>
        <h3>Weekly Activity</h3>
      </SectionHead>
      <BarChart chartData={chartData} />
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