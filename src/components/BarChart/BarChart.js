import React from 'react';
import styled from 'styled-components';

import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function BarChart({ chartData }) {
  return (
    <ChartContainer>
      <Bar 
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Users Gained between 2016 and 2024'
            },
            legend: {
              display: true,
              labels: {
                color: '#333',
                font: {
                  size: 10,
                  weight: 'bold'
                },
                boxWidth: 30
              }
            }
          }
        }}
      />
    </ChartContainer>
  )
}

const ChartContainer = styled.div`
  display: grid; 
  place-content: center;
`

export default BarChart;