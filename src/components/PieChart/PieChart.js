import React from 'react';
import styled from 'styled-components';

import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

function PieChart({ chartData }) {
  return (
    <ChartContainer>
      <Pie  
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: 'Users Expenses'
            },
            legend: false
          }
        }}
      />
    </ChartContainer>
  )
}

const ChartContainer = styled.div`
  display: grid; 
  place-content: center;
  width: 100%;
  height: 300px;
`

export default PieChart;
