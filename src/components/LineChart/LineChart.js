import React from 'react';

import { Line } from 'react-chartjs-2';

function LineChart({ data }) {
  return (
    <Line 
      data={data}
      options={{
        plugins: {
          legend: {
            display: false
          }
        }
      }} 
      height={200} 
    />
  )
}

export default LineChart;
