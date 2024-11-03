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
            },
            legend: {
              display: true,
              labels: {
                usePointStyle: true,
                color: '#333',
                font: {
                  size: 10,
                  weight: 'bold'
                },
                boxWidth: 10
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
  margin-top: -30px;
`

export default BarChart;