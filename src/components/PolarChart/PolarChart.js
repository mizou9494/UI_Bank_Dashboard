import React from 'react';
import styled from 'styled-components';

import { PolarArea } from 'react-chartjs-2';

function PolarChart({ chartData }) {
  return (
    <ChartContainer>
      <PolarArea
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
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

export default PolarChart;
