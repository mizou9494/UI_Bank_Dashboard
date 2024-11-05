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
          layout: {
            padding: 0
          },
          responsive: true,
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
        height={150}
      />
    </ChartContainer>
  )
}

const ChartContainer = styled.div`
  display: grid; 
  place-content: center;
  // margin: -30px 0px -30px 0;
  // min-height: 400px;

  // & canvas {
  //   height: 300px !important;
  // }
`

export default BarChart;