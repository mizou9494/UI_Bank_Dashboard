import React from 'react';

import styled from 'styled-components';

import ReactEcharts from 'echarts-for-react'

function CardExpenseStats() {
  const option = {
    tooltip: {},
    xAxis: {
      data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
    },
    yAxis: {},
    series: [
      {
        name: 'sales',
        type: 'pie',
        radius: ['30%', '70%'],
        roseType: 'area',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  return (
    <>
      <SectionHead>Card Expense Statistics</SectionHead>
      <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />
    </>
  )
}

const SectionHead = styled.h2`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

export default CardExpenseStats;
