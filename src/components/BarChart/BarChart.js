import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

function BarChart({ chatData }) {
  return (
    <ChartContainer>
      <Bar 
        data={chatData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Users Gained between 2016 and 2024'
            },
            legend: {
              display: false
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