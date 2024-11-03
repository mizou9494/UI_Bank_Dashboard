import React from 'react';
import styled from 'styled-components';

import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

function PieChart({ chartData }) {
  return (
    <ChartContainer>
      <h2>Pie Chart</h2>
      <Pie  
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Users Gained by Month'
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

export default PieChart;
