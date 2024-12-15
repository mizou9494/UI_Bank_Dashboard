import React from 'react';

import styled from 'styled-components';

import ReactEcharts from 'echarts-for-react'
import { Radius } from 'lucide-react';

function CardExpenseStats() {
  const option = {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    // grid: {
    //   left: '10%',
    //   right: '10%',
    //   bottom: '10%',
    //   containLabel: true,
    // },
    // yAxis: {},
    series: [
      {
        name: 'Bank Distribution',
        type: 'pie',
        radius: ['50%', '70%'],
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
        ],
        roseType: 'area',
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      }
    ]
  };
  // option = {
  //   series: [
  //     {
  //       type: 'pie',
  //       data: [
  //         {
  //           value: 100,
  //           name: 'A'
  //         },
  //         {
  //           value: 200,
  //           name: 'B'
  //         },
  //         {
  //           value: 300,
  //           name: 'C'
  //         },
  //         {
  //           value: 400,
  //           name: 'D'
  //         },
  //         {
  //           value: 500,
  //           name: 'E'
  //         }
  //       ],
  //       roseType: 'area'
  //     }
  //   ]
  // };
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
