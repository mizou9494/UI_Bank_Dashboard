import React from 'react';

import styled from 'styled-components';

import ReactEcharts from 'echarts-for-react'

function CardExpenseStats() {
  const option = {
    tooltip: {},
    legend: {
      display: false
    },
    yAxis: {},
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 100,
            name: 'BMCE Bank'
          },
          {
            value: 150,
            name: 'UBA Bank'
          },
          {
            value: 200,
            name: 'Zenith Bank'
          },
          {
            value: 300,
            name: 'Access Bank'
          }
        ]
      }
    ]
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
